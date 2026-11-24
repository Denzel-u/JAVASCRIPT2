const prompt = require("prompt-sync")();

let secretNumber = Math.floor(Math.random() * 100) + 1;
let guess = 0;
let attempts = 0;

while (guess != secretNumber) {
    guess = Number(prompt("Guess a number between 1 and 100: "));

    attempts++;

    if (guess < secretNumber) {
        console.log("Too low!");
    } else if (guess > secretNumber) {
        console.log("Too high!");
    } else {
        console.log("Correct!");
    }
}

console.log("Number of attempts:", attempts);
