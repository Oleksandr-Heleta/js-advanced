/*
  Задача:

  1. При помощи fetch получить данные:
     http://www.json-generator.com/api/json/get/cgwbLkTxnS?indent=2

  2. Полученый ответ преобразовать в json вызвав метод .json с объекта ответа
  3. Выбрать случайного человека и передать в следующий чейн промиса
  4. Сделать дополнительный запрос на получение списка друзей человека
     http://www.json-generator.com/api/json/get/bTBBXQabKG?indent=2
     И дальше передать обьект:
      {
        name: userName,
        ...
        friends: friendsData
      }

     Подсказка нужно вызвать дополнительный fecth из текущего чейна.
     Для того что бы передать результат выполнения доп. запроса
     в наш первый промис используйте констуркцию:

      .then(
        response1 => {
          return fetch(...)
            .then(
              response2 => {
                ...
                формируете обьект в котором будут данные человека с
                первого запроса, например его name response1.name
                и друзья которые пришли из доп. запроса
              }
            )
        }
      )

  5. Вывести результат на страничку

  + Бонус. Для конвертации обьекта response в json использовать одну
    функцию.

*/


  // fetch(url)
  //   .then(testFunc)
  //   .then(test2Func)
  //   .then( res => {
  //      return fetch()
  //       .then( friendsResponse)
  //       .then()
  //   })
  //   .then( func)
  const fetchDiv = document.getElementById('fetch');
  const urlMan = 'http://www.json-generator.com/api/json/get/cgwbLkTxnS?indent=2';
  const urlFriend = 'http://www.json-generator.com/api/json/get/bTBBXQabKG?indent=2';

  const ConvertToJSON = ( response ) => response.json();

  const createHtml = (obj) => {
      let h3 = document.createElement('h3');
      h3.innerText = `${obj.name} has friends: `;
      let ul = document.createElement('ul');
      obj.friends.forEach( e => {
        let li = document.createElement('li');
        li.innerText = e.name;
        ul.appendChild(li);
      });
      fetchDiv.appendChild(h3);
      fetchDiv.appendChild(ul);
  }
  

  fetch(urlMan)
    .then(ConvertToJSON)
    .then((res) => {
      console.log('nameArr', res);
      let rundomIndex =  Math.floor(Math.random() * (res.length));
      return res[rundomIndex];
    })
    .then((man) => {
      console.log('nameObj', man);
    
      return fetch(urlFriend)
      .then(ConvertToJSON)
      .then((res) =>{
        console.log('friendObj', res[0].friends);
        const fetchObj = {};
        fetchObj.name = man.name;
        fetchObj.friends = res[0].friends;
        return createHtml(fetchObj);
      });
    });
    
   
