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
var pickedPokemon
var difficulty = 6;

var square = document.querySelectorAll(".square");
var messageDisplay = document.querySelector("#message")
var title = document.querySelector("h2");
var resetButton = document.querySelector("#reset");
var easybtn = document.querySelector("#easybtn");
var hardbtn = document.querySelector("#hardbtn");

easybtn.addEventListener("click", function(){
  hardbtn.classList.remove("selected");
  easybtn.classList.add("selected");
}
)

hardbtn.addEventListener("click", function(){
  easybtn.classList.remove("selected");
  hardbtn.classList.add("selected");
}
)

resetButton.addEventListener("click", function(){
  arr = [];
  resetButton.textContent = "New Pokemon";
  generateNumberLine();
  selectPokemon();
  for(var i = 0; i < square.length; i++){
  square[i].style.backgroundImage = "url(" + pokemon[arr[i]].image + ")";
    }
  }
)



 // Make an array of random numbers with no repeats
var arr = [];
function generateNumberLine(){
while(arr.length < difficulty){
    var randomNumberLine = Math.floor(Math.random()* pokemon.length)
    if(arr.indexOf(randomNumberLine) > -1) continue;
    arr[arr.length] = randomNumberLine;
  }
}

generateNumberLine();

function selectPokemon() {
  var randomNumber = Math.floor(Math.random() * arr.length);
  pickedPokemon = "url(\"" + pokemon[arr[randomNumber]].image + "\")";
  var pickedPokemonName = pokemon[arr[randomNumber]].name;
  title.textContent = pickedPokemonName;
}
selectPokemon();

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
    resetButton.textContent = "Play Again?";
    changePokemon();
  } else {
    this.style.backgroundImage = "none";
    messageDisplay.textContent = "Try Again"
  }
  });
}

function changePokemon(){
  //Loop through all squares
  for(var i = 0; i < square.length; i++){
  //Change each to the given Pokemon
  square[i].style.backgroundImage = pickedPokemon;
  }
}
