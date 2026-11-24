const prompt = require("prompt-sync")();

let word = prompt("Enter a word: ");

let vowels = 0;
let consonants = 0;

for (let counter = 0; counter < word.length; counter++) {
    let letter = word[counter].toLowerCase();

    if (letter == "a" || letter == "e" || letter == "i" || letter == "o" || letter == "u") {
        vowels++;
    } else if (letter >= "a" && letter <= "z") {
        consonants++;
    }
}

console.log("Vowels:", vowels);
console.log("Consonants:", consonants);
