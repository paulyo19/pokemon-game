// DATABASE
var pokemonDB = [
      {
        name: 'charmander',
        type: 'fire',
        hp:39,
        attack: 52,
        defence: 43,
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
var pokemonsEl = document.querySelector('.select-screen').querySelectorAll('.character')
console.log(pokemonsEl)
var battleScreenEl = document.getElementById('battle-screen')
var attackBtnsEl = document.getElementById('battle-screen').querySelectorAll('.attack')
console.log(attackBtnsEl)



// THIS IS THE INITIAL LOOP
var i = 0;
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
    gameState.currentPokemon = pokemonDB.filter(function(pokemon){
      return pokemon.name == gameState.userPokemon
    })
    player1Img[0].src = gameState.currentPokemon[0].img

// SELECT DATA FROM CURRENT USER POKEMON 
    gameState.currentRivalPokemon = pokemonDB.filter(function(pokemon){
      return pokemon.name == gameState.rivalPokemon
    })
    player2Img[0].src = gameState.currentRivalPokemon[0].img

  // current user and cpu pokemon initail health
    gameState.currentPokemon[0].health = calculateInitialHealth(gameState.currentPokemon)
    gameState.currentRivalPokemon[0].health = calculateInitialHealth(gameState.currentRivalPokemon)
    console.log(gameState)
  }
  i++
}

var a = 0
while (a < attackBtnsEl.length) {
  attackBtnsEl[a].onclick = function(){
    var attackName = this.dataset.attack
    gameState.currentUserAttack = attackName
    
    play(attackName, cpuAttack())
  }
  a++
}

var cpuAttack = function () {
  var attacks = ['rock', 'paper', 'scissors']

  return attacks[randomNumber(0,3)]
}

var calculateInitialHealth = function (user){
  return ((0.20 * Math.sqrt(user[0].level)) * user[0].defence) * user[0].hp
}

var attackMove = function (attack, level, stack, critical, enemy, attacker) {
  console.log(enemy.name + ' before: ' + enemy.health)
  var attackAmount = ((attack * level) * (stack + critical))
  enemy.health = enemy.health - attackAmount
  checkWinner(enemy, attacker)
  console.log(enemy.name + ' after: ' + enemy.health)
}
var checkWinner = function(enemy, attacker) {
  if (enemy.health <= 0){
    console.log('hey winnerrrrr' + attacker.name)
  }
}

var play = function(userAttack, cpuAttack){
  var currentPokemon = gameState.currentPokemon[0]
  var currentRivalPokemon = gameState.currentRivalPokemon[0]
  switch (userAttack) {
    case 'rock':
      if (cpuAttack == 'paper'){ 
        if(currentPokemon.health >= 1 && currentRivalPokemon.health >= 1){
        //user
        attackMove(currentPokemon.attack, currentPokemon.level, .8, .5, currentRivalPokemon, currentPokemon)
        if(currentRivalPokemon.health >= 1){
          //cpu
          attackMove(currentRivalPokemon.attack, currentRivalPokemon.level, .8, 2, currentPokemon, currentRivalPokemon)
          }
        }
      }
      if (cpuAttack == 'scissors'){
        if(currentPokemon.health >= 1 && currentRivalPokemon.health >= 1){
          //user
          attackMove(currentPokemon.attack, currentPokemon.level, .8, 2, currentRivalPokemon, currentPokemon)
          if(currentRivalPokemon.health >= 1){
          //cpu
          attackMove(currentRivalPokemon.attack, currentRivalPokemon.level, .8, .5, currentPokemon, currentRivalPokemon)
          }
        }
      }
        if (cpuAttack == 'rock'){
          if(currentPokemon.health >= 1 && currentRivalPokemon.health >= 1){
            //user
          attackMove(currentPokemon.attack, currentPokemon.level, .8, 1, currentRivalPokemon, currentPokemon)
          if(currentRivalPokemon.health >= 1){
            //cpu
          attackMove(currentRivalPokemon.attack, currentRivalPokemon.level, .8, 1, currentPokemon, currentRivalPokemon)
          }
        }
      }
        break;
        case 'paper':
          if (cpuAttack == 'paper'){ 
            if(currentPokemon.health >= 1 && currentRivalPokemon.health >= 1){
              //user
          attackMove(currentPokemon.attack, currentPokemon.level, .8, 1, currentRivalPokemon, currentPokemon)
          if(currentRivalPokemon.health >= 1){
          //cpu
          attackMove(currentRivalPokemon.attack, currentRivalPokemon.level, .8, 1, currentPokemon, currentRivalPokemon)
          }
        }
      }
  
        if (cpuAttack == 'scissors'){
          if(currentPokemon.health >= 1 && currentRivalPokemon.health >= 1){
            //user
           attackMove(currentPokemon.attack, currentPokemon.level, .8, .5, currentRivalPokemon, currentPokemon)
           if(currentRivalPokemon.health >= 1){
           //cpu
           attackMove(currentRivalPokemon.attack, currentRivalPokemon.level, .8, 2, currentPokemon, currentRivalPokemon)
          }
        }
      }
        if (cpuAttack == 'rock'){
          if(currentPokemon.health >= 1 && currentRivalPokemon.health >= 1){
            //user
           attackMove(currentPokemon.attack, currentPokemon.level, .8, 2, currentRivalPokemon, currentPokemon)
           if(currentRivalPokemon.health >= 1){
           //cpu
           attackMove(currentRivalPokemon.attack, currentRivalPokemon.level, .8, .5, currentPokemon, currentRivalPokemon)
          }
        }
      }
      
        break;
        case 'scissors':
          if (cpuAttack == 'paper'){ 
            if(currentPokemon.health >= 1 && currentRivalPokemon.health >= 1){
              //user
            attackMove(currentPokemon.attack, currentPokemon.level, .8, 2, currentRivalPokemon, currentPokemon)
            if(currentRivalPokemon.health >= 1){
          //cpu
          attackMove(currentRivalPokemon.attack, currentRivalPokemon.level, .8, .5, currentPokemon, currentRivalPokemon)
          }
        }
      }
  
        if (cpuAttack == 'scissors'){
          if(currentPokemon.health >= 1 && currentRivalPokemon.health >= 1){
            //user
           attackMove(currentPokemon.attack, currentPokemon.level, .8, 1, currentRivalPokemon, currentPokemon)
           if(currentRivalPokemon.health >= 1){
           //cpu
           attackMove(currentRivalPokemon.attack, currentRivalPokemon.level, .8, 1, currentPokemon, currentRivalPokemon)
          }
        }
      }
        if (cpuAttack == 'rock'){
          if(currentPokemon.health >= 1 && currentRivalPokemon.health >= 1){
            //user
           attackMove(currentPokemon.attack, currentPokemon.level, .8, .5, currentRivalPokemon, currentPokemon)
           if(currentRivalPokemon.health >= 1){
           //cpu
           attackMove(currentRivalPokemon.attack, currentRivalPokemon.level, .8, 2, currentPokemon, currentRivalPokemon)
          }
        }
      }
    break;
  }
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
  
