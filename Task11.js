onst prompt = require("prompt-sync")();

let sentence = prompt("Enter a sentence: ");

let word = "";

for (let counter = 0; counter < sentence.length; counter++) {

    if (sentence[counter] != " ") {
        word = word + sentence[counter];
    } else {
        console.log(word);
        word = "";
    }
}

if (word != "") {
    console.log(word);
}
