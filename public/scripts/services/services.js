(function () {

"use strict";    
    
angular.module("app")


.service("dataService", function ($http) {
   
    
    //get the recipes (The value the promise was waiting on is given to the then callback as an argument) (this is refering to dataservice)
    this.recipes = function (callback) { $http.get('/api/recipes').then(callback);
    }; 
    

    //get the categories
    this.categories = function (callback) {
    $http.get("/api/categories").then(callback);    
    };
    
    //get the fooditems
    this.fooditems = function (callback) {
    $http.get("/api/fooditems").then(callback);    
    };
    
    //Gets all of the recipes for the specified category.
    this.recipebyCategory = function (category, callback) {
    $http.get("/api/recipes?category=" + category).then(callback);    
    };
    
    //Gets the recipe for the specified ID.
    this.recipebyID = function (recipeId, callback) {
    $http.get("/api/recipes/" + recipeId).then(callback); }; 
    
    //Updates the recipe for the specified ID.
    this.updateRecipe = function (recipe, callback) {
    $http.put("/api/recipes/" + recipe._id, recipe).then(callback);    
    };
    
    //Adds a recipe.
    this.addRecipe = function (recipe, callback) {
    $http.post("/api/recipes", recipe).then(callback);    
    };
    
  // Deletes the recipe for the specified ID
  this.deleteRecipeById = function(id,recipe, callback){
  $http.delete("/api/recipes/" + id).then(callback);
  };
      
    
}); 
})();
