function nameValidation(name) {
    return (
        typeof name === "string" && name.length >= 2
    );

}

function xpValidation(xp) {
    return (
        Number.isInteger(+xp) && xp >= 0 //note: + convert string to a number
    );

}

function eloRating(xp) {
    if (xp <= 1000) return "Iron";
    if (xp <= 2000) return "Bronze";
    if (xp <= 5000) return "Silver";
    if (xp <= 7000) return "Gold";
    if (xp <= 8000) return "Platinum";
    if (xp <= 9000) return "Ascending";
    if (xp <= 1000) return "Imortal";
    return "Radiant";
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

let heroXP;
do {
    heroXP = prompt("What is the hero's total XP? (positive integer only!) ");
    heroXP = parseInt(heroXP, 10);

    if (!xpValidation(heroXP)) {
        console.log("Invalid number, please try again!");
    }
} while (!xpValidation(heroXP));
let elo = eloRating(heroXP);


console.log("\n------------------------------------------\n");
console.log("            G A M E   R E V I E W");
console.log("\n------------------------------------------\n");
console.log(`Hero - ${heroName}`);
console.log(`Elo rank - ${elo}`);