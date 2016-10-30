var pokemonArray = ["images/aerodactyl.png","images/alakazam.png",
                    "images/gyarados.png","images/kabutops.png","images/kangaskhan.png",
                    "images/machamp.png","images/onix.png","images/rhydon.png","images/tauros.png","images/lugia.png"];
var arrayItr = 0;
var newHP = 5;
var currentHP = newHP;
var score = 0;
var upgrade = false;
var upgradeLock = false;
var normalPokemon = true;
var bossPokemon = false;

document.getElementById('image').setAttribute('src', pokemonArray[0]);
document.getElementById("currentHP").textContent = currentHP;

document.getElementById("image").addEventListener("click", function(){
    attackPokemon();
});

document.getElementById("upgrade").addEventListener("click", function(){
    if (score >= 50 && upgradeLock === false) {
        score -= 50;
        upgrade = true;
        upgradeLock = true;
        document.getElementById('score').textContent = score;
    }
    else {
        upgrade = false;
    }
});

function attackPokemon() {
    if (upgrade) {
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
        if (normalPokemon === true) {
            console.log("Pokemon Defeat! Next Pokemon!");
            addScore(10);
            normalPokemon = false;
        }
        if (bossPokemon === true) {
            //console.log("Boss Defeated! Next Pokemon!");
            addScore(110);
            bossPokemon = false;
            actionMadeToPokemon();
        }
        else {
            arrayItr += 1;
            currentHP = newHP;
            nextPokemon();
        }
    }
    document.getElementById("currentHP").textContent = currentHP;
}

function nextPokemon() {
    //newHP += 1; // Uncomment this once the code is working as intended
    if (arrayItr == 10) {
        console.log("Boss Defeated! Next Pokemon!");
        currentHP = newHP;
        arrayItr = 0;
        document.getElementById("image").setAttribute("src", pokemonArray[arrayItr]);
    }
    if (arrayItr == 9) {
        console.log("Boss Appears");
        document.getElementById("image").setAttribute("src", pokemonArray[arrayItr]);
        currentHP = (10 + newHP);
        document.getElementById("currentHP").textContent = currentHP;
        bossPokemon = true;
        return;
    }
    else {
        console.log(arrayItr);
        document.getElementById("image").setAttribute("src", pokemonArray[arrayItr]);
        normalPokemon = true;
    }
}

function addScore(score2) {
    score += score2;
    document.getElementById('score').textContent = score;
}