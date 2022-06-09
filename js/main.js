/* Функция возвращает случайное целое число из переданного диапазона включительно.

имя_функции(от, до); // Результат: целое число из диапазона "от...до"

- диапазон может быть только положительный, включая ноль
- придумайте, как функция должна вести себя, если значение «до» меньшее или равно значению «от»
- функция не гарантирует верный результат, если в переданном диапазоне нет ни одного подходящего числа */

function getRandomInteger (min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  if(max >= min) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  } else {
      console.log('Ooooops!');
  } //Вообще не знаю, что здесь придумать!
}

getRandomInteger(1, 0);

/* Функцию подсмотрела здесь:
https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random */
