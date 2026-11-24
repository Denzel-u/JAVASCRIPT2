for (let a = 1; a <= 9; a++) {
    for (let b = 0; b <= 9; b++) {
        for (let c = 0; c <= 9; c++) {

            let number = a * 100 + b * 10 + c;

            let sum = (a * a) + (b * b) + (c * c);

            if (number === sum) {
                console.log(number);
            }
        }
    }
}
