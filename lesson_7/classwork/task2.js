 /*
    Задание на классы.

    1. Создать пустой массив messages, куда будут добавлятся все новосозданные сообщения

    2. Создать класс Message конструктор котрого состоит из следующих полей:
      id, author, text, date, answers

    У этого класса необходимо реализовать следующие методы:
    SkipMessage() -> которое должно найти сообщение и удалить его из массива messages.
    AnswerMessage()-> должно отрыть поле ввода, в который вы сможете ввести ответ
    SendAnswer() -> метод который «отравляет» ответ, при этом обновляя поле ответа(answers) в вашем объекте с сообщением.

   3. Создать класс  Answer который наследуется от класса Message, но еще дополнительно будет иметь поле parentId

   var messages = [];

    message = { 
      id: '',
      author: '',
      text: '',
      date: '',
      answers: [
        {
          id: '',
          author: '',
          text: '',
          date: '',
          parentId: '',
          answers: ''
        }
      ]
    }

    Подсказка: 
      в метод SendAnswer нужно передать обьект класса Answer который наследуется от класса Message
      После создания, сообщение добавляется в массив messages со всеми сообщениями.
      Для вывода на екран необходимо написать дополнительный метод  Render()
      Все данные берутся с формы.
      Количество методов может быть больше чем указано в задании, если появится необходимость для выделения логики в отдельные методы, главное реализовать те что есть в задании

    _ _ _

    Задание можно разделить на две части:
      1. Создание самого сообщения:
        id->выдаётся автоматом
        Author-> селект с выбором автора
        Text -> текст сообщения
        date -> автоматически в момент создания      

      2. Ответ на сообщение

  */

const messages = [];



class Message  {
      constructor(id, author, text, date, answers){
        
        this.id = id;
        this.author = author; 
        this.text = text;   
        this.date = date; 
        if(answers) this.answers = answers;

        messages.push(this);
        this.skipMessage = this.skipMessage.bind(this);
        let SendAnswer = this.SendAnswer.bind(this);
      }

      render () {
        const messageList = document.getElementById('message_list');
        let messageListItem = document.createElement('li');
            messageListItem.innerHTML = `
            <div class="message__date">
              ${this.date}
            </div>
            <div class="message__author">
              <b>${this.author}</b>
            </div>
            <div class="message__text">
              ${this.text}
            </div>
            <div class="message__controls">
              <button class="_skipMessage">Skip</button>
              <button class="_answerMessage">Answer</button>
            </div>
            `;
        const skipMessageBtn = messageListItem.querySelector('._skipMessage');
              skipMessageBtn.addEventListener('click', this.skipMessage );
        const answerMessageBtn = messageListItem.querySelector('._answerMessage');
              answerMessageBtn.addEventListener('click', this.answerMessage );
        messageListItem.setAttribute('id', this.id);
             

              console.log(this.id);
              
        messageList.appendChild(messageListItem);
      }  
      
      skipMessage(){
        let delListItem = document.getElementById(this.id);
        // document.removeChild(delListItem);
        delListItem.remove();
        let index = messages.indexOf(this);
        messages.splice(index, 1);
      }
      
      answerMessage(){
        // this.answers = answers; 
        const messageList = document.getElementById('message_list');
        let answerListItem = document.createElement('li');
        answerListItem.innerHTML = `
        <form id="${this.id}">
        <label for="author">
          <span>Author</span>
          <select id="author" name="author">
            <option value="Taras Shevchenko">Taras Shevchenko</option>
            <option value="Ivan Franko">Ivan Franko</option>
            <option value="Vasyl Stys">Vasyl Stys</option>
            <option value="Oles Gonchar">Oles Gonchar</option>
          </select>
        </label>

        <label for="message">
          <span>Answer</span>
          <textarea placeholder="Your Message" id="message"></textarea>
        </label>

        <button id="answerBtn" >Send Answer</button>
      </form> 
        `;
        const answerForm = answerListItem.querySelector('form');
        
        
        // answerForm.answerBtn.addEventListener('click', this.SendAnswer);
        answerForm.answerBtn.addEventListener('click', (e) => {
          e.preventDefault();
          console.log(this);
          SendAnswer();
        });
      messageList.appendChild(answerListItem);
      }
  
      SendAnswer() {
       
        let id = idCount;
        idCount++;
        let author = answerForm.author.value;
        let text = answerForm.message.value;
        answerForm.message.value = "";
        let date = getDay()
        let parentId = this.id;

        let answers = new Answers(id, author, text, date, parentId);
        this.answers = answers;
        console.log(answers);
        answerListItem.remove();
        answers.render();
      }
  
    }

const form = document.querySelector('form');
let idCount = 0;

const getDay = () => {
  let dateObj = new Date();
  let day = dateObj.getDate();
  let month = dateObj.getMonth();
  month++; 
  let year = dateObj.getFullYear();
  day.toString();
  month.toString();
  if (day < 10) {day = `0${day}` };
  if (month < 10) {month = `0${month}` };
  // console.log(typeof (month));
  let date = `${day}/${month}/${year}`;
  return date;
}

const createMessage = function (e) {
  e.preventDefault();
  let id = idCount;
  idCount++;
  let author = form.author.value;
  let text = form.message.value;
  form.message.value = "";
  let date = getDay()
  

  let message = new Message(id, author, text, date);
  message.render();
}

form.btn.addEventListener('click', createMessage)


class Answers extends Message {
  constructor(id, author, text, date, parentId) {
    super(id, author, text, date);
    
    this.parentId = parentId;
  }
}