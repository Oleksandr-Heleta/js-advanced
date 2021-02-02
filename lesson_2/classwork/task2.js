/*

      Поработаем немного с ивентами:
      onmouseenter
      onclick
      oncontextmenu
      onkeydown

      Задание:
      На каждую из конопок назначить действие которое будет выполнять следующее действие:
      1.На ховер(onmouseenter) повесить обработчик который будет при каждом наведении
        на кнопку будет выводить в блок результатом елемент li с текстом "hovered!"
        у которого будет один из следующих класов:
        red blue green orange purple

      2.На кнопку клика(onclick) повесить обработчик который будет удалять классы с
        блока с результатом по очереди в таком порядке:

        six > two > three > four > one > five

        после того как блок окажется пустым, добавить их в порядке возрастания

        one > two > three ... > six

      3. На кнопку клика (Light) повесить обработчик, который будет выводить в 
      блок с результатом (lightResult) поочередно один из цветов светофора:
      Цикл: Off -> Red -> Yellow -> Green -> Off

      4. На кнопку с обработчиком нажатия (onkeydown) повесить обработчик который будет:

        - Выводить в блок с результатом(keyboardResult) число нажатий на любую из клавиш клавиатуры.
        - Давать блоку (keyboardResult) классы, которые соотсветствуют числу кликов:

        Н-р:
        1 -> one
        3 -> three
        5 -> five
        11 -> one one
        115 -> one one five



    */

   function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

   const mouseHover = document.getElementById('mouseHover');
   const mouseClick = document.getElementById('mouseClick');
   const mouseLight = document.getElementById('mouseLight');
   const keyboardButton = document.getElementById('keyboardButton');

   const hoverResult = document.getElementById('hoverResult');
   const clickResult = document.getElementById('hoverResult');

   const hoverArr = ['red', 'blue', 'green', 'orange', 'purple'];
   const onclickFirstArr = ['six', 'two', 'three', 'four', 'one', 'five'];
   const onclickSecondArr = ['one', 'two', 'three', 'four', 'five', 'six'];

//    ---task1---
   mouseHover.onmouseenter = function(){

       const li = document.createElement('li');
       li.innerText = "hovered!";
       li.classList.add(hoverArr[getRandomIntInclusive(0, hoverArr.length - 1)]);
       hoverResult.appendChild(li);
       
    //  console.log('hover');
   }

//    ---task2---   
   var clickIndex = 0;
   var direction = true;

   mouseClick.onclick = function(){


       console.log('click');
   }

//    ---task3---
   mouseLight.onclick = function(e){
       console.log('light');
   }

   var counter = 0;
   keyboardButton.onkeydown = function(){
       console.log('keydown');
   }