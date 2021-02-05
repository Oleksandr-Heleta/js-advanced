var containers = document.querySelectorAll('.roadMap__container');

// Функция на buttons:
const upBall = function(e) {
    const btn = e.target;

    // Достаем данные с кнопки и родитильского контейнера
    let direction = btn.getAttribute("data-direction");
    // console.log( direction );
    const ball = btn.closest('.roadMap__container').querySelector('.ball');
    let ballPosition = +ball.dataset.id;
    const points = btn.closest('.roadMap__container').querySelectorAll('.roadMapPoint');
    // console.log( points );
    // console.log( typeof ballPosition );
    
    
    if (direction === '<') {
        ballPosition--;
    } else {
        ballPosition++;
    }

    // Проверка на достижение края roadMap__container (движения ball по кругу)
    if (ballPosition > points.length ) ballPosition = 1;
    if (ballPosition < 1) ballPosition = points.length;
    
    // Навешивание класа ball на roadMapPoint 
    points.forEach( function (elm) {
        elm.classList.remove('ball');
        if (elm.dataset.id == ballPosition){
            elm.classList.add('ball');
        }
    })
}
 //  В каждом roadMap__container достаем buttons и вешаем на них обработчик
containers.forEach( function( container ){
            // console.log( container );         
            const buttons = container.querySelectorAll('button');

            buttons.forEach( function(b) {
               b.addEventListener('click', upBall);
          })
})

