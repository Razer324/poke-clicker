var pokemonArray = ["images/aerodactyl.png","images/alakazam.png",
                    "images/gyarados.png","images/kabutops.png","images/kangaskhan.png",
                    "images/machamp.png","images/onix.png","images/rhydon.png","images/tauros.png","images/lugia.png"];
var arrayItr = 0;
var newHP = 10;
var currentHP = newHP;
var bossHP = (10 + newHP);

document.getElementById("currentHP").textContent = currentHP;
document.getElementById("image").addEventListener("click", function(){
    console.log(currentHP);
    if (currentHP == 1) {
        console.log("Goes in here");
        var isBoss = nextPokemon();
        if (isBoss == "notBoss") {
            console.log("I was told this is not a boss...");
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
    arrayItr += 1;
    newHP += 1;
    if (arrayItr >= 2) {
        console.log("Defeated Boss!");
        currentHP = newHP;
        arrayItr = 0;
        document.getElementById("image").setAttribute("src", pokemonArray[arrayItr]);
        return "defeatedBoss";
    } else {
        if (arrayItr == 1) {
            console.log("starting boss...");
            currentHP = bossHP;
            console.log(bossHP);
            document.getElementById("image").setAttribute("src", pokemonArray[arrayItr]);
            return "boss";
        }
    }
    document.getElementById("image").setAttribute("src", pokemonArray[arrayItr]);
    return "notBoss";
}