// Базовый класс PrintEditionItem
class PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
      this.name = name;
      this.releaseDate = releaseDate;
      this.pagesCount = pagesCount;
      this.state = 100; // Изначальное состояние
      this.type = null; // Тип пока не определён
    }
  
    // Геттер для свойства state
    get state() {
      return this._state;
    }
  
    // Сеттер для свойства state
    set state(newState) {
      if (newState < 0) {
        this._state = 0;
      } else if (newState > 100) {
        this._state = 100;
      } else {
        this._state = newState;
      }
    }
  
    // Метод fix: улучшает состояние в полтора раза
    fix() {
      this.state *= 1.5;
    }
  }
  
  // Класс Magazine (наследуется от PrintEditionItem)
  class Magazine extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
      super(name, releaseDate, pagesCount);
      this.type = "magazine";
    }
  }
  
  // Класс Book (наследуется от PrintEditionItem)
  class Book extends PrintEditionItem {
    constructor(author, name, releaseDate, pagesCount) {
      super(name, releaseDate, pagesCount);
      this.author = author;
      this.type = "book";
    }
  }
  
  // Класс NovelBook (наследуется от Book)
  class NovelBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
      super(author, name, releaseDate, pagesCount);
      this.type = "novel";
    }
  }
  
  // Класс FantasticBook (наследуется от Book)
  class FantasticBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
      super(author, name, releaseDate, pagesCount);
      this.type = "fantastic";
    }
  }
  
  // Класс DetectiveBook (наследуется от Book)
  class DetectiveBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
      super(author, name, releaseDate, pagesCount);
      this.type = "detective";
    }
  }
  
  // Примеры использования
  const sherlock = new PrintEditionItem(
    "Полное собрание повестей и рассказов о Шерлоке Холмсе в одном томе",
    2019,
    1008
  );
  
  console.log(sherlock.releaseDate); // 2019
  console.log(sherlock.state); // 100
  sherlock.fix();
  console.log(sherlock.state); // 100
  
  const picknick = new FantasticBook(
    "Аркадий и Борис Стругацкие",
    "Пикник на обочине",
    1972,
    168
  );
  
  console.log(picknick.author); // "Аркадий и Борис Стругацкие"
  picknick.state = 10;
  console.log(picknick.state); // 10
  picknick.fix();
  console.log(picknick.state); // 15


  // Класс Library
class Library {
    constructor(name) {
      this.name = name;
      this.books = []; // Хранилище книг
    }
  
    // Метод addBook: добавляет книгу, если её состояние больше 30
    addBook(book) {
      if (book.state > 30) {
        this.books.push(book);
      }
    }
  
    // Метод findBookBy: ищет книгу по ключу и значению
    findBookBy(type, value) {
      return this.books.find(book => book[type] === value) || null;
    }
  
    // Метод giveBookByName: выдаёт книгу по названию
    giveBookByName(bookName) {
      const index = this.books.findIndex(book => book.name === bookName);
      if (index !== -1) {
        return this.books.splice(index, 1)[0];
      }
      return null;
    }
  }
  
  // Примеры использования
  
  // Создание экземпляра библиотеки
  const library = new Library("Библиотека имени Ленина");
  
  // Добавление книг в библиотеку
  library.addBook(
    new DetectiveBook(
      "Артур Конан Дойл",
      "Полное собрание повестей и рассказов о Шерлоке Холмсе в одном томе",
      2019,
      1008
    )
  );
  library.addBook(
    new FantasticBook(
      "Аркадий и Борис Стругацкие",
      "Пикник на обочине",
      1972,
      168
    )
  );
  library.addBook(new NovelBook("Герберт Уэллс", "Машина времени", 1895, 138));
  library.addBook(new Magazine("Мурзилка", 1924, 60));
  
  // Поиск книги
  console.log(library.findBookBy("name", "Властелин колец")); // null
  console.log(library.findBookBy("releaseDate", 1924).name); // "Мурзилка"
  
  // Выдача книги
  console.log("Количество книг до выдачи: " + library.books.length); // 4
  const issuedBook = library.giveBookByName("Машина времени");
  console.log("Количество книг после выдачи: " + library.books.length); // 3
  
  // Повреждение и восстановление книги
  issuedBook.state = 20; // Повреждаем книгу
  console.log(issuedBook.state); // 20
  issuedBook.fix(); // Восстанавливаем книгу
  console.log(issuedBook.state); // 30
  
  // Попытка добавить восстановленную книгу обратно
  if (issuedBook.state > 30) {
    library.addBook(issuedBook);
  } else {
    console.log("Книга не может быть добавлена, так как её состояние <= 30.");
  }


  class Student {
    constructor(name) {
      this.name = name; // Имя студента
      this.marks = {}; // Объект для хранения оценок по предметам
    }
  
    // Метод addMark: добавляет оценку по предмету
    addMark(mark, subject) {
      // Проверка валидности оценки (от 2 до 5)
      if (mark < 2 || mark > 5) {
        return; // Если оценка не валидна, завершаем метод
      }
  
      // Проверка наличия предмета в объекте marks
      if (!this.marks[subject]) {
        this.marks[subject] = []; // Если предмет отсутствует, создаем пустой массив
      }
  
      // Добавляем оценку в массив предмета
      this.marks[subject].push(mark);
    }
  
    // Метод getAverageBySubject: возвращает среднюю оценку по одному предмету
    getAverageBySubject(subject) {
      // Проверка наличия предмета
      if (!this.marks[subject] || this.marks[subject].length === 0) {
        return 0; // Если предмет отсутствует или нет оценок, возвращаем 0
      }
  
      // Вычисляем сумму оценок с помощью reduce
      const sum = this.marks[subject].reduce((acc, mark) => acc + mark, 0);
  
      // Возвращаем среднее значение
      return sum / this.marks[subject].length;
    }
  
    // Метод getAverage: возвращает общую среднюю оценку по всем предметам
    getAverage() {
      const subjects = Object.keys(this.marks); // Получаем список всех предметов
  
      // Если нет ни одного предмета, возвращаем 0
      if (subjects.length === 0) {
        return 0;
      }
  
      // Суммируем средние оценки по всем предметам
      const totalAverage = subjects.reduce((acc, subject) => {
        return acc + this.getAverageBySubject(subject);
      }, 0);
  
      // Возвращаем среднее значение
      return totalAverage / subjects.length;
    }
  }
  
  // Примеры использования
  const student = new Student("Олег Никифоров");
  
  student.addMark(5, "химия");
  student.addMark(5, "химия");
  student.addMark(5, "физика");
  student.addMark(4, "физика");
  student.addMark(6, "физика"); // Оценка не добавится, так как больше 5
  
  console.log(student.getAverageBySubject("физика")); // Средний балл по предмету физика 4.5
  console.log(student.getAverageBySubject("биология")); // Вернёт 0, так как по такому предмету нет оценок
  console.log(student.getAverage()); // Средний балл по всем предметам 4.75