const spoon = require ("../config/spoontacular")
let fs=require("fs")
var model = {
   // send search params to axios
   searchRecipes: function(search,cuisine,diet,alergy, cb) {
      spoon.searchRecipes(search,cuisine,diet,alergy,cb)
    },
    getRecipeInfo: function(id, cb) {
      spoon.getRecipeInfo(id,cb)
    },
   
  }


  // Export the database functions to use in  controller
  module.exports = model;