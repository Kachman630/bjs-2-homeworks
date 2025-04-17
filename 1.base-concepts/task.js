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