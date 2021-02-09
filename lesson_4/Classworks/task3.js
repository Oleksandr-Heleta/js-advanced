
const writeInput = document.getElementById('newToDo');
const addLi = document.getElementById('AddToDo');
const toDoList = document.getElementById('toDoList');

addLi.addEventListener('click', liCreate)

function liCreate () {
    if (writeInput.value !== ""){
        // console.log('click');
        const li = document.createElement('li')
        li.innerHTML = `<input type="checkbox" class="DoneCheckbox" /><span class="TodoText">${writeInput.value}</span> <button>Remove</button>`;
        li.classList.add('listItem');
        const checkBox = li.querySelector('.DoneCheckbox');
        const btn = li.querySelector('button');
        checkBox.addEventListener('click', done);
        btn.addEventListener('click', removeLi);
        toDoList.appendChild(li);
        writeInput.value = ""
    } else { 
        alert("Please, write text, which you want to add")
    }
};

function done(e){
    const doneClik = e.target;
    const liText = doneClik.closest('li').querySelector('.TodoText');
    // console.log(liText);
    liText.classList.add('done')

};

function removeLi(e){
    const li = e.target.closest("li");
    // console.log(li);
    toDoList.removeChild(li);
}