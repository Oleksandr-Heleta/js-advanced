

    /*

        Документация:
        
        https://developer.mozilla.org/ru/docs/HTML/HT   ML5/Constraint_validation
        
        form.checkValidity() > Проверка всех полей формы на валидость
        form.reportValidity() > Проверяет все поля на валидность и выводит сообщение с ошибкой

        formElement.validity > Объект с параметрами валидности поля 
        formElement.setCustomValidity(message) > Метод который задаст validity.valid = false, и при попытке отправки
            сообщения выведет message в браузерный попал

        Классы для стилизации состояния элемента
        input:valid{}
        input:invalid{}

        
        Задание:
        
        Используя браузерное API для валидации форм реализовать валидацию следующей формы:
        

        - Имя пользователя: type:text -> validation: required; minlength = 2;  
            Если пустое выввести сообщение: "Как тебя зовут дружище?!"
        - Email: type: email -> validation: required; minlength = 3; validEmail;
            Если эмейл не валидный вывести сообщение "Ну и зря, не получишь бандероль с яблоками!"
        - Пароль: type: password -> validation: required; minlength = 8; maxlength=16;
            Если пустой вывести сообщение: "Я никому не скажу наш секрет";
        - Количество сьеденых яблок: type: number -> validation: required; minlength = 1; validNumber;
            Если количество 0 вывести эррор с сообщением "Ну хоть покушай немного... Яблочки вкусные"
        - Напиши спасибо за яблоки: type: text -> validation: required; 
            Если текст !== "спасибо" вывести эррор с сообщением "Фу, неблагодарный(-ая)!" используя setCustomValidity();

        - Согласен на обучение: type: checkbox -> validation: required;
            Если не выбран вывести эррор с сообщение: "Необразованные живут дольше! Хорошо подумай!"

        Внизу две кнопки:

        1) Обычный submit который отправит форму, если она валидна.
        2) Кнопка Validate(Проверить) которая запускает методы:
            - yourForm.checkValidity: и выводит на страницу сообщение с результатом проверки
            - yourForm.reportValidity: вызывает проверку всех правил и вывод сообщения с ошибкой, если такая есть

    */
    const myForm = document.getElementById('mainForm');   
    const submitBtn = document.getElementById('submitBtn');
    const validateBtn = document.getElementById('validateBtn');

        const cleanValidationMessage = function() {
            let arrOfInputs = Array.from(myForm.elements);
            arrOfInputs.forEach( item => {
                item.setCustomValidity('');
            })
        }

        
        const checkForm = function(e) {
            cleanValidationMessage();

            if (myForm.userName.value.length === 0){
                myForm.userName.setCustomValidity("Как тебя зовут дружище?!");
            } 

            if (!myForm.userEmail.validity.valid) {
                myForm.userEmail.setCustomValidity('Ну и зря, не получишь бандероль с яблоками!');
            }

            if (!myForm.userPassword.validity.valid) {
                myForm.userPassword.setCustomValidity('Я никому не скажу наш секрет');
            }

            if (!myForm.appleCount.validity.valid) {
                myForm.appleCount.setCustomValidity('Ну хоть покушай немного... Яблочки вкусные');
            }   

            if (myForm.blockThanks.value !== 'спасибо'){
                myForm.blockThanks.setCustomValidity("Фу, неблагодарный(-ая)!");
            }

            if (!myForm.agreeToStudy.validity.valid) {
                myForm.agreeToStudy.setCustomValidity('Необразованные живут дольше! Хорошо подумай!');
            }
        }

        submitBtn.addEventListener('click', checkForm);

        myForm.validateBtn.addEventListener('click', function(){
            if(!myForm.checkValidity()){
                alert('please provide correct info');
            } else {
                alert('Good job, the form is good to be submitted');
            } 
            checkForm();
            myForm.reportValidity() ;  
        });