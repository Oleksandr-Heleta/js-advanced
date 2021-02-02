
  /*

    Задание 1.

    Написать скрипт который будет будет переключать вкладки по нажатию
    на кнопки в хедере.

    Главное условие - изменять файл HTML нельзя.

    Алгоритм:
      1. Выбрать каждую кнопку в шапке
         + бонус выбрать одним селектором

      2. Повесить кнопку онклик
          button1.onclick = function(event) {

          }
          + бонус: один обработчик на все три кнопки

      3. Написать функцию которая выбирает соответствующую вкладку
         и добавляет к ней класс active

      4. Написать функцию hideAllTabs которая прячет все вкладки.
         Удаляя класс active со всех вкладок

    Методы для работы:

      getElementById
      querySelector
      classList
      classList.add
      forEach
      onclick

      element.onclick = function(event) {
        // do stuff ...
      }

  */

//  Получаем доступ к елементам HTML
const btn = document.querySelector('#buttonContainer');
// console.log(btn);
const container = document.querySelector('#tabContainer');
const popup = document.querySelectorAll('.tab');
// console.log(popup);
const popupArr = Array.from(popup);

// Создаем функцию для открытия попапа нажатием на кнопку
function onclick (e) {
  let target = e.target;
  let dataBtn = target.getAttribute('data-tab');
  // console.log(dataBtn);

  popupArr.forEach( (element) => {
      let dataPopup = element.getAttribute('data-tab');
      if (dataPopup === dataBtn) {
        element.classList.add('active')
      } else {element.classList.remove('active')}
  })
}

btn.addEventListener('click', onclick);

// Создаем функцию для скрытия попапов нажатием на тело попапа
function hideAllTabs () { 
  popupArr.forEach( (element) =>  {element.classList.remove('active')})
}

container.addEventListener('click', hideAllTabs);
