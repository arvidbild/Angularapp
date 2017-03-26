(function () {

angular.module("app")


.controller("RecipeDetailController", function ($scope, $location, dataService, $routeParams) {
    
    $scope.title = "";
    $scope.recipe = {
               name: "",
        description: "",
           category: "",
           prepTime: "",
           cookTime: "",
        ingredients: [],
              steps: []
    }
    $scope.errors = [];        
    $scope.categories = [];
    $scope.foodItems = [];
        
    
    //sets the title to "Add new recipe"
    if ($location.url() === "/add") {
        $scope.title = "Add New Recipe";
    } else {
        
       var recipeId = $routeParams.id;
       dataService.recipebyID(recipeId, function (response) {
       $scope.recipe = response.data;
       $scope.title = $scope.recipe.name;
       }); 
    } 
   
   //save new recipe 
    $scope.saveRecepie = function () {
    if($scope.recipe._id) {
    dataService.updateRecipe($scope.recipe);
    console.log($scope.recipe);
    } else {
    dataService.addRecipe($scope.recipe);        
    }
    }
    
    //If user clicks on Cancel button
    $scope.startPage = function () {
    $location.path("/")
    }
    
    //Show errors 
    $scope.errors = function () {
    return $scope.errors.length > 0;    
    }
    
      //get categories from API for category dropdown
    dataService.categories(function (response) {
    $scope.categories = response.data;
    
    });    
    
    //get ingrediets from API for Ingredients dropdown
    dataService.fooditems(function (response) {
    $scope.foodItems = response.data; 
    console.log($scope.foodItems);
    
    });
    
    //Delete recipe ingredient from the API when the user clicks Delete
    $scope.deleteIngredient = function (index) {
    $scope.recipe.ingredients.splice(index,1);
    };
    
    //Add a new recipe ingredient.
    $scope.addingredient = function (index) {
    $scope.recipe.ingredients.push({});    
    }
    
    //Delete recipe steps
    $scope.deleteStep = function (index) {
    $scope.recipe.steps.splice(index,1);    
    }
    
    //add recipe steps
    $scope.addStep = function () {
    $scope.recipe.steps.push({});    
    }
    
    
});
})();

