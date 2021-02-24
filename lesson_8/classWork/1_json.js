
/*
  Задание:
  Написать скрипт который:
    1. Собирает данные с формы (3 разных полей), конвертирует их в json и выводит в консоль.
  ->  2. Сделать отдельный инпут который выполняет JSON.parse(); на ту строку что вы туда ввели и выводит результат в консоль.

  Array.from(HTMLNodeColection); -> Arary

  <form>
    <input name="name" />
    <input name="age"/>
    <input name="password"/>
    <button></button>
  </form>

  <form>
    <input />
    <button></button>
  </form>
  -> '{"name" : "23123", "age": 15, "password": "*****" }'

*/
const getJson = document.getElementById('getJson');
const parseJson = document.getElementById('parseJson');

getJson.submit.addEventListener('click', getJsonFunc);
parseJson.submit.addEventListener('click', parseJsonFunc);


function getJsonFunc(e) {
  e.preventDefault();
  let newObj = {};
  let inputs = getJson.querySelectorAll('input');
  inputs.forEach((i) => {
  newObj[i.name] = i.value;
  i.value = "";
  })
  let resultJson = JSON.stringify(newObj);
  return console.log(resultJson);
};

function parseJsonFunc(e) {
  e.preventDefault();
  let inputText = parseJson.text.value;
  // console.log(inputText);
  let objFromJson = JSON.parse(inputText);
  parseJson.text.value = '';
  return console.log(objFromJson);
}