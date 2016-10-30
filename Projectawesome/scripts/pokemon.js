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
var image = document.getElementById('image'); // I
var displayHP = document.getElementById('currentHP'); // Cleaned up
var displayScore = document.getElementById('score'); // The Code

image.setAttribute('src', pokemonArray[0]);
displayHP.textContent = currentHP;

image.addEventListener('click', attackPokemon);

document.getElementById("upgrade").addEventListener("click", setUpgrade);

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
    displayHP.textContent = currentHP;
}

function nextPokemon() {
    //newHP += 1; // Uncomment this once the code is working as intended !!!
    //currentHP = newHP; // Uncomment this as well to update the newHP value !!! (May or may be broken again)
    image.setAttribute("src", pokemonArray[arrayItr]);
    if (arrayItr == 10) {
        console.log("Boss Defeated! Next Pokemon!");
        arrayItr = 0;
        image.setAttribute("src", pokemonArray[arrayItr]);
    }
    if (arrayItr == 9) {
        console.log("Boss Appears");
        currentHP = (10 + newHP);
        displayHP.textContent = currentHP;
        bossPokemon = true;
        return;
    }
    else {
        console.log(arrayItr);
        normalPokemon = true;
    }
}

function addScore(score2) {
    score += score2;
    displayScore.textContent = score;
}

function setUpgrade() {
        if (score >= 50 && upgradeLock === false) {
        score -= 50;
        upgrade = true;
        upgradeLock = true;
        displayScore.textContent = score;
    }
    else {
        upgrade = false;
    }
}