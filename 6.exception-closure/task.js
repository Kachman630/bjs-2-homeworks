function parseCount(value) {
  const parsedValue = Number.parseFloat(value); // Преобразуем строку в число

  if (isNaN(parsedValue)) {
    throw new Error("Невалидное значение"); // Выбрасываем ошибку, если результат — NaN
  }

  return parsedValue; 
}

function validateCount(value) {
  try {
    return parseCount(value); // Пытаемся распарсить значение
  } catch (error) {
    return error; // Возвращаем ошибку, если она была выброшена
  }
}

// Примеры использования
try {
  console.log(parseCount("123")); 
  console.log(parseCount("abc")); 
} catch (error) {
  console.error(error.message);
}

console.log(validateCount("456")); 
console.log(validateCount("invalid")); 


// Класс Triangle: представляет треугольник
class Triangle {
  constructor(a, b, c) {
    // Проверка правила существования треугольника
    if (a + b <= c || a + c <= b || b + c <= a) {
      throw new Error("Треугольник с такими сторонами не существует");
    }

    // Сохраняем стороны треугольника
    this.a = a;
    this.b = b;
    this.c = c;
  }

  // Геттер для периметра
  get perimeter() {
    return this.a + this.b + this.c;
  }

  // Геттер для площади (по формуле Герона)
  get area() {
    const p = this.perimeter / 2; // Полупериметр
    const area = Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c)); // Формула Герона
    return parseFloat(area.toFixed(3)); // Округляем до трёх знаков после запятой
  }
}

// Функция getTriangle: создаёт объект треугольника или возвращает заменитель при ошибке
function getTriangle(a, b, c) {
  try {
    // Пытаемся создать объект треугольника
    return new Triangle(a, b, c);
  } catch (error) {
    // Возвращаем объект с геттерами, возвращающими сообщение об ошибке
    return {
      get area() {
        return "Ошибка! Треугольник не существует";
      },
      get perimeter() {
        return "Ошибка! Треугольник не существует";
      }
    };
  }
}

// Примеры использования
const triangle1 = getTriangle(3, 4, 5); 
console.log(triangle1.perimeter); 
console.log(triangle1.area); 

const triangle2 = getTriangle(1, 1, 3); 
console.log(triangle2.perimeter); 
console.log(triangle2.area); 