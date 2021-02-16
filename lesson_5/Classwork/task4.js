/*

  Задание "Шифр цезаря":

    https://uk.wikipedia.org/wiki/%D0%A8%D0%B8%D1%84%D1%80_%D0%A6%D0%B5%D0%B7%D0%B0%D1%80%D1%8F

    Написать функцию, которая будет принимать в себя слово и количество
    симовлов на которые нужно сделать сдвиг внутри.

    Написать функцию дешефратор которая вернет слово в изначальный вид.

    Сделать статичные функции используя bind и метод частичного
    вызова функции (каррирования), которая будет создавать и дешефровать
    слова с статично забитым шагом от одного до 5.


    const isMobile = document.innerWidth < 768;

    Например:
      encryptCesar( 3, 'Word');
      encryptCesar1(...)
      ...
      encryptCesar5(...)

      decryptCesar1(3, 'Sdwq');
      decryptCesar1(...)
      ...
      decryptCesar5(...)

      "а".charCodeAt(); // 1072
      String.fromCharCode(189, 43, 190, 61) // ½+¾

*/
// ------- encryptCesar--------
const encryptCesar = (key, string) => {
  let simbolArr = string.split('');
  let uniArr = [];
  let cryptArr = [];
  simbolArr.forEach(element => {
    let simbol = element.charCodeAt();
    if (simbol >= 65 && simbol <= 122) {
      simbol += key;
      if (simbol > 122) {simbol -= 57}
    } else if (simbol >= 1040 && simbol <= 1103) {
      simbol += key;
      if (simbol > 1103) {simbol -= 63}
    }
    uniArr.push(simbol)
  });
  console.log(uniArr);
  uniArr.forEach(element => {
    let letter = String.fromCharCode(element);
    cryptArr.push(letter);
  } )
  let encryptString = cryptArr.join('');
  return encryptString
}

let encryptPhrase = encryptCesar(3, 'it must work');
console.log(encryptPhrase)

let encryptCesar1 = encryptCesar.bind(null, 1);
let encryptCesar2 = encryptCesar.bind(null, 2);
let encryptCesar3 = encryptCesar.bind(null, 3);
let encryptCesar4 = encryptCesar.bind(null, 4);
let encryptCesar5 = encryptCesar.bind(null, 5);

let cesarEncrypt = encryptCesar5('Цезарь - Великий император');
console.log(cesarEncrypt);
// -----------decryptCesar-------------
const decryptCesar = (key, string) => {
  let simbolArr = string.split('');
  let uniArr = [];
  let decryptArr = [];
  simbolArr.forEach(element => {
    let simbol = element.charCodeAt();
    if (simbol >= 65 && simbol <= 122) {
      simbol -= key;
      if (simbol < 65) {simbol += 57}
    } else if (simbol >= 1040 && simbol <= 1103) {
      simbol -= key;
      if (simbol < 1040) {simbol += 63}
    }
    uniArr.push(simbol)
  });
  console.log(uniArr);
  uniArr.forEach(element => {
    let letter = String.fromCharCode(element);
    decryptArr.push(letter);
  } )
  let decryptString = decryptArr.join('');
  return decryptString
}

let decryptPhrase = decryptCesar(3, encryptPhrase);
console.log(decryptPhrase)

let decryptCesar1 = decryptCesar.bind(null, 1);
let decryptCesar2 = decryptCesar.bind(null, 2);
let decryptCesar3 = decryptCesar.bind(null, 3);
let decryptCesar4 = decryptCesar.bind(null, 4);
let decryptCesar5 = decryptCesar.bind(null, 5);

let cesarDecrypt = decryptCesar5(cesarEncrypt);
console.log(cesarDecrypt);
