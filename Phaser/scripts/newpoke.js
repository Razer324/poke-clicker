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


window.onload = function() {
    game = new Phaser.Game(800, 600, Phaser.WEBGL, '', { preload: preload, create: create });
    function preload () {
        game.load.image('logo', pokemonArray[3].path);
    }
    function create () {
        var logo = game.add.sprite(game.world.centerX, game.world.centerY, 'logo');
        logo.anchor.setTo(0.5, 0.5);
    }
}
