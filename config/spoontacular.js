axios= require("axios")
let api = {
  searchRecipes: function (search,cuisine,diet,alergy,cb) {

    //  query for spoonacular
    var queryUrl = `https://api.spoonacular.com/recipes/search?apiKey=e85211eb9a3c49349f9007cc03edf1c7&query=${search}&number=20&cuisine=${cuisine}&diet=${diet}&intolerances=;`;
    
    //  Creating an AJAX call for the specific search button being clicked.
    axios.get(queryUrl).then(function (response) {
     
        cb(response);})},
    getRecipeInfo: function(id,cb){
        var queryUrl = `https://api.spoonacular.com/recipes/${id}/information?apiKey=e85211eb9a3c49349f9007cc03edf1c7`
        axios.get(queryUrl).then(function (response) {
            cb(response);})}
        }
        module.exports = api