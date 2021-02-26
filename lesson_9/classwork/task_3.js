/*

    Задание 3:


    Написать класс Posts в котором есть данные:

    _id
    isActive,
    title,
    about,
    likes,
    created_at

    У класса должен быть метод addLike и render.

    Нужно сделать так чтобы:
    - После добавления поста, данные о нем записываются в localStorage.
    - После перезагрузки страницы, данные должны сохраниться.
    - Можно было предзагрузить данные в класс из апи: http://www.json-generator.com/api/json/get/cgCRXqNTtu?indent=2

*/

class Posts  {
    constructor(id, isActive, title, about, likes, created_at){
      
      this._id = id;
      this.isActive = isActive; 
      this.title = title;   
      this.about = about; 
      this.likes = likes;   
      this.created_at = created_at; 
     
      this.addLike = this.addLike.bind(this);
    //   this.render();
      localStorage.setItem(this._id, JSON.stringify(this) );
    }

    addLike(e) {
        localStorage.removeItem(this._id);
        this.likes ++;
        const span = e.target.parentNode.querySelector('span');
        span.innerText = `${this.likes}`;
        localStorage.setItem(this._id, JSON.stringify(this) );
    };
    render() {
        const postList = document.getElementById('post_list');
        let postListItem = document.createElement('li');
        postListItem.innerHTML = `
            <div class="title">
                <h3>${this.title}</h3>
            </div>
            <div class="created_at">
              ${this.created_at}
            </div>
            <div class="about">
              ${this.about}
            </div>
            <div class="likes">
            <button id="addLike">Like:</button><span >  ${this.likes}  </span>
            </div>
            `;
        postListItem.dataset._id = this._id;
        

        postList.appendChild(postListItem);
        const likeBtn = postListItem.querySelector('#addLike');
        likeBtn.addEventListener('click', this.addLike );
    };
};

const form = document.getElementById('create_list');
const ul = document.getElementById('post_list');

form.send.addEventListener('click', createPost);


function createPost(e) {
    e.preventDefault();
    let title = form.title.value;
    let about = form.about.value;
    let created_at = getDay();
    let likes = 0;
    let isActive = true;
    let id = getRandomIntInclusive(0, 100000000);
    let post = new Posts(id, isActive, title, about, likes, created_at);
    post.render();
}

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getDay()  {
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
    let date = `${year}-${month}-${day}`;
    return date;
  }
