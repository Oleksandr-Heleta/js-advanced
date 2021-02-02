/*

      Задача: Сделать корректно работающее всплывающее окно.
      Условие: Узменять HTML разметку выше - нельзя.
      При нажании на одну из кнопок, должно открытся окно с соответствующим data- аттрибутом.
      При нажатии на кнопку close окно дожно закрываться.

    */
//  Получаем доступ к елементам HTML
const btn = document.querySelector('#target');
// console.log(btn);
const closeBtn = document.querySelector('#popup__close');
const popup = document.querySelector('#popup');
const popupItems = document.querySelectorAll('.popup__item');
console.log(popupItems);
const popupArr = Array.from(popupItems);

// Создаем функцию для открытия попапа нажатием на кнопку
function onclick (e) {
  let target = e.target;
  let dataBtn = target.getAttribute('data-popup');
  // console.log(dataBtn);

  popupArr.forEach( (element) => {
      let dataPopup = element.getAttribute('data-popup');
      if (dataPopup === dataBtn)  element.classList.add('show');
      });
    
  popup.classList.add('show')
}

btn.addEventListener('click', onclick);

// Создаем функцию для скрытия попапов нажатием на кнопку close
function closePopup () { 
  popupArr.forEach( (element) =>  {element.classList.remove('show')});
  popup.classList.remove('show')
}

closeBtn.addEventListener('click', closePopup);