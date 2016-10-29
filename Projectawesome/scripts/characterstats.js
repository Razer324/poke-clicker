var chara = {
    health: 10,
    attack: 10,
    defense: undefined,
    magic: null,
}

function myFunction() {
    var body = document.getElementsByTagName('body')[0];
    body.innerHTML = chara.health;
}