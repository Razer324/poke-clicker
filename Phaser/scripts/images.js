var game = new Phaser.Game(800, 600, Phaser.AUTO, '', { preload: preload, create: create });

var pokeArray = [
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
var image2;

var bossArray = [
  {name: 'Lugia', path: 'images/lugia.png'}
]

var increasePoke = 0;
var totalPoke = 4;
var newHP = 5;
var currentHP = newHP;
var score = 0;
var upgrade = false;
var normalPoke = true;
var bossPoke = false;
var randomPoke = Math.floor(Math.random() * pokeArray.length);
var text;

function preload() {
  image2 = game.load.image('lugia', pokeArray[randomPoke].path);
}
function create() {
  var image = game.add.sprite(game.world.centerX, game.world.centerY, 'lugia');
  image.anchor.setTo(0.5);

  image.inputEnabled = true;

  text = game.add.text(250,16, '', { fill: '#ffffff'});

  image.events.onInputDown.add(listener, this);

  text.text = 'Health: ' + currentHP;

}

function listener() {
  if (upgrade) {
    currentHP -= 2;
    actionPoke();
  } else {
    currentHP -= 1;
    actionPoke();
  }
}

function actionPoke() {
  if (currentHP <= 0) {
    if (normalPoke === true) {
      console.log('Pokemon Defeat! Next Pokemon!');
      addScore(10);
      normalPoke = false;
    }
    if (bossPoke === true) {
      console.log('Boss Defeated! Next Pokemon!');
      addScore(110);
      bossPoke = false;
      actionPoke();
    } else {
      currentHP = newHP;
      nextPoke();
    }
  }
  text.text = 'Health: ' + currentHP;
}

function nextPoke() {
  increasePoke += 1;
  console.log('New Pokemon = ' + increasePoke);
  randomPoke = Math.floor(Math.random() * pokeArray.length);
  if (totalPoke == increasePoke - 1) {
    image2 = game.load.image('lugia', pokeArray[randomPoke].path);
    var image = game.add.sprite(game.world.centerX, game.world.centerY, 'lugia');
    console.log('Boss Appears');
    totalPoke = increasePoke;
    increasePoke = 0;
    currentHP = (10 + newHP);
    text.text = 'Health: ' + curerentHP;
    bossPokemon = true;
    return;
  } else {
    image2 = game.load.image('lugia', pokeArray[randomPoke].path);
    var image = game.add.sprite(game.world.centerX, game.world.centerY, 'lugia');
    normalPoke = true;
  }
}

function addScore(score2) {
  score += score2;
  //displayScore.textContent = 'Score: ' + score;
}
