const searchResults = []
    
    document.getElementById("test").addEventListener("click", start);

    function start() {
        console.log("start");
      document.getElementsByClassName('form')[0].style.display = 'none';
      document.getElementById("results").style.display = "block";
    generateResults()}


         // function to generate Brewery list in a grid
 function generateResults(){
   
  // remove previous search 
    $(".recipe").remove()
  //  loop to create buttons
    for (i=0; i< searchResults.length; i++){  
    let recipe = `<div class="recipe" style="background-image: url(https://webknox.com/recipeImages/${searchResults[i].image});">
    <div class="title">${searchResults[i].title}</div>`
    $(".recipegrid").append(recipe);
    }}


    