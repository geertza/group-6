var express = require("express");
var router = express.Router();
var model = require('../models/model')
let fs=require("fs")
// Create all our routes and set up logic within those routes where required.
router.post("/api", function(req, res) {
//     // model.create(["spoon"],
//     let {search,cuisine,diet,alergy} = req.body
//     console.log("control allergy=",alergy) 
//     model.FindRecipe(search,cuisine,diet,alergy,function (res){
//     console.log(res.data)
//       data =`const searchResults = ${JSON.stringify(res.data.results)}`
//     console.log("dats ="+data)
//       fs.writeFileSync("./public/javascript/apiResults.js", data, function(err) {
//       if(err) {
//            console.log(err);
//       }
      res.render("ApiResults")
  }); 

// });
// });
  

router.get("/", (req, res) => {
    res.render("index");
  });
    

// Export routes for server.js to use.
module.exports = router;
