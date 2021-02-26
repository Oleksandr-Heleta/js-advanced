/*

    Задание 2:
    Написать форму логина (логин пароль), которая после отправки данных записывает их в localStorage.
    Если в localStorage есть записть - На страниче вывести "Привет {username}", если нет - вывести окно
    логина.

    + бонус, сделать кнопку "выйти" которая удаляет запись из localStorage и снова показывает форму логина
    + бонус сделать проверку логина и пароля на конкретную запись. Т.е. залогинит пользователя если
    он введет только admin@example.com и пароль 12345678

*/

window.addEventListener('load', checkLogin);
const body = document.querySelector('body');

function checkLogin() {
  let loginObj = JSON.parse(localStorage.getItem('user'));
  if( loginObj !== null){
     return hiFunction(loginObj);
   };
  getLogin();
};

function hiFunction(obj) {
    const div = document.createElement('div');
    const span = document.createElement('span');
    span.innerText = `Привет ${obj.userName}`;
    const exitBtn = document.createElement('button');
    exitBtn.innerText = `Выйти`;
    exitBtn.addEventListener('click', exitFunc);
    div.append(span, exitBtn);
    body.appendChild(div);
};

function exitFunc(e) {
    e.target.parentNode.querySelector('div');
    localStorage.removeItem("user");
    getLogin();
}

function getLogin() {
    if (body.querySelector('div')) {
        body.querySelector('div').remove();
    }
    const form = document.createElement('form');
    form.innerHTML = `
        <label for="userName">Имя пользователя:</label>
        <input type="text"  id="userName"  name="userName">
        <br>
        <label for="userPassword">Пароль</label>
        <input type="password"  id="userPassword"  name="userPassword">
        <br>
        <input type="submit" name="submitBtn">
    `;
    form.addEventListener('submit', createLogin);
    body.appendChild(form);
};

function createLogin(e) {
    e.preventDefault();
    const form = e.target.parentNode.querySelector('form');
    let loginObj = {};
    loginObj.userName = form.userName.value;
    loginObj.userPassword = form.userPassword.value;
    localStorage.setItem('user', JSON.stringify(loginObj) );
    form.remove();
    hiFunction(loginObj);
}