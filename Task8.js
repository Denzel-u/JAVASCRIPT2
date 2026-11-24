const prompt = require("prompt-sync")();

let isbn = prompt("Enter a 13-digit ISBN: ");

if (isbn.length == 13) {
    let sum = 0;

    for (let counter = 0; counter < 12; counter++) {
        let digit = Number(isbn[counter]);

        if (counter % 2 == 0) {
            sum = sum + digit;
        } else {
            sum = sum + (3 * digit);
        }
    }

    let checkDigit = (10 - (sum % 10)) % 10;

    if (checkDigit == Number(isbn[12])) {
        console.log("Valid ISBN-13");
    } else {
        console.log("Invalid ISBN-13");
    }
} else {
    console.log("ISBN must contain 13 digits");
}
