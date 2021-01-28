
  /*

    DOM нужен для того, чтобы манипулировать страницей –
    читать информацию из HTML, создавать и изменять элементы.

    Всё, что есть в HTML, находится и в DOM.
  */

  /*
    document.getElementById -> вызывается только в контексте document
    возвращает выбраный элемент по id.
  */

  //var testNode = document.getElementById('test');
  // testNode.style.background = "blue";
  // testNode.innerText = "test";
  //console.log(testNode);

  /*
    ! Когда мы обьявляем id в HTML, в нашем глобальном обьекте window
    создается обьект где хранится ссылка на нашу ноду.
    По этому поиск по ид самый быстрый поиск в дом дереве.
    (Demo в браузере)
  */

    // var testElement = document.getElementById('test')
    // testElement.style.background = "red";
    // testElement.style.color = "blue";

  /*
    Ссылки на постоянные HTML элементы:
  */

  // console.log( document.body );
  // console.log( document.head );
  // document.body.style.background = "red";

  /*
    Следующие селекторы возращают колекцию могут быть вызваны в контексте
    как документа как и любого элемента.

    Колекция это не массив и нативными методами её перебрать нельзя!

    element.getElementsByTagName
    element.getElementsByClassName

  */
    //
    // var app = document.getElementById('app');
    // var showBlocks = app.getElementsByClassName('show');
    // console.log( showBlocks );

  /*
    Array.from( obj ) - преобразовывает массивоподобные обьекты и коллекции в массивы
  */
    // showBlocks = Array.from( showBlocks );
    // console.log(showBlocks);
    // showBlocks.forEach( function(item){ console.log(item);}); //Error!

  /*
    Выбрать элементы по тегу li -> в элементе с id=List
  */
  //
  // var list = document.getElementById('list');
  // var listItems = list.getElementsByTagName('li');
  // // //
  // listItems[0].style.background = "green";
  // console.log('listItems', listItems);

  /*
    Выборка элементов по css селектору.
    element.querySelectorAll(css) -> где css любой css selector, вернет колекцию (Node List)
    element.querySelector(css) -> вернет первое совпадение
  */

  // var getById = document.getElementById('test');
  // var getByCss = document.querySelector('#test');
  // console.log(getById, getByCss)
  // var getByCssAll = document.querySelectorAll('#list li');
  //     console.log( getById, getByCss, getByCssAll);
  
  //     getByCssAll.forEach( function( item ){
  //       console.log( item );
  //     })
  // //
  // var list1 = document.getElementById('list');
  // var res1 = list1.querySelector('#test p .show[data-test="2"]'); // data-test="2"
  // var res2 = list1.querySelectorAll('li');
  // // // // //
  // console.log( res1, res2);
  /*
    Выборка по css селектору
  */
  //
  // var listItems = document.getElementById('list');
  // var queryFirstItem = listItems.querySelector('.test');
  //     console.log( 'querySelector', queryFirstItem );
  // // // //
  // var queryItems = listItems.querySelectorAll('.test');
  //     console.log( 'querySelectorAll', queryItems );

  /*
    Проверка элемента по селектору
    element.matches(css) -> проверка, удовлетворяет ли селектору css, возвращает boolean
   */

  //  var matchNode = document.getElementById('test');
  //  console.log(matchNode);
  // console.log( 'matches', matchNode.matches('.show .test') );

  /*
    Найти ближайшего родителя, метод closest
    element.closest(css) -> находит ближйший элемент вверх по иерархии DOM который удовлетвореят css
  */

  // var ClosestItems = document.getElementById('JackLi');
  // console.log( 'closest', ClosestItems.closest('.container'));

  /*
    Выборка по аттрибуту Name. Возвращает коллекцию (Node List)
    * Это устаревший метод, используйте более новые аналоги.
  */
  // var getByName = document.getElementsByName('block');
  // console.log('getByName', getByName);
  // var nameItem = document.getElementsByName('Dexter');
  // console.log( 'getByName', nameItem );

  /*
    element.children - вернет только дочерние узлы элементы (теги)
    element.childNodes, - вернет все дочерние элементы включая текстовыеНоды
    element.firstChild, - вернет первый дочерний элемент
    element.lastChild - вернет последний дочерний элемент
  */

    // var ChildElement = document.getElementById('list');
    // console.log('children', ChildElement.children );
    // console.log('childNodes', ChildElement.childNodes );
    // console.log('firstChild', ChildElement.firstChild );
    // console.log('lastChild', ChildElement.lastChild );

  var list1 = document.getElementById('list');
  var res1 = list1.querySelectorAll('#test > p'); // data-test="2"

  console.log(res1);
