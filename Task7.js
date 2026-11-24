const prompt = require("prompt-sync")();

let word = prompt("Enter a word: ");
let reversed = "";

for (let counter = word.length - 1; counter >= 0; counter--) {
    reversed = reversed + word[counter];
}

console.log("Original word:", word);
console.log("Reversed word:", reversed);
