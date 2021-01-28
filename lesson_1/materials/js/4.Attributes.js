
  /*
    ATTR
    element.hasAttribute(name) – проверяет наличие атрибута
    element.getAttribute(name) – получает значение атрибута
    element.setAttribute(name, value) – устанавливает атрибут
    element.removeAttribute(name) – удаляет атрибут
    element.attributes - получить все атрибуты
    element.dataset - > получить data-attr
  */

    var MyNode = document.getElementById('TestAttribute');

    console.log( MyNode.hasAttribute('value') );
    console.log( MyNode.getAttribute('name') );
    MyNode.setAttribute('disabled', true);
    // MyNode.removeAttribute('disabled');
    // MyNode.dataset.padding = 300;
    // console.log( MyNode.dataset );
    // console.log( MyNode.attributes );
    // console.log( MyNode.__proto__ );
    // console.log( MyNode );

    console.log( Number(MyNode.dataset.array) + 10 );

    /*
      Стандартные аттрибуты элементов.
      В HTML много элементов, которые имеют уникальные атрибуты.
      Большинству из них эти аттрибуты можно указать напрямую
      Например:
        img = src & alt
        a = href
    */

    var a = document.createElement('a');
        a.href = '123';
    console.log('link with arrs:', a);

    var img = document.createElement('img');
        img.src = 'images/itea_logo.png'
        img.alt = 'some alt'

        img.href = 'test';
        img.value = "Wow! I'm a value of image";

        console.log('img with arrs:', img);
        console.log('img.value:', img.value);

    var input = document.createElement('input');
        input.value = 'some more test text';
        input.placeholder = "test placeholder..."
    console.log('input with arrs:', input);

    document.body.appendChild(input)
