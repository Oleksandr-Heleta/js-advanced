/* <!--
Создайте счетчик секунд, который начинает отчет с 1 и заканчивается на 30,
также добавьте кнопки который останавливают отчет, и запускают его заново и добавьте кнопку обнуляющую отчет.
Также попробуйте изменить код так чтобы отчет начиналься с 30 и заканчивалься на 1.

+ бонус: Сделать так что бы на каждый тик (1с/2c) менялся цвет фона. Можно на основе генератора случайного цвета с предудущих уроков.
+ бонус: Сделать визуализацию стрелки которая идет по кругу
    document.getElementById("myDIV").style.transform = "rotate(7deg)";

+ бонус: Сделать кнопки которые выбирают режим в котором идет отсчет - обычный от 0 до 30 или реверсивный от 30 до 0
--> */
const electrClok = document.getElementById('electrClock');
const startTime = document.getElementById('start');
const stopTime = document.getElementById('stop');
const resetTime = document.getElementById('reset');
const revers = document.getElementById('revers');
const mechanClock = document.getElementById('mechanClock');
const arrow = document.getElementById('arrow');

let seconds = 0;
let arrowPosition = -90;
let myTimerObj = null;
let reversDirection;
arrow.style.transform = `rotate(${arrowPosition}deg)`;

// функция обнуления секундомера и опредиления направления
function reversFunction (){
    if (revers.checked){
        seconds = 60;
        electrClok.innerText = seconds;
        reversDirection = function()  {
            seconds--;
            arrowPosition -= 6;
            if (seconds === 0) myStopFunction();  
        }
    } else {
        seconds = 0;
        electrClok.innerText = seconds;
        reversDirection = function()  {
            seconds++;
            arrowPosition += 6;
            if (seconds === 60) myStopFunction();  
        }
    }
    arrowPosition = -90;
    arrow.style.transform = `rotate(${arrowPosition}deg)`;
}
revers.addEventListener('click', reversFunction);

reversFunction();
// функция старта секундомера
function myTimer() {
    reversDirection();
    electrClok.innerText = seconds;
    arrow.style.transform = `rotate(${arrowPosition}deg)`;
    console.log(seconds)
}

function startFunc(){
    myTimerObj = setInterval( myTimer, 1000 );
    startTime.removeEventListener("click", startFunc );
}

startTime.addEventListener('click', startFunc);

// функция остановки секундомера
function myStopFunction() {
    clearInterval( myTimerObj );
    startTime.addEventListener("click", startFunc);
}
stopTime.addEventListener('click', myStopFunction);

// функция обнуления секундомера

resetTime.addEventListener('click', reversFunction);


