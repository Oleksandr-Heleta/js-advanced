/*

    Задание 1:
    Написать скрипт, который по клику на кнопку рандомит цвет и записывает его в localStorage
    После перезагрузки страницы, цвет должен сохранится.

*/

const body = document.querySelector('body');
//  Функция рандом. чисел
function getRandomIntInclusive(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1)) + min;
};

function checkNumber(e) {
    if (e.length === 1) return e = "0" + e;
  else return e;
  }

// Создаем функцию генерации цвета 
let RR;
let BB;
let GG;
function colorGenerator() {
    RR = getRandomIntInclusive(0, 255);
    BB = getRandomIntInclusive(0, 255);
    GG = getRandomIntInclusive(0, 255);
    RR = RR.toString(16);
    BB = BB.toString(16);
    GG = GG.toString(16);
  
    
    RR = checkNumber(RR);
    BB = checkNumber(BB);
    GG = checkNumber(GG);
  
    let bgColor = `#${RR}${GG}${BB}`
    console.log(bgColor);
    let count = 1;
    count = +localStorage.getItem("count");
    count++;
    localStorage.setItem(`count`, count);
    localStorage.setItem(`bgColor${count}`, bgColor);
    body.style.backgroundColor = bgColor;

};

colorGenerator();