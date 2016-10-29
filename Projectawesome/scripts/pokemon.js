var pokemonArray = ["images/aerodactyl.png","images/alakazam.png",
                    "images/gyarados.png","images/kabutops.png","images/kangaskhan.png",
                    "images/machamp.png","images/onix.png","images/rhydon.png","images/tauros.png","images/lugia.png"];
var arrayItr = 1;
var newHP = 10;
var currentHP = newHP;
var bossHP = (10 + newHP);

document.getElementById("currentHP").textContent = currentHP;
document.getElementById("image").addEventListener("click", function(){
    console.log(currentHP);
    if (currentHP == 1) {
        var isBoss = nextPokemon();
        if (isBoss == "notBoss") {
            console.log("I was told this is not a boss...");
            newHP += 1;
            currentHP = newHP;
            console.log(currentHP);
        } else {
            if (isBoss == "defeatedBoss") {
                console.log("Boss defeated!");
                currentHP = newHP;
            }
        }
    } else {
        currentHP -= 1;
    }
    document.getElementById("currentHP").textContent = currentHP;
});

function nextPokemon() {
    document.getElementById("image").setAttribute("src", pokemonArray[arrayItr]);
    arrayItr += 1;
    if (arrayItr >= 2) {
        console.log("Defeated Boss!");
        arrayItr = 0;
        return "defeatedBoss";
    } else {
        if (arrayItr == 1) {
            console.log("starting boss...");
            currentHP = bossHP;
            console.log(bossHP);
            return "boss";
        }
    }

    return "notBoss";
}