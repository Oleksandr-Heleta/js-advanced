    /*
    CREATE ELEMENT
    document.createElement(tag) – создает элемент
    document.createTextNode(value) – создает текстовый узел
  */

    // var textElem = document.createTextNode('Тут был я');
    // console.log('myTextNode:', textElem);
    
    // var div = document.createElement('div');
    //     div.className = "message";
    //     div.innerText = "status";
    //     div.style.backgroundColor = 'red';
    
    
    // console.log('MyDivElement:', div);

  /*
    PASTE ELEMENT
    parent.appendChild(element)
    parent.insertBefore(element, nextSibling)
  */
  // var createArea = document.getElementById('createArea');
  
  // createArea.appendChild(div);
  // createArea.insertBefore( textElem, createArea.children[2] );

/*
  REMOVE ELEMENT

  parentElement.removeChild(element);
  element.remove();
*/

  // var deletedElement = document.getElementById('JackLi');
  //     deletedElement.remove();
  // console.log( deletedElement );

  //  var list = document.getElementById('list');
      // list.removeChild(deletedElement);

/*
  При создании элементов, не добавляйте их сразу в DOM.
  Это ресурсоемкий процесс, который потребляет ресурсы. Собирайте ваши элементы
  в памяти браузера и только когда он будет готов - вставляйте в DOM дерево.

*/
  //
  // var div = document.createElement('div');
  // var header = document.createElement('header');
  // var link = document.createElement('a');
  //     link.href = "http://google.com.ua";
  //     link.innerText = 'link to google';

  //     div.appendChild(header);
  //     header.appendChild(link);


  //     console.log(div);

    //document.body.appendChild(div);
