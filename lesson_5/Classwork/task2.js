/*

    Задание 2.

    Напишите фунцию, которая изменяет цвет-фона и цвет текста, присваивая к новым цветам
    значение из this.color, this.background
    А так же добавляет элемент h1 с текстом "I know how binding works in JS"

    1.1 Ф-я принимает один аргумент,
    второй попадает в него через метод .call(obj)

    1.2 Ф-я не принимает никаких аргументов,
    а необходимые настройки полностью передаются через bind

    1.3 Ф-я принимает фразу для заголовка,
    обьект с настройками передаем через .apply();

*/
  let colors = {
    background: 'purple',
    color: 'white'
  }

  function myCall( color ){
    document.body.style.background = this.background;
    document.body.style.color = color;
  }
  // myCall.call( colors, 'red' );

  function myBind (){
    document.body.style.background = this.background;
    document.body.style.color = this.color;
  }

  const funcBind = myBind.bind(colors);
  // funcBind();


  const h = document.getElementById('task2')
  function myApply (text){
    h.innerText = text;
    h.style.background = this.background;
    h.style.color = this.color;
  }

  myApply.apply(colors, ["I know how binding works in JS"]);