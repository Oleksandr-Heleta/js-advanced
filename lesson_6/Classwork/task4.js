    /*
      Задание:
        1. Используя интерфейс который есть на страничке, написать визуальный
        конструктор обектов используя значение key-value, которые вводятся в
        соответствующие поля в форме.

        2. Каждый созданый обьект выводить в тег code после добавления каждого
        нового поля. Т.е мы должны визуально видить в каком состоянии наши обьекты
        сейчас

        3. По нажатию кнопки Combine Objects! два обьекта должны обьедениться
        используя метод Object.assing или spread operator и вывестись на стринчку.

        * Изменять HTML можно.

    */
  //  const assigned = document.querySelectorAll('.assigned');
   const ObjForm = document.querySelectorAll('.ObjForm');
   const createdObj = document.querySelectorAll('.createdObj');
   const result = document.getElementById('result');
   const combineObj = document.getElementById('combineObj');

const firstObj = {};
const secondObj = {};
let resultObj = {};


   ObjForm.forEach( e => {
     e.btn.addEventListener('click', function keyFunction(evt) {
      evt.preventDefault();
      let key = e.key.value;
      let value = e.value.value;
      e.key.value = "";
      e.value.value = "";
      //  console.log(e);
      let assigned = e.closest('.assigned');
      //  console.log(assigned);
      let id = assigned.getAttribute('id');
      let ul = assigned.querySelector('ul');
      //  console.log(id);
       ul.innerHTML = "";
       if (id === '1') {
         firstObj[key] = value;
         for (let key in firstObj) {
           let li = document.createElement('li');
           li.innerText = `${key}: ${firstObj[key]},`;
           ul.appendChild(li);
           console.log(li);
         }
       } else { 
         secondObj[key] = value;
         for (let key in secondObj) {
           let li = document.createElement('li');
           li.innerText = `${key}: ${secondObj[key]},`;
           ul.appendChild(li);
           console.log(li);
         }
       }
       
       })
   })

combineObj.addEventListener('click', function combineFunction() {
  resultObj = Object.assign({}, firstObj, secondObj);
  result.innerHTML = "";
  let ul = document.createElement('ul');
  for (let key in resultObj) {
      let li = document.createElement('li');
      li.innerText = `${key}: ${resultObj[key]},`;
      ul.appendChild(li);
      console.log(li);
  }
  result.appendChild(ul);
})
