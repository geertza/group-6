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
router.get("/api/instructions", function(req, res) {
// let id ="482788"
// model.getRecipeInfo(id,function (results){
//  console.log(results)
  res.render("recipe")
});
// });

router.get("/", (req, res) => {
    res.render("index");
  });
    

// Export routes for server.js to use.
module.exports = router;
