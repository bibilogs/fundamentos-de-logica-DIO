function inputValidation(input) {
    return (
        Number.isInteger(input) && input >= 0
    );

}

function eloRating(elo) {
    if (elo <= 10) return "Iron";
    if (elo <= 20) return "Bronze";
    if (elo <= 50) return "Silver";
    if (elo <= 80) return "Gold";
    if (elo <= 90) return "Diamond";
    if (elo <= 100) return "Legendary";
    return "Imortal";
}


let playerWins;
do {
    playerWins = prompt("How many games did the player win? (positive integer only!) ");
    playerWins = parseInt(playerWins, 10);

    if (!inputValidation(playerWins)) {
        console.log("Invalid number, please try again");
    }
} while (!inputValidation(playerWins));

let playerLosses;
do {
    playerLosses = prompt("How many games did the player lose? (positive integer only!) ");
    playerLosses = parseInt(playerLosses, 10);

    if (!inputValidation(playerLosses)) {
        console.log("Invalid number, please try again!");
    }
} while (!inputValidation(playerLosses));


let points = playerWins - playerLosses;
let percentage = (playerWins / (playerWins + playerLosses)) * 100;
let elo = eloRating(points);


console.log("\n------------------------------------------\n");
console.log("            G A M E   R E V I E W");
console.log("\n------------------------------------------\n");
console.log(`Total points - ${points}`);
console.log(`Winning Percentage - ${percentage}%`);
console.log(`Elo rank - ${elo}`);