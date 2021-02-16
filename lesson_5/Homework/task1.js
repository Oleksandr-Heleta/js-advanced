/*

  Задание:

    1. Написать конструктор объекта комментария который принимает 3 аргумента
    ( имя, текст сообщения, ссылка на аватаку);

    {
      name: '',
      text: '',
      avatarUrl: '...jpg'
      likes: 0
    }
      + Создать прототип, в котором будет содержаться ссылка на картинку по умлочанию
      + В прототипе должен быть метод который увеличивает счетик лайков

    var myComment1 = new Comment(...);

    2. Создать массив из 4х комментариев.
    var CommentsArray = [myComment1, myComment2...]

    3. Созадть функцию конструктор, которая принимает массив коментариев.
      И выводит каждый из них на страничку.

    <div id="CommentsFeed"></div>


*/

function Comment (name, text, avatarUrl ) {
  this.name = name,
  this.text = text,
  this.avatarUrl = avatarUrl,
  this.like = 0
}

const zeroComment = {
  avatarUrl : "https://i.pinimg.com/originals/5a/f1/dd/5af1ddcde07255e8a999abcc061dd201.png" ,
  addLike : function (like) {
    this.like =+ like;
  }
}

Comment.prototype = zeroComment;
// Object.setPrototypeOf( Comment, zeroComment );

const myComment1 = new Comment('user1', 'all good', 'https://proslang.ru/wp-content/uploads/2019/03/avatarka_1-300x300.jpg');
console.log(myComment1);
myComment1.addLike(10);
console.log(myComment1.like);
const myComment2 = new Comment('user2', 'all bad', 'https://i.pinimg.com/originals/9c/77/46/9c7746225873e02d83b9315501b8dd2f.jpg');
const myComment3 = new Comment('user3', 'good quality', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_RfqA1o6QkxYWBxk_-TCF28EBlasrxI-wWQ&usqp=CAU');
const myComment4 = new Comment('user4', 'sow sow');

myComment4.addLike(30);
delete myComment4.avatarUrl;
console.log(myComment4);

const CommentsArray = [myComment1, myComment2, myComment3, myComment4];
const wrapper = document.querySelector('.wrapper')

const createComentsList = function (arr){
  arr.forEach(element => {
    console.log(element.name)
    const comentBlock = document.createElement('div');
    comentBlock.innerHTML = `
    <div >
       <img class="img" src=${element.avatarUrl} />
    </div>
    <div class="text" >
      <span> ${element.name} : </span><span> ${element.text}  </span><br/><span> Like: ${element.like}  </span>
    </div>`;
    comentBlock.className = 'comentBlock';
    wrapper.appendChild(comentBlock)
  });
}

createComentsList(CommentsArray);
