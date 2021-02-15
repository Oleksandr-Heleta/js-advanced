/*

    Задание 1:

    Написать обьект Train у которого будут свойства:
    -имя,
    -скорость езды
    -количество пассажиров
    Методы:
    Ехать -> Поезд {name} везет { количество пассажиров} со скоростью {speed}
    Стоять -> Поезд {name} остановился. Скорость {speed}
    Подобрать пассажиров -> Увеличивает кол-во пассажиров на Х
*/

const Train = {
    name : "02УЖ",
    speed : 120,
    numberOfSeats : 500,
    run : function () {
        console.log(`Поезд ${this.name} везет ${ this.numberOfSeats } пассажиров со скоростью ${this.speed}`)
    },
    stop : function () {
        this.speed = 0;
        console.log(`Поезд ${this.name} остановился. Скорость ${this.speed}`)
    },
    pickUp : function (passengers) {
        this.numberOfSeats += passengers;
        console.log(`Поезд ${this.name} везет ${ this.numberOfSeats } пассажиров.`)
    },
    go : function (speed) {
        this.speed = speed;
        console.log(`Поезд ${this.name} поехал. Скорость ${this.speed}`)

    }
}

Train.run();
Train.stop();
Train.pickUp(20);
Train.go(90);