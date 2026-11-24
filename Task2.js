const prompt = require("prompt-sync")();

let sum = 0;
let count = 0;

while (true) {

    let number = Number(prompt("Enter a number (-1 to stop): "));

    if (number === -1) {
        break;
    }

    sum = sum + number;
    count = count + 1;

    let average = sum / count;

    console.log("Running average:", average);
}
