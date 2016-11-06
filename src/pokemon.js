var pokemonArray = [
  {name: 'Aerodactyl', path: 'images/aerodactyl.png'},
  {name: 'Alakazam', path: 'images/alakazam.png'},
  {name: 'Gyarados', path: 'images/gyarados.png'},
  {name: 'Kabutops', path: 'images/kabutops.png'},
  {name: 'Kangaskhan', path: 'images/kangaskhan.png'},
  {name: 'Machamp', path: 'images/machamp.png'},
  {name: 'Onix', path: 'images/onix.png'},
  {name: 'Rhydon', path: 'images/rhydon.png'},
  {name: 'Tauros', path: 'images/tauros.png'}
]

var bossArray = [
  {name: 'Lugia', path: 'images/lugia.png'}
]

var increasePoke = 0;
var totalPoke = 4;
var newHP = 5;
var currentHP = newHP;
var score = 0;
var upgrade = false;
var normalPokemon = true;
var bossPokemon = false;
var image = document.getElementById('image');
var pokeName = document.getElementById('pokeName');
var displayHP = document.getElementById('currentHP');
var displayScore = document.getElementById('score');
var randomPoke = Math.floor(Math.random() * pokemonArray.length);

image.setAttribute('src', pokemonArray[randomPoke].path);
pokeName.textContent = pokemonArray[randomPoke].name;
displayHP.textContent = 'Health: ' + currentHP;

image.addEventListener('click', attackPokemon);

document.getElementById('upgrade').addEventListener('click', setUpgrade);

function attackPokemon() {
  if (upgrade) {
    currentHP -= 2;
    actionMadeToPokemon();
  } else {
    currentHP -= 1;
    actionMadeToPokemon();
  }
}

function actionMadeToPokemon() {
  if (currentHP <= 0) {
    if (normalPokemon === true) {
      console.log('Pokemon Defeat! Next Pokemon!');
      addScore(10);
      normalPokemon = false;
    }
    if (bossPokemon === true) {
      console.log('Boss Defeated! Next Pokemon!');
      addScore(110);
      bossPokemon = false;
      actionMadeToPokemon();
    } else {
      currentHP = newHP;
      nextPokemon();
    }
  }
  displayHP.textContent = 'Health: ' + currentHP;
}

function nextPokemon() {
  increasePoke += 1;
  console.log('New Pokemon = ' + increasePoke);
  randomPoke = Math.floor(Math.random() * pokemonArray.length);
  //newHP += 1; // Uncomment this once the code is working as intended !!!
  //currentHP = newHP; // Uncomment this as well to update the newHP value !!! (May or may be broken again)
  if (totalPoke == increasePoke - 1) {
    var randomBoss = Math.floor(Math.random() * bossArray.length);
    image.setAttribute('src', bossArray[randomBoss].path);
    pokeName.textContent = bossArray[randomBoss].name;
    console.log('Boss Appears');
    totalPoke = increasePoke;
    increasePoke = 0;
    currentHP = (10 + newHP);
    displayHP.textContent = 'Health: ' + currentHP;
    bossPokemon = true;
    return;
  } else {
    //var randomPoke = Math.floor(Math.random() * pokemonArray.length);
    image.setAttribute('src', pokemonArray[randomPoke].path);
    pokeName.textContent = pokemonArray[randomPoke].name;
    normalPokemon = true;
  }
}

function addScore(score2) {
  score += score2;
  displayScore.textContent = 'Score: ' + score;
}

function setUpgrade() {
  if (score >= 50 && upgrade === false) {
    score -= 50;
    upgrade = true;
    displayScore.textContent = 'Score: ' + score;
  }
}
