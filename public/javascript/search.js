document.body.onload = function() {generateResults()};


         // function to generate Brewery list in a grid
 function generateResults(){
  //  loop to create buttons
    for (i=0; i<searchResults.length; i++){  
    let recipe = `<button     onclick="proceed(${searchResults[i].id});" name='id' value='here' >
    <div class="recipe" style="background-image: url(https://webknox.com/recipeImages/${searchResults[i].image});">
    <div class="title">${searchResults[i].title}</div></button>`
    $(".recipegrid").append(recipe);
    }}

    function proceed (val) {
      let fakeForm= `<form name='fake'action="/api/instructions" method="post" ><input type="hidden"  name="id" value=${val} "><input type="submit"  </form>`
      $(".recipegrid").append(fakeForm)
      document.forms["fake"].submit();
    }

    