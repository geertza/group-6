var express = require("express");
var router = express.Router();
var model = require('../models/model')
let fs=require("fs")
// Create all our routes and set up logic within those routes where required.
router.post("/api", function(req, res) {
    let {search,cuisine,diet,alergy} = req.body
  
    model.searchRecipes(search,cuisine,diet,alergy,function (results){
      data =`const searchResults = ${JSON.stringify(results.data.results)}`
      fs.writeFile("./public/javascript/apiResults.js", data, (err) => {
        if (err) throw err;
        
  }); 
res.render("ApiResults")
});
});
router.post("/api/instructions", function(req, res) {
  
model.getRecipeInfo(req.body.id,function (results){
  let {summary,image,extendedIngredients,instructions} =results.data
  // complex way to avoid api-key from being displayed
  data =`const instruction = ${JSON.stringify(instructions)}
  const image= ${JSON.stringify(image)}
  const extendedIngredients = ${JSON.stringify(extendedIngredients )}
  const summary= ${JSON.stringify(summary)}
  `
  fs.writeFile("./public/javascript/recipeData.js", data, (err) => {
    if (err) throw err;
    
}); 
  res.render("recipe")
});
});

router.get("/", (req, res) => {
    res.render("index");
  });
    

// Export routes for server.js to use.
module.exports = router;
