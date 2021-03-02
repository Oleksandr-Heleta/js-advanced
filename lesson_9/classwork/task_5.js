// взять todolist из предыдущих домашек и реализовать сохранение всех записей на "сервер" используя https://www.npmjs.com/package/json-server
// при перезагрузке страницы все сохраненные записи должны подтягиваться и отрисовавыться, при добалении записи она улетает на "серевер" и сохраняется

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


const writeInput = document.getElementById('newToDo');
const addLi = document.getElementById('AddToDo');
const toDoList = document.getElementById('toDoList');
const url = 'http://localhost:3000/posts';

window.addEventListener('load', renderList);
addLi.addEventListener('click', liCreate);

// Создание списка при загрузке
function renderList() {
    fetch(url)
    .then(
      (res) => {
        console.log(res);
        return res.json();
      }
    )
    .then( 
      (res) => {
        res.forEach( item => {
            
            let rendToDo = new ToDo(item.id, item.statusDone, item.text);
            console.log(item);
            rendToDo.render();  
        })
      }
    )
};

// Создание пункта ToDo , обьекта и отправка на сервер
function liCreate() {
    if (writeInput.value !== "") {
        let text = writeInput.value;
        let statusDone = false;
        let id = getRandomIntInclusive(0, 100000000);
        let toDoItem = new ToDo(id, statusDone, text);
        toDoItem.render();  
        toDoItem.fetchObj();
        writeInput.value = ""
    } else {
        alert("Please, write text, which you want to add")
    }
};


// Клас для ToDo пунктов
class ToDo {
    constructor(id, statusDone, text){
      
      this.id = id;
      this.statusDone = statusDone; 
      this.text = text;   
       
     
      this.done = this.done.bind(this);
      this.removeLi = this.removeLi.bind(this);
      this.render = this.render.bind(this);
    }

// Отметка о выполнении
    done(e) {
        const doneClik = e.target;
        const liText = doneClik.closest('li').querySelector('.TodoText');
        // console.log(liText);
        liText.classList.add('done');
        this.statusDone = true;
        fetch(`${url}/${this.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(this)
        });

    }

// Удаление пункта и обьекта с сервера
    removeLi(e) {
        const li = e.target.closest("li");
        // console.log(li);
        toDoList.removeChild(li);
        fetch(`${url}/${this.id}`, {
		method: "DELETE",
		headers: {
				"Content-Type": "application/json"
		    }
	    });
        delete this;
    }

// Визуализация пункта-обьекта в DOM
    render() {
       
            const li = document.createElement('li')
            li.innerHTML = `<input type="checkbox" class="DoneCheckbox" /><span class="TodoText">${this.text}</span> <button>Remove</button>`;
            li.classList.add('listItem');
            li.dataset.id = this.id;
            const checkBox = li.querySelector('.DoneCheckbox');
            const btn = li.querySelector('button');
            if (this.statusDone) {
                const liText = li.querySelector('.TodoText');
                liText.classList.add('done');
            }
            checkBox.addEventListener('click', this.done);
            btn.addEventListener('click', this.removeLi);
            toDoList.appendChild(li);
    }

// Отправка обьекта на сервер
    fetchObj() {
        let jsonData = JSON.stringify(this);

        fetch('http://localhost:3000/posts', {
            method: "POST",
            body: jsonData,
             headers: {
                "Content-Type": "application/json"
             }
        })
        .then(() => {
            alert('data have been saved, please check :)')
        })
    }

};