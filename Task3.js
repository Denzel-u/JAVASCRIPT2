let sales = 0;
let commission = 0;
let totalSalary = 0;

while (totalSalary < 30000) {

    sales = sales + 1;

    if (sales <= 5000) {
        commission = sales * 0.06;
    }
    else if (sales <= 10000) {
        commission = 300 + (sales - 5000) * 0.08;
    }
    else {
        commission = 700 + (sales - 10000) * 0.10;
    }

    totalSalary = 5000 + commission;
}

console.log("Minimum sales needed: $" + sales);

