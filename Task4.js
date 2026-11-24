const prompt = require("prompt-sync")();

let word = prompt("Enter a word: ");
let reversed = "";

for (let counter = word.length - 1; counter >= 0; counter--) {
    reversed = reversed + word[counter];
}

if (word.toLowerCase() == reversed.toLowerCase()) {
    console.log("It is a palindrome");
} else {
    console.log("It is not a palindrome");
}
