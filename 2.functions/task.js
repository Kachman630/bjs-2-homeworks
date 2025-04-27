"use strict";

function getArrayParams(...arr) {
    // Если массив пустой, возвращаем значения по умолчанию
    if (arr.length === 0) {
        return { min: 0, max: 0, avg: 0 };
    }

    // Инициализируем переменные для min, max и sum
    let min = Infinity;
    let max = -Infinity;
    let sum = 0;

    // Проходим по массиву циклом for
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];

        // Обновляем минимум
        if (element < min) {
            min = element;
        }

        // Обновляем максимум
        if (element > max) {
            max = element;
        }

        // Добавляем элемент к сумме
        sum += element;
    }

    // Вычисляем среднее значение
    let avg = sum / arr.length;

    // Округляем среднее до двух знаков после запятой и преобразуем в число
    avg = parseFloat(avg.toFixed(2));

    // Возвращаем результат в виде объекта
    return { min, max, avg };
}

// Примеры использования функции
console.log(getArrayParams(-99, 99, 10)); // { min: -99, max: 99, avg: 3.33 }
console.log(getArrayParams(1, 2, 3, -100, 10)); // { min: -100, max: 10, avg: -16.80 }
console.log(getArrayParams(5)); // { min: 5, max: 5, avg: 5 }
console.log(getArrayParams()); // { min: 0, max: 0, avg: 0 } (пустой массив)

"use strict";

function summElementsWorker(...arr) {
    // Если массив пустой, возвращаем 0
    if (arr.length === 0) {
        return 0;
    }

    // Суммируем элементы массива с помощью reduce
    return arr.reduce((sum, num) => sum + num, 0);
}

function differenceMaxMinWorker(...arr) {
    // Если массив пустой, возвращаем 0
    if (arr.length === 0) {
        return 0;
    }

    // Находим максимум и минимум с помощью Math.max/Math.min и spread-оператора
    const max = Math.max(...arr);
    const min = Math.min(...arr);

    // Возвращаем разницу
    return max - min;
}

function differenceEvenOddWorker(...arr) {
    // Если массив пустой, возвращаем 0
    if (arr.length === 0) {
        return 0;
    }

    // Инициализируем переменные для суммы чётных и нечётных элементов
    let sumEvenElement = 0;
    let sumOddElement = 0;

    // Проходим по массиву циклом for
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];

        // Проверяем, является ли элемент чётным или нечётным
        if (element % 2 === 0) {
            sumEvenElement += element;
        } else {
            sumOddElement += element;
        }
    }

    // Возвращаем разницу между суммами
    return sumEvenElement - sumOddElement;
}

function averageEvenElementsWorker(...arr) {
    // Если массив пустой, возвращаем 0
    if (arr.length === 0) {
        return 0;
    }

    // Инициализируем переменные для суммы и количества чётных элементов
    let sumEvenElement = 0;
    let countEvenElement = 0;

    // Проходим по массиву циклом for
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];

        // Проверяем, является ли элемент чётным
        if (element % 2 === 0) {
            sumEvenElement += element;
            countEvenElement++;
        }
    }

    // Если нет чётных элементов, возвращаем 0
    if (countEvenElement === 0) {
        return 0;
    }

    // Возвращаем среднее значение
    return sumEvenElement / countEvenElement;
}

// Примеры использования функций
console.log(summElementsWorker()); // 0
console.log(summElementsWorker(10, 10, 11, 20, 10)); // 61

console.log(differenceMaxMinWorker()); // 0
console.log(differenceMaxMinWorker(10, 10, 11, 20, 10)); // 10

console.log(differenceEvenOddWorker(94, 51, 57, 41, 47, 66, 58, 10, 38, 17)); // 53
console.log(differenceEvenOddWorker(15, 97, 85, 64, 67, 10, 69, 40, 15, 35)); // -269

console.log(averageEvenElementsWorker(1, 2, 3, 4, 5, 6, 7, 8, 9)); // 5
console.log(averageEvenElementsWorker(15, 97, 85, 64, 67, 10, 69, 40, 15, 35)); // 38

"use strict";

function makeWork(arrOfArr, func) {
    // Инициализируем переменную для хранения максимального результата
    let maxWorkerResult = -Infinity;

    // Проходим по каждому подмассиву в массиве arrOfArr
    for (let i = 0; i < arrOfArr.length; i++) {
        const currentArr = arrOfArr[i];

        // Применяем функцию-насадку к текущему подмассиву с использованием spread-оператора
        const result = func(...currentArr);

        // Проверяем, является ли текущий результат больше максимального
        if (result > maxWorkerResult) {
            maxWorkerResult = result;
        }
    }

    // Возвращаем максимальный результат
    return maxWorkerResult;
}

// Примеры использования функций
const arr = [
    [10, 10, 11, 20, 10],
    [67, 10, 2, 39, 88],
    [72, 75, 51, 87, 43],
    [30, 41, 55, 96, 62]
];

console.log(makeWork(arr, summElementsWorker)); // максимум из 61, 206, 328, 284 => 328
console.log(makeWork(arr, differenceMaxMinWorker)); // максимум из 10, 86, 44, 66 => 86
console.log(makeWork(arr, differenceEvenOddWorker)); // максимум из 39, -6, -184, 92 => 92
console.log(makeWork(arr, averageEvenElementsWorker)); // максимум из 12.5, 33.333, 72, 62.666 => 72