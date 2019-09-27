// DATABASE
var pokemonDB = [
      {
        name: 'charmander',
        type: 'fire',
        hp:39,
        attack: 52,
        defencee: 43,
        level: 1,
        img: 'http://www.smogon.com/dex/media/sprites/xy/charmander.gif'
      },
      {
        name: 'bulbasaur',
        type: 'grass',
        hp: 45,
        attack: 49,
        defence: 49,
        level: 1,
        img: 'http://www.smogon.com/dex/media/sprites/xy/bulbasaur.gif'
      },
      {
        name: 'squirtle',
        type: 'water',
        hp: 44,
        attack: 48,
        defence: 65,
        level: 1,
        img: 'http://www.smogon.com/dex/media/sprites/xy/squirtle.gif'
      },
      
    ]

// STATE
var gameState = {
  userPokemon: '',
  rivalPokemon: '' 
}
console.log(gameState)

// ELEMENTS
var pokemonsEl = document.querySelector('.select-screen').querySelectorAll('.character');
console.log(pokemonsEl);
var battleScreenEl = document.getElementById('battle-screen')
let i = 0;

// THIS IS THE INITIAL LOOP
while (i < pokemonsEl.length){
 // .ADD FUNCTION TO ALL CHARACTERS ON SCREEN SELECT
  pokemonsEl[i].onclick = function(){
// CURRENT SELECTED POKEMONS
    var pokemonName = this.dataset.pokemon
// ELEMENTS FOR IMAGES ON BATLE SCREEN
    var player1Img = document.querySelector('.player1').getElementsByTagName('img')
    var player2Img = document.querySelector('.player2').getElementsByTagName('img')
// WE SAVE THE CURRENT POKEMON 
    gameState.userPokemon = pokemonName

// CPU PICKS A POKEMON
    cpuPick()
// CHANGE SCREEN TO BATTLE SCREEN
    battleScreenEl.classList.toggle('active')
    
// SELECT DATA FROM CURRENT USER POKEMON
    var currentPokemon = pokemonDB.filter(function(pokemon){
      return pokemon.name == gameState.userPokemon
    })
    player1Img[0].src = currentPokemon[0].img

// SELECT DATA FROM CURRENT USER POKEMON 
    var currentRivalPokemon = pokemonDB.filter(function(pokemon){
      return pokemon.name == gameState.rivalPokemon
    })
    player2Img[0].src = currentRivalPokemon[0].img
  }
  i++
}

var randomNumber = function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}


var cpuPick = function() {
  gameState.rivalPokemon = pokemonsEl[randomNumber(0, 3)].dataset.pokemon
}



















//  pokemon
//  create data for 3 different pokemons, with their names, type, weaknesses, health, and attack moves(name, attack stat, maximum)
// var pokemons = [
//     {
//       name: 'charmander',
//       type: 'fire',
//       attack: 52,
//       stamina: 39,
//       level: 1
//     },
//     {
//       name: 'charmander',
//       type: 'fire',
//       attack: 52,
//       stamina: 39,
//       level: 1
//     },
    
//   ]
  
  
//   var attack = 20;
//   var level = 10;
//   var stack = 1.3;
//   var stamina = 39;
  
//   create a formula for attacks
//   console.log((attack * level ) * stack / 7)
  
  
  
//    create a formula for health
//   HP = 0.20 x Sqrt(Pokemon_level) x (HP_base_stat)
//   console.log(((0.20 * Math.sqrt(level)) * stamina) * 15)
  
  
  
  
//   let user choose 1 and then assign a random pokemon to battle thats not the users pokemon
//    p1 vs p2
  
  
  
  
//  when one user loses all his health declare a winner
  
