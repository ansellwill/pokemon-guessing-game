var pokemon = [
  { name: 'Bulbasaur', image:'images/bulbasaur.png' },
  { name: 'IvySaur', image:'images/ivysaur.png' },
  { name: 'Venusaur', image:'images/venusaur.png' },
  { name: 'Charmander', image: 'images/charmander.png' },
  { name: 'Charmeleon', image: 'images/charmeleon.png' },
  { name: 'Charizard', image: 'images/charizard.png' },
  { name: 'Squirtle', image: 'images/squirtle.png' },
  { name: 'Wartortle', image: 'images/wartortle.png' },
  { name: 'Blastoise', image: 'images/blastoise.png' },
  { name: 'Pikachu', image:'images/pikachu.png' },
  { name: 'Mewtoo', image:'images/mewtoo.png' },
  { name: 'Abra', image:'images/abra.png' },
  { name: 'Geodude', image:'images/geodude.png' },
  { name: 'Zapdos', image:'images/zapdos.png' },
  { name: 'Pidgey', image:'images/pidgey.png' }
];


var square = document.querySelectorAll(".square");
var messageDisplay = document.querySelector("#message")
var title = document.querySelector("h1");
 // Make an array of random numbers with no repeats
var arr = []
while(arr.length < 6){
    var randomnumber = Math.floor(Math.random()*15)
    if(arr.indexOf(randomnumber) > -1) continue;
    arr[arr.length] = randomnumber;
}

var randomNumber = Math.floor(Math.random() * 6);
var pickedPokemon = "url(\"" + pokemon[arr[randomNumber]].image + "\")";
var pickedPokemonName = pokemon[arr[randomNumber]].name;
title.textContent = pickedPokemonName;

 // Use random numbers to select pokemon images
for(var i = 0; i < square.length; i++){
  square[i].style.backgroundImage = "url(" + pokemon[arr[i]].image + ")";


  //add click listeners to squares
  square[i].addEventListener("click",function(){
    //Get Name of clicked square
  var clickedPokemon = this.style.backgroundImage;
    // Compare Pokemon to clicked image
  if (clickedPokemon === pickedPokemon) {
    messageDisplay.textContent = "Correct";
    changePokemon();
  } else {
    this.style.backgroundImage = "none";
    messageDisplay.textContent = "Try Again"
  }
  });
}

function changePokemon(pokemon){
  //Loop through all squares
  for(var i = 0; i < square.length; i++){
  //Change each to the given Pokemon
  square[i].style.backgroundImage = pickedPokemon;
  }
}
