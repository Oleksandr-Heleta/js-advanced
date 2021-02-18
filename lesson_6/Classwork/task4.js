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
   const assigned = document.querySelectorAll('.assigned');
   const ObjForm = document.querySelectorAll('.ObjForm');
   const createdObj = document.querySelectorAll('.createdObj');
   const result = document.getElementById('result');
   const combineObj = document.getElementById('combineObj');

   ObjForm.forEach( e => {
       e.key.addEventListener('change', function keyFunction() {
            let key = e.key.value;
            
       })
   })
