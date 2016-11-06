var game = new Phaser.Game(800, 600, Phaser.AUTO, '', { preload: preload, create: create });

var pokeArray = [
  {name: 'Aerodactyl', path: 'assets/aerodactyl.png'},
  {name: 'Alakazam', path: 'assets/alakazam.png'},
  {name: 'Gyarados', path: 'assets/gyarados.png'},
  {name: 'Kabutops', path: 'assets/kabutops.png'},
  {name: 'Kangaskhan', path: 'assets/kangaskhan.png'},
  {name: 'Machamp', path: 'assets/machamp.png'},
  {name: 'Onix', path: 'assets/onix.png'},
  {name: 'Rhydon', path: 'assets/rhydon.png'},
  {name: 'Tauros', path: 'assets/tauros.png'}
]

var bossArray = [
  {name: 'Lugia', path: 'assets/lugia.png'}
];

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
var i = 0;
var imgPoke = pokeArray[randomPoke].name;

function preload() {
  for (var i = 0; i < pokeArray.length; i++) {
    console.log("Preload cache for image: " + pokeArray[i].name);
    game.load.image(pokeArray[i].name, pokeArray[i].path);
  }
  // game.load.image('Aerodactyl','assets/aerodactyl.png');
  // game.load.image('Alakazam','assets/alakazam.png');
  // game.load.image('Gyarados','assets/gyarados.png');
  // game.load.image('Kabutops','assets/kabutops.png');
  // game.load.image('Kangaskhan','assets/kangaskhan.png');
  // game.load.image('Machamp','assets/machamp.png');
  // game.load.image('Onix','assets/onix.png');
  // game.load.image('Rhydon','assets/rhydon.png');
  // game.load.image('Tauros','assets/tauros.png');
  game.load.image('Lugia','assets/lugia.png'); // Boss
}

function create() {
  startScript();
}

function startScript() {
  var image = game.add.sprite(game.world.centerX, game.world.centerY, imgPoke);
  image.anchor.setTo(0.5);
  image.scale.set(0.5);
  image.inputEnabled = true;
  text = game.add.text(250,16, '', { fill: '#ffffff'});
  image.events.onInputDown.add(attackPoke, this);
  text.text = 'Health: ' + currentHP;
}

function attackPoke() {
  if (upgrade) {
    currentHP -= 2;
    actionPoke();
  }
  else {
    currentHP -= 1;
    actionPoke();
  }
}

function actionPoke() {
  if (currentHP <= 0) {
    if (normalPoke) {
      console.log('Pokemon Defeat! Next Pokemon!');
      addScore(10);
      normalPoke = false;
    }
    if (bossPoke) {
      console.log('Boss Defeated! Next Pokemon!');
      addScore(110);
      bossPoke = false;
      actionPoke();
    }
    else {
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
    changePoke();
    console.log('Boss Appears');
    totalPoke = increasePoke;
    increasePoke = 0;
    currentHP = (10 + newHP);
    text.text = 'Health: ' + currentHP;
    bossPokemon = true;
    return;
  }
  else {
    //imgPoke.sprite.destroy(); // This is suppose to destroy?
    changePoke();
    normalPoke = true;
  }
}

function changePoke() {
  var randomPoke = Math.floor(Math.random() * pokeArray.length);
  var imgPoke = pokeArray[randomPoke].name;
  var image = game.add.sprite(game.world.centerX, game.world.centerY, imgPoke);
  image.anchor.setTo(0.5);
  image.scale.set(0.5);
}

function addScore(score2) {
  score += score2;
}
