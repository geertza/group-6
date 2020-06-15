document.body.onload = function() {
    generatesummary();
    generateinstructions();
    getImage();
    ingredients();
};

function generatesummary(){
    $(".summary").append(summary)
}

function generateinstructions(){
    $(".instructions").append(instruction)
}
function getImage(){
    let pic = `<div class="savoryy" style="background-image: url('${image}');"></div>`
  $(".savory").append(pic)
}

function ingredients(){
    console.log(extendedIngredients[0].original)
    let x =extendedIngredients
    for (i = 0; i < x.length; i++) {
        $(".ingredients").append(x[i].original)}

}