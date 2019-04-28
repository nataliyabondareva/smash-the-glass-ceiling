// defines hero object properties
let hero = { 
    name: 'Parisa Tabriz',
    heroic: true,
    inventory: [],
    health: 10,
    weapon: {
        type: 'hard work',
        damage: 2
    }    
};

// defines enemy object properties
let enemy = {
    name: 'Glass Ceiling',
    heroic: false,
    health: 10,
    weapon: {
        type: 'centuries-old systems of oppression',
        damage: 4
    }
};

// dagger object
const dagger = {
    type: 'dagger',
    damage: 2
};

// displays health of hero and enemy, updated upon damaging functions
document.getElementById("hero-scoreboard").innerHTML = `Health: ${hero.health}`;
document.getElementById("enemy-scoreboard").innerHTML = `Health: ${enemy.health}`;


// restores health to 10 on click
function rest (character) {
    if (character.health < 10) {
    character.health = 10;
    return character;
    } else if (character.health = 10) {
        alert("You're all set to smash this!");
        return character;
    }
};

// adds item on click to the end of inventory array
function pickUpItem (character, item) {
    character.inventory.push(item);
    appendDagger();
};

// changes weapon to first inventory item if available
function equipWeapon(character) {
    if (character.inventory.length < 1) {
        alert('Pick up some weapons!');
        return null;
    } else {
        alert('Go whack it!');
        let newWeapon = character.inventory[0];
        delete character.weapon;
        character.weapon = newWeapon;
        }
};

// moves dagger to the hero side
function appendDagger() { 
    var daggerToAdd = document.getElementById("dagger");
    var tobeAppended = document.getElementById("hero-section");
    tobeAppended.appendChild(daggerToAdd);
};

// damages the enemy depending on the weapon
function smash(character, opponent)  {
    if (character.weapon = 'hard work') {
        document.getElementById('whack').play();
        opponent.health -= 2;
        document.getElementById("enemy-scoreboard").innerHTML = `Health: ${enemy.health}`;
    } else if (character.weapon = 'dagger') {
        document.getElementById('whack').play();
        opponent.health -= 2;
        document.getElementById("enemy-scoreboard").innerHTML = `Health: ${enemy.health}`;
    } else {
        alert('you need a weapon!')
    }
};


