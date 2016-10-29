var pokemonArray = ["images/aerodactyl.png","images/alakazam.png",
                    "images/gyarados.png","images/kabutops.png","images/kangaskhan.png",
                    "images/machamp.png","images/onix.png","images/rhydon.png","images/tauros.png","images/lugia.png"];
var arrayItr = 0;
var newHP = 2;
var currentHP = newHP;
var score = 0;
var upgraded = false;

document.getElementById("currentHP").textContent = currentHP;

document.getElementById("image").addEventListener("click", function(){
    actionMadeToPokemon();
});

document.getElementById("upgrade").addEventListener("click", function(){
    upgraded = true;
});

function nextPokemon() {
    arrayItr += 1;
    //newHP += 1;
    if (arrayItr == 10) {
        console.log("Defeated Boss!");
        currentHP = newHP;
        arrayItr = 0;
        document.getElementById("image").setAttribute("src", pokemonArray[arrayItr]);
        return "defeatedBoss";
    } else {
        if (arrayItr == 9) {
            console.log("starting boss...");
            addScore(10);
            document.getElementById("image").setAttribute("src", pokemonArray[arrayItr]); // working as intended...next array would be 4 (Kabuto)
            currentHP = (10 + newHP);
            document.getElementById("currentHP").textContent = currentHP;
            return "boss";
        }
    }
    if (currentHP == 0) {
        actionMadeToPokemon();
    } else {
        document.getElementById("image").setAttribute("src", pokemonArray[arrayItr]);
    }
    return "notBoss";
}

function addScore(score2) {
    score += score2;
    document.getElementById('score').textContent = score;
}

function upgrades(argument) {
        
}

function attackPokemon() {
    if (upgraded) {
        currentHP -= 2;
    } else {
        currentHP -= 1;
    }
}

function actionMadeToPokemon() {
        console.log(currentHP);
    if (currentHP <= 1) {
        var isBoss = nextPokemon();
        if (isBoss == "notBoss") {
            console.log("I was told this is not a boss...");
            console.log(currentHP);
            currentHP = newHP;
            addScore(10);
        } else {
            if (isBoss == "defeatedBoss") {
                console.log("Boss defeated!");
                currentHP = newHP;
                addScore(110);
            }
        }
    } else {
        attackPokemon();
        if (currentHP <= 0) {
            console.log(currentHP);
            nextPokemon();
        }
    }
    document.getElementById("currentHP").textContent = currentHP;
}