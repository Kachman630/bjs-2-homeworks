class AlarmClock {
  constructor() {
    this.alarmCollection = []; // Коллекция звонков
    this.intervalId = null; // ID интервала для будильника
  }

  // Метод addClock: добавляет новый звонок в коллекцию
  addClock(time, callback) {
    // Проверка на наличие обязательных аргументов
    if (!time || !callback) {
      throw new Error('Отсутствуют обязательные аргументы');
    }

    // Проверка на наличие звонка с таким же временем
    if (this.alarmCollection.some(alarm => alarm.time === time)) {
      console.warn('Уже присутствует звонок на это же время');
    }

    // Добавление нового звонка
    this.alarmCollection.push({
      time,
      callback,
      canCall: true, // Изначально звонок может быть вызван
    });
  }

  // Метод removeClock: удаляет звонок по времени
  removeClock(time) {
    this.alarmCollection = this.alarmCollection.filter(alarm => alarm.time !== time);
  }

  // Метод getCurrentFormattedTime: возвращает текущее время в формате HH:MM
  getCurrentFormattedTime() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0'); // Добавляем ведущий ноль
    const minutes = String(now.getMinutes()).padStart(2, '0'); // Добавляем ведущий ноль
    return `${hours}:${minutes}`;
  }

  // Метод start: запускает будильник
  start() {
    // Если интервал уже запущен, завершаем выполнение метода
    if (this.intervalId) {
      return;
    }

    // Создание нового интервала
    this.intervalId = setInterval(() => {
      const currentTime = this.getCurrentFormattedTime();

      // Перебираем все звонки
      this.alarmCollection.forEach(alarm => {
        if (alarm.time === currentTime && alarm.canCall) {
          alarm.canCall = false; // Отключаем возможность повторного вызова
          alarm.callback(); // Вызываем коллбек
        }
      });
    }, 1000); // Интервал проверки каждую секунду
  }

  // Метод stop: останавливает будильник
  stop() {
    if (this.intervalId) {
      clearInterval(this.intervalId); // Очищаем интервал
      this.intervalId = null; // Сбрасываем ID интервала
    }
  }

  // Метод resetAllCalls: сбрасывает возможность запуска всех звонков
  resetAllCalls() {
    this.alarmCollection.forEach(alarm => {
      alarm.canCall = true; // Разрешаем вызов для всех звонков
    });
  }

  // Метод clearAlarms: удаляет все звонки
  clearAlarms() {
    this.stop(); // Останавливаем интервал
    this.alarmCollection = []; // Очищаем коллекцию звонков
  }
}

// Примеры использования
const alarmClock = new AlarmClock();

// Добавляем звонки
alarmClock.addClock("09:00", () => console.log("Пора вставать!"));
alarmClock.addClock("09:01", () => console.log("Еще одна минута прошла!"));

// Запускаем будильник
alarmClock.start();

// Удаляем звонок
setTimeout(() => {
  alarmClock.removeClock("09:01");
  console.log("Звонок на 09:01 удален.");
}, 5000);

// Сбрасываем возможность запуска всех звонков
setTimeout(() => {
  alarmClock.resetAllCalls();
  console.log("Все звонки сброшены.");
}, 10000);

// Останавливаем будильник
setTimeout(() => {
  alarmClock.stop();
  console.log("Будильник остановлен.");
}, 15000);

// Очищаем все звонки
setTimeout(() => {
  alarmClock.clearAlarms();
  console.log("Все звонки удалены.");
}, 20000);
