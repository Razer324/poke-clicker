var pokemonArray = ["images/aerodactyl.png","images/alakazam.png",
                    "images/gyarados.png","images/kabutops.png","images/kangaskhan.png",
                    "images/machamp.png","images/onix.png","images/rhydon.png","images/tauros.png","images/lugia.png"];
var arrayItr = 0;
var newHP = 5;
var currentHP = newHP;
var score = 0;
var upgraded = false;
var normalPokemon;
var bossPokemon;

document.getElementById('image').setAttribute('src', pokemonArray[0]);
document.getElementById("currentHP").textContent = currentHP;

document.getElementById("image").addEventListener("click", function(){
    attackPokemon();
});

document.getElementById("upgrade").addEventListener("click", function(){
    upgraded = true;
});

function attackPokemon() {
    if (upgraded) {
        currentHP -= 2;
        actionMadeToPokemon();
    }
    else {
        currentHP -= 1;
        actionMadeToPokemon();
    }
}

function actionMadeToPokemon() {
    if (currentHP <= 0) {
        currentHP = newHP;
        nextPokemon();
        //var isBoss = nextPokemon(); // I seriously don't understand this bullshit or why it even exist...It does not work.
        if (normalPokemon === true) {
            console.log("Next Pokemon.");
            addScore(10);
            normalPokemon = false;
        }
        if (bossPokemon === true) {
            console.log("Boss defeated! Next Pokemon.");
            addScore(110);
            bossPokemon = false;
        }
    }
    document.getElementById("currentHP").textContent = currentHP;
}

function nextPokemon() {
    arrayItr += 1;
    //newHP += 1; // Uncomment this once the code is working as intended
    if (arrayItr == 10) {
        console.log("Defeated Boss!");
        currentHP = newHP;
        arrayItr = 0;
        document.getElementById("image").setAttribute("src", pokemonArray[arrayItr]);
        bossPokemon = true;
        return;
    }
    if (arrayItr == 9) {
        console.log("Boss Appears");
        document.getElementById("image").setAttribute("src", pokemonArray[arrayItr]); // This is working as intended
        currentHP = (10 + newHP);
        document.getElementById("currentHP").textContent = currentHP;
    }
    if (currentHP <= 0) {
        actionMadeToPokemon();
    }
    else {
        document.getElementById("image").setAttribute("src", pokemonArray[arrayItr]);
        normalPokemon = true;
    }
}

function addScore(score2) {
    score += score2;
    document.getElementById('score').textContent = score;
}