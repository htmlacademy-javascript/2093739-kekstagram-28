// Проверка длины строки
const stringLength = (string, number) => string.length <= number;

// Проверка, является ли строка палиндромом
const isPalindrome = (string) => {
  string = string.toLowerCase().replaceAll(' ', ''); // Преобразует регистр и удаляет пробелы
  return string === string.split('').reverse().join('');
};

// Извлечение цифр из строки
const extractDigits = (string) => parseInt(String(string).replace(/[^0-9]/g, ''), 10);

// Заполнение строки
const fillString = (string, minLength, filler) => {
  while (string.length < minLength) {
    string = filler.slice(0, minLength - string.length) + string;
  }
  return string;
};
