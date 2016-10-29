var pokemonArray = ["images/aerodactyl.png","images/alakazam.png",
                    "images/gyarados.png","images/kabutops.png","images/kangaskhan.png",
                    "images/machamp.png","images/onix.png","images/rhydon.png","images/tauros.png","images/lugia.png"];
var arrayItr = 0;
var newHP = 2;
var currentHP = newHP;

document.getElementById("currentHP").textContent = currentHP;

document.getElementById("image").addEventListener("copy", function(){
    console.log(currentHP);
    if (currentHP == 1) {
        var isBoss = nextPokemon();
        if (isBoss == "notBoss") {
            console.log("I was told this is not a boss...");
            console.log(currentHP);
            currentHP = newHP; // This is where the problem was... <--- I ADDED THIS <3
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
            document.getElementById("image").setAttribute("src", pokemonArray[arrayItr]); // working as intended...next array would be 4 (Kabuto)
            currentHP = (10 + newHP);
            document.getElementById("currentHP").textContent = currentHP;
            return "boss";
        }
    }
    document.getElementById("image").setAttribute("src", pokemonArray[arrayItr]);
    return "notBoss";
}