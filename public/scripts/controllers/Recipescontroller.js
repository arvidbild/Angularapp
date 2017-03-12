(function () {
"use strict";

angular.module("app")

//The controller fills in any data and functions specified in the template file's $scope, and may use a service to get outside data
.controller("RecipesController", function($scope, dataService, $location) {
   
      // Controlls the state of the ng-model etc in the recipes.html. 
        $scope.recipes = [];
        $scope.categories = [];
        $scope.currentCategory = {};

    
    //gets the recipes from the API
    dataService.recipes(function (response) {
        $scope.recipes = response.data;
    });
    
    //gets the categories from the API 
    dataService.categories(function (response) {
       $scope.categories = response.data; 
    }); 
    
    $scope.filterByCategory = function filterByCategory() {
        var category = $scope.currentCategory ? $scope.currentCategory.name : "";
        dataService.recipebyCategory(category, function (response) {
            $scope.recipes = response.data;
            });
        }
  
      
    //binding "/add" to the "add recepie" button
    $scope.addRecipe = function () {
        $location.path("/add");
    };
    
    
    $scope.deleteRecipeById = function(recipe, index){
    var id = recipe._id;
    dataService.deleteRecipeById(id);
    $scope.recipes.splice($index, 1);
    };
        
    
});

})();