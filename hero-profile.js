class heroProfile {
    constructor(name, age, classType) {
        this.name = name;
        this.age = age;
        this.classType = classType;
    }

    attack() {
        let attackType = {
            Mage: "Magic (๑'ᵕ'๑)⸝*",
            Monk: "Martial art 𓀤",
            Ninja: "Shuriken 𖣘",
            Warrior: "Sword +=={:::::::::::::::::>"
        };

        console.log(`${this.classType} attack - ${attackType[this.classType]}`)
    }
}


function nameValidation(name) {
    return (
        typeof name === "string" && name.length >= 2
    );

}

function ageValidation(age) {
    return (
        Number.isInteger(+age) && age >= 0
    );

}

function capitalization(name) {
    capitalizatedName = name.trim();
    return capitalizatedName.charAt(0).toUpperCase() + capitalizatedName.slice(1).toLowerCase();
}


let heroName;
do {
    heroName = prompt("What's the hero's name? (minimum of 2 letters): ");
    if (!nameValidation(heroName)) {
        console.log("Invalid name, please try again!");
    }
} while (!nameValidation(heroName));
heroName = capitalization(heroName);

let heroAge;
do {
    heroAge = prompt("What's the hero's age? (positive integer only!) ");
    heroAge = parseInt(heroAge, 10);

    if (!ageValidation(heroAge)) {
        console.log("Invalid number, please try again!");
    }
} while (!ageValidation(heroAge));

let validClasses = ["Mage", "Monk", "Ninja", "Warrior"];
let classType;
do {
    classType = prompt("What's the hero's class? (Mage, Monk, Ninja or Warrior) ");
    classType = capitalization(classType);

    if (!validClasses.includes(classType)) {
        console.log("Invalid class! Choose between: Mage, Monk, Ninja or Warrior.");
    }
} while (!validClasses.includes(classType));

let hero = new heroProfile(heroName, heroAge, classType);

console.log("\n------------------------------------------\n");
console.log("            G A M E   R E V I E W");
console.log("\n------------------------------------------\n");
console.log(`Hero - ${heroName}`);
console.log(`Hero's age - ${heroAge} years`);
hero.attack();
