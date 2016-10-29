var pokemonArray = ["images/aerodactyl.png","images/alakazam.png",
                    "images/gyarados.png","images/kabutops.png","images/kangaskhan.png",
                    "images/machamp.png","images/onix.png","images/rhydon.png","images/tauros.png","images/lugia.png"];
var arrayItr = 0;
var newHP = 3;
var currentHP = newHP;

document.getElementById("currentHP").textContent = currentHP;

document.getElementById("image").addEventListener("click", function(){
    console.log(currentHP);
    if (currentHP == 1) {
        var isBoss = nextPokemon();
        if (isBoss == "notBoss") {
            console.log("Normal Pokemon");
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
            console.log("Boss Pokemon");
            document.getElementById("image").setAttribute("src", pokemonArray[arrayItr]);
            currentHP = (10 + newHP);
            document.getElementById("currentHP").textContent = currentHP;
            return "boss";
        }
    }
    document.getElementById("image").setAttribute("src", pokemonArray[arrayItr]);
    return "notBoss";
}