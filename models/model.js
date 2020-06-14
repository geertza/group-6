const spoon = require ("../config/spoontacular")
let fs=require("fs")
var model = {
   // create a new burger in database
    FindRecipe: function(search,cuisine,diet,alergy, cb) {
      spoon(search,cuisine,diet,alergy,cb)
    },
   
  }


// function doSomething(callback) {
//   something(function(err, data) {
//       if(err) {
//           callback(err);
//           return;
//       }
//       // Only run if no error 
//   });

  // Export the database functions to use in  controller
  module.exports = model;