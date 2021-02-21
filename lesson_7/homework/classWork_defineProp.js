/*
  Задание:

  Написать класс SuperDude который как аргумент принимает два параметра:
    - Имя
    - Массив суперспособностей которые являются обьектом.

    Модель суперспособности:
      {
        // Имя способности
        name:'Invisibility',
        // Сообщение которое будет выведено когда способность была вызвана
        spell: function(){ return `${this.name} hide from you`}
      }

    В конструкторе, нужно:
    - сделать так, что бы имя нельзя было перезаписывать и присвоить ему то
      значение которое мы передали как аргумент.

    - перебрать массив способностей и на каждую из них создать метод для этого
      обьекта, используя поле name как название метода, а spell как то,
      что нужно вернуть в console.log при вызове этого метода.
    - все способности должны быть неизменяемые

    - бонус, создать конструктор суперспособностей -> new Spell( name, spellFunc );
*/

class SuperDude {
  constructor(name, superPowers) {
    this.name = name;
    this.superPowers = superPowers;
       
    Object.defineProperty(
      this,
      'name',
      { value: this.name, });
       
    this.superPowers.forEach((e) => {
      Object.defineProperty(this, e.name, {
        value: () => {
           this.spell = e.spell.bind(this)
          console.log(this.spell())
        }
      })
    });
  }
}

  


  let superPowers = [
    { name:'Invisibility', spell: function(){ return `${this.name} hide from you`} },
    { name:'superSpeed', spell: function(){ return `${this.name} running from you`} },
    { name:'superSight', spell: function(){ return `${this.name} see you`} },
    { name:'superFroze', spell: function(){ return `${this.name} will froze you`} },
    { name:'superSkin',  spell: function(){ return `${this.name} skin is unbreakable`} },
];
  
function Spell(name, spellFunc) {
  this.name = name;
  this.spell = spellFunc;
  superPowers.push(this);
}

let fly = new Spell ('Fly', function(){ return `${this.name} will fly to the sky`})

let Luther = new SuperDude('Luther', superPowers);
  console.log(Luther);
      // Тестирование: Методы должны работать и выводить сообщение.
      Luther.superSight();
      Luther.superSpeed();
      Luther.superFroze();
      Luther.Invisibility();
      Luther.superSkin();
      Luther.Fly();
      
      

