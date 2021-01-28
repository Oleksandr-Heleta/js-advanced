  /*
  BOM ->
    Объектная модель браузера (Browser Object Model, BOM) – это дополнительные объекты, предоставляемые браузером (окружением), чтобы работать со всем, кроме документа.
  window.
        navigator, https://developer.mozilla.org/ru/docs/Web/API/Navigator
        history, https://developer.mozilla.org/ru/docs/Web/API/History
        screen, https://developer.mozilla.org/ru/docs/Web/API/Screen
        location, https://developer.mozilla.org/ru/docs/Web/API/Location

  window.document -> DOM https://developer.mozilla.org/ru/docs/Web/API/Document
        alert, prompt, console
  */

  /*
    Посмотрим на то, как создание переменной отобрадается в
    глобальном обьекте:
  */

  // var someVariable = "Donkey drink tea";
  // console.log( 'someVariable:', someVariable );
  // // // //
  // function DrinkTea(){
  //   console.log('Drink tea():', 'Donkey already drank his tea');
  // }
  // DrinkTea();
  // console.log('In global Object:\n1.', window.someVariable, '\n2.' , window.DrinkTea );

  /*
    Рассмотрим обьект консоли
  */

// console.log('Hi console:' , {name: '1val1'}, ['1','2']);
// console.table({name: 'value1', name2: 'vasya'});
// console.table(["apples", "oranges", "bananas"]);
// console.error('Some error in obj:', { name: 'Cat'});
// console.warn(' SOME WARNING');

/*
  %c - идентификатор который позволяет использовать css для
  оформления сообщений в консоли.
  Только инлайновые стили!

  syntax: console.log("%cYourStringLog", "css rule as string");
*/

// console.log("%cTest!", "font-size:30px; color: red");

// console.log("%cExample %s", css, 'all code runs happy');

// console.log("This is the outer level");
//   console.group();
//   console.log("Level 2");
//     console.group();
//     console.log("Level 3");
//     console.warn("More of level 3");
//     console.groupEnd();
//   console.log("Back to level 2");
//   console.groupEnd();
// console.log("Back to the outer level");

// console.time('fetch');
//   fetch('http://www.json-generator.com/api/json/get/bQnzYgqhua?indent=2').then(function(response) {
//     return response.json();
//     }).then(data => {
//       console.timeEnd('fetch');
//       console.log('data', data);
//     });

// const userNode = document.getElementById('user');
// console.log( userNode );

// Консольный метод console.dir() отображает интерактивный список свойств указанного объекта JavaScript. 
// Выходные данные представлены в виде иерархического списка с треугольниками раскрытия, которые позволяют видеть содержимое дочерних объектов.
// Другими словами, console.dir () - это способ увидеть все свойства указанного объекта JavaScript в консоли, с помощью которого разработчик может легко получить свойства объекта.
// console.dir( userNode );

/*
  Обьект Location
  Location - обьект который отображает всю информацию о адрессе (URL) текущей странички.
  Модификация обьекта приводит к изменениям в родительском объекте (В данном случае в объекте window)

*/
// console.log( location );
// location.href = "http://google.com.ua";
// console.log( location.hash );

var url = document.createElement('a');
url.href = 'https://developer.mozilla.org/en-US/search?q=URL#search-results-close-container';
// console.log("href:", url.href);      // https://developer.mozilla.org/en-US/search?q=URL#search-results-close-container
// console.log("protocol:", url.protocol);  // https:
// console.log("host:", url.host);      // developer.mozilla.org
// console.log("hostname:", url.hostname);  // developer.mozilla.org
// console.log("pathname:", url.pathname);  // /en-US/search
// console.log("search:", url.search);    // ?q=URL
// console.log("hash:", url.hash);      // #search-results-close-container
// console.log("origin:", url.origin);    // https://developer.mozilla.org

/*
  Обьект Navigator и Screen
  Navigator - показывает состояние агента пользователя и идентифицирует его.
  Screen - показывает параметры экрана на котором отображается текущее окно.
  *Агент пользователя - программа через которую была открыта страница.
*/
//
  // console.log( 'Navigator:', navigator );
  // console.log( 'UserAgent', navigator.userAgent );
  // console.log( 'Platform', navigator.platform );
  // console.log( 'Language', navigator.language );
  // console.log( 'Languages', navigator.languages );
  // console.log( 'Geolocation', navigator.geolocation );
  // //
  // //
  // navigator.geolocation.getCurrentPosition(function(position) {
  //   console.log( 'myPostion:', position );
  // });
// - - - - - - - -

// console.log( 'Screen:', screen );
// console.log( 'Screen width & height',screen.width, screen.height );
/*
  Обратите внимание что обьект screen показывает именно размер экрана,
  а не размер окна! Для того что бы получить размер именно окна с
  контентом есть другие методы.

  document.documentElement.clientWidth - показывает ширину контента исключая
  полосы прокрутки. (Старые браузеры IE6+)
  window.innerWidth (поддержка IE8+) - показывает всю визическую ширину окна в рх
*/
// console.log( 'Window width:', document.documentElement.clientWidth, window.innerWidth );
// console.log( 'Window height:', document.documentElement.clientHeight, window.innerHeight );

/*
  Обьект history - позволяет манипулировать историей браузера в пределах сессии,
  а именно историей о посещенных страницах в пределах вкладки.

  Метод pushState создает запись в истории. Можно использовать как создание записи
  в истории, но без перезагрузки страницы в пределах одного документа
  syntax: window.history.pushState({ state object }, 'Title(Not working now)', url);

  Метод go загружает странцу из истории определяя её по индексу от текущей страницы
  например: 0 - текущая, -1 прошлая и т.д
*/

// console.log( history );
// history.pushState({ message: 'Hello from state!'}, '', '#link_1');
// history.pushState({ userlink: 'link1', message:'Hello'}, '', '#link_2');
// history.pushState({ userlink: 'link3', message:'Bye!'}, '', '#link_3');
// history.go(-1);
// console.log( window.history.length );

// if( history.state !== null ){
//   document.body.innerHTML = window.history.state.message;
// }

/*

  Главная суть этой демки, что бы вы начали понимать, как устреен браузер
  и как привычные и понятные нам действия отображаются в глобальном объекте.
  По сути любоее изменение или событие которое происходит в окне браузера,
  это просто изменение в глобальном объекте или где-то в дом дереве

*/
