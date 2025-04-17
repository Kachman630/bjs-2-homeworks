"use strict";


function solveEquation(a, b, c) {
    let arr = [];

    let discriminant = b ** 2 - 4 * a * c;

    if (discriminant < 0) {
        return arr;
    } else if (discriminant === 0) {
        let root = -b / (2 * a);
        arr.push(root);
    } else {
        let root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
        let root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
        arr.push(root1, root2);
    }

    return arr;
}

// Примеры использования функции
console.log(solveEquation(1, -3, 2)); // [2, 1] — два корня
console.log(solveEquation(1, 2, 1));  // [-1] — один корень
console.log(solveEquation(1, 0, 1));  // [] — нет корней

"use strict";

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
    
    if (typeof percent !== "number" || typeof contribution !== "number" ||
        typeof amount !== "number" || typeof countMonths !== "number") {
        return "Проверьте вводимые данные. Все значения должны быть числами.";
    }

    let loanBody = amount - contribution;

    if (loanBody <= 0) {
        return 0;
    }

    let monthlyPercent = percent / 100 / 12;

    let monthlyPayment;
    if (monthlyPercent === 0) {
        monthlyPayment = loanBody / countMonths;
    } else {
        monthlyPayment = loanBody * (monthlyPercent + (monthlyPercent / ((Math.pow(1 + monthlyPercent, countMonths)) - 1)));
    }

    let totalAmount = monthlyPayment * countMonths;

    return parseFloat(totalAmount.toFixed(2));
}

// Примеры использования функции
console.log(calculateTotalMortgage(10, 0, 50000, 12)); // 52749.53
console.log(calculateTotalMortgage(10, 1000, 50000, 12)); // 51694.54
console.log(calculateTotalMortgage(10, 0, 20000, 24)); // 22149.56
console.log(calculateTotalMortgage(10, 1000, 20000, 24)); // 21042.09
console.log(calculateTotalMortgage(10, 20000, 20000, 24)); // 0
console.log(calculateTotalMortgage(10, 0, 10000, 36)); // 11616.19
console.log(calculateTotalMortgage(15, 0, 10000, 36)); // 12479.52