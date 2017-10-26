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


var square = document.querySelectorAll(".square")

var pickedColor = "Charmander"



for(var i = 0; i < square.length; i++){
  var rand = Math.floor(Math.random() * pokemon.length);
  square[i].style.backgroundImage = "url(" + pokemon[rand].image + ")";
}


// "url(images/charmander.png)"
