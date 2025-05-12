function compareArrays(arr1, arr2) {
    // Сначала проверяем, что длины массивов совпадают
    if (arr1.length !== arr2.length) {
      return false;
    }
  
    // Используем метод every для сравнения элементов на одинаковых индексах
    return arr1.every((element, index) => element === arr2[index]);
  }
  
  // Примеры использования функции
  console.log(compareArrays([8, 9], [6])); // false, разные значения
  console.log(compareArrays([8, 9, 5, 4], [8, 9, 5, 4, 8, 3, 5])); // false, разные значения
  console.log(compareArrays([9, 2, 4, 8, 2], [9, 2, 4])); // false, разные значения
  console.log(compareArrays([1, 2, 3], [2, 3, 1])); // false, разные индексы
  console.log(compareArrays([8, 1, 2], [8, 1, 2])); // true

  
  function getUsersNamesInAgeRange(users, gender) {
    // Фильтруем пользователей по полу
    const filteredUsers = users.filter(user => user.gender === gender);
  
    // Если отфильтрованных пользователей нет, возвращаем 0
    if (filteredUsers.length === 0) {
      return 0;
    }
  
    // Используем map для получения массива возрастов
    const ages = filteredUsers.map(user => user.age);
  
    // Используем reduce для вычисления суммы возрастов
    const totalAge = ages.reduce((sum, age) => sum + age, 0);
  
    // Вычисляем средний возраст
    return totalAge / ages.length;
  }
  
  // Примеры использования функции
  const people = [
    { firstName: "Александр", secondName: "Карпов", age: 17, gender: "мужской" },
    { firstName: "Егор", secondName: "Морозов", age: 21, gender: "мужской" },
    { firstName: "Мелисса", secondName: "Леонова", age: 40, gender: "женский" },
    { firstName: "Мелания", secondName: "Савельева", age: 37, gender: "женский" },
    { firstName: "Мария", secondName: "Овчинникова", age: 18, gender: "женский" },
    { firstName: "Марьяна", secondName: "Котова", age: 17, gender: "женский" },
    { firstName: "Фёдор", secondName: "Селезнев", age: 50, gender: "мужской" },
    { firstName: "Георгий", secondName: "Петров", age: 35, gender: "мужской" },
    { firstName: "Даниил", secondName: "Андреев", age: 49, gender: "мужской" },
    { firstName: "Дарья", secondName: "Савельева", age: 25, gender: "женский" },
    { firstName: "Михаил", secondName: "Шаров", age: 22, gender: "мужской" },
    { firstName: "Владислав", secondName: "Давыдов", age: 40, gender: "мужской" },
    { firstName: "Илья", secondName: "Казаков", age: 35, gender: "мужской" },
    { firstName: "Евгений", secondName: "Кузьмин", age: 19, gender: "мужской" },
  ];
  
  console.log(getUsersNamesInAgeRange(people, "мужской")); // 32
  console.log(getUsersNamesInAgeRange(people, "женский")); // 27.4
  console.log(getUsersNamesInAgeRange([], "женский")); // 0
  console.log(getUsersNamesInAgeRange(people, "инопланетянин")); // 0