/*

  Задание 1.

  Написать функцию которая будет задавать СЛУЧАЙНЫЙ цвет для фона.
  Каждая перезагрузка страницы будет с новым цветом.
  Для написания используйте функцию на получение случайного целого числа,
  между минимальным и максимальным значением (Приложена снизу задания)

  + Бонус, повесить обработчик на кнопку через метод onClick
  + Бонус, использовать 16-ричную систему исчесления и цвет HEX -> #FFCC00
  + Бонус выводить полученый цвет по центру страницы.
  
  Необходимо создать блок через createElement задать ему стили через element.style
  и вывести через appendChild или insertBefore

  Необходимые материалы:
    Math.Random (Доки): https://developer.mozilla.org/uk/docs/Web/JavaScript/Reference/Global_Objects/Math/random
    function getRandomIntInclusive(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    __
    Работа с цветом:
    Вариант 1.
      Исользовать element.style.background = 'rgb(r,g,b)';
      где r,g,b случайное число от 0 до 255;

    Вариант 2.
      Исользовать element.style.background = '#RRGGBB';
      где, RR, GG, BB, значние цвета в 16-ричной системе исчесления
      Формирование цвета в вебе: https://ru.wikipedia.org/wiki/%D0%A6%D0%B2%D0%B5%D1%82%D0%B0_HTML
      Перевод в 16-ричную систему исчесления делается при помощи
      метода Number.toString( 16 ) https://www.w3schools.com/jsref/jsref_tostring_number.asp,

      var myNumber = '251'
      myNumber.toString(16) // fb

*/
// Функция рандом. чисел
function getRandomIntInclusive(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1)) + min;
}
 // Достаем ширину и высоту окна
var windWidth = document.documentElement.clientWidth;
var windHeight = document.documentElement.clientHeight;

//  Генерируем случайний цвет (1 вариант)
var r = getRandomIntInclusive(0, 255);
var g = getRandomIntInclusive(0, 255);
var b = getRandomIntInclusive(0, 255);
// console.log('rgb(' + r, g, b + ')');
var color = `rgb(${r},${g},${b})`;
// console.log(color);

// Получаем доступ к елементу с id = app
var app = document.querySelector('#app');
console.log(app);

// Стилизация арр елемента
// app.style.backgroundColor = 'rgb(' + r +','+ g +',' + b + ')';
app.style.backgroundColor = color;
app.style.width = `${windWidth}px`;
app.style.height = `${windHeight}px`;
app.style.padding = "1px";


// Создаем елемент для генерации цвета по клику 
var colorBox = document.createElement('div');

// Стилизация colorBox елемента
colorBox.style.width = '100px';
colorBox.style.height = '100px';
var margin = `${windHeight / 2 - 50}px ${windWidth / 2 - 50}px`;
colorBox.style.margin = margin;

if (color === 'rgb(255,0,0') {
  colorBox.style.backgroundColor = '#2b00ff';
}
colorBox.style.backgroundColor = '#ff0000';

// Создаем функцию генерации цвета по клику на елемент (2 вариант )
var RR;
var BB;
var GG;
colorBox.addEventListener('click', function(){
  RR = getRandomIntInclusive(0, 255);
  BB = getRandomIntInclusive(0, 255);
  GG = getRandomIntInclusive(0, 255);
  RR = RR.toString(16);
  BB = BB.toString(16);
  GG = GG.toString(16);
  // console.log(typeof RR);

  function checkNumber(e) {
    if (e.length === 1) return e = "0" + e;
  else return e;
  }
  RR = checkNumber(RR);
  BB = checkNumber(BB);
  GG = checkNumber(GG);

  console.log(RR, GG, BB);
  colorBox.style.backgroundColor = `#${RR}${GG}${BB}`;
   });

// Добавляем colorBox в HNML
app.appendChild(colorBox);