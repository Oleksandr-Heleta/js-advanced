const postForm = document.getElementById('create_post');
const ulPosts = document.getElementById('post_lists');
const loadImgBtn = document.getElementById('loadImg')

let posts = [];
let id = 0;
// Навешиваем обработчики на форму создания постов и загрузки картинки
// console.log(postForm.send);
postForm.send.addEventListener('click', createPost);
loadImgBtn.addEventListener('click', e =>{
    e.preventDefault();
    loadImg();
});

// КЛАС ДЛЯ ПОСТОВ
class Posts  {
    constructor(id, author, date, text, imgUrl, likes, countComments, comments){
      
      this.id = id;
      this.author = author; 
      this.date = date;   
        this.imgUrl = imgUrl; 
        this.text = text;
        this.likes = likes ? likes : 0; 
        this.countComments = countComments ? countComments : 0;  
      this.comments = comments ? comments : []; 
     
      this.addLike = this.addLike.bind(this);
      this.showForm = this.showForm.bind(this);
      this.sendAnswer = this.sendAnswer.bind(this);
      this.seeMoreFunc = this.seeMoreFunc.bind(this);
      this.textCut = this.textCut.bind(this);
      this.render();
    }

    // Функция для подсчета ЛАЙКОВ
    addLike(e) {
        
        this.likes ++;
        const btn = e.target.parentNode.querySelector('#addLike');
        btn.innerText = `Likes: ${this.likes}`;
        posts.forEach( post => {
            if (post.id === this.id) {
                post.likes = this.likes;
            }
        });

        localStorage.setItem('posts', JSON.stringify(posts));
    };

    // Функция для появления формы коментария
    showForm(e) {
        e.preventDefault();
        const showForm =  document.getElementById(`create_comment_for${this.id}`);
        // console.log(showForm);
        showForm.style.display = "block";
    };

    // Функция отображения ПОСТОВ
    render() {
        
        let postListItem = document.createElement('li');
        postListItem.innerHTML = `
                    <div class="author_date">
                        <div class="author">
                            ${this.author}
                        </div>
                        <div class="date">
                            ${this.date}
                        </div>
                    </div>
                    <img class="post_img" src="${this.imgUrl}" alt="it's happend">
                    <div class="post_text">
                        <span class="text">${this.text}</span>
                        <button id="seeMore">See more</button>
                    </div>
                    <div class="likes_comments">
                        <button class="likes" id="addLike">Likes: ${this.likes}</button>
                        <div>
                            <span class="comments_count">Comments( ${this.countComments} )</span>
                            <button id="openForm">Write comment</button>
                        </div>
                    </div>
                    <ul class="comments">
                        
                     </ul>
                    <form class="comment_form" id="create_comment_for${this.id}">
                        <input type="text" placeholder="Author"  id="author_inp" name="author">
                        <br>
                        <textarea placeholder="Comment" id="about_inp" name="about"></textarea>
                        <br>
                        <button class="btn_send" name="send">Send Comment</button>
                    
                    </form>
            `;
       
        // postListItem.dataset.id = this.id;
        postListItem.setAttribute('id', this.id)
        postListItem.classList.add("post_item");

        ulPosts.prepend(postListItem);
        // Навешивание обработчиков на кнопки под постом
        const likeBtn = postListItem.querySelector('#addLike');
        const comentFormBtn = postListItem.querySelector('#openForm');
        const seeMoreBtn = postListItem.querySelector('#seeMore');
        const commentCreateBtn = postListItem.querySelector('.btn_send');
        likeBtn.addEventListener('click', this.addLike );
        comentFormBtn.addEventListener('click', this.showForm);
        commentCreateBtn.addEventListener('click', this.sendAnswer);
        seeMoreBtn.addEventListener('click', this.seeMoreFunc);
        // Рубаем длинный текст
        this.textCut();
    };

    // Функция создания КОММЕНТАРИЯ
    sendAnswer(e) {
        e.preventDefault();
        const postListItem = document.getElementById(this.id);
        const commentForm = postListItem.querySelector('.comment_form');
        const commentsCount = postListItem.querySelector('.comments_count');
         id++;
         localStorage.setItem('idCount', JSON.stringify(id));

         this.countComments++;
        let author = commentForm.author.value;
        let text = commentForm.about.value;
        if(author === "" || text === "") {
            alert("Please, Write in all inputs!")
            return;
        };
        let date = getDay()
        let parentId = this.id;

        let comment = new Comment(id, author, text, date, parentId);
        this.comments.push(comment);
        
        // comment.render();
        commentsCount.innerText = `Comments( ${this.countComments} )`
        commentForm.style.display = "none";
        commentForm.about.value = "";
        commentForm.author.value = "";

        posts.forEach( post => {
            if (post.id === this.id) {
                post.comments = this.comments;
                post.countComments = this.countComments;
            }
        });

        localStorage.setItem('posts', JSON.stringify(posts));
      };

    //Функция отображения полного текста ПОСТА после обрезки
    seeMoreFunc(e) {
        e.preventDefault();
        const postListItem = document.getElementById(this.id);
        const text = postListItem.querySelector('.text');
        const seeMoreBtn = postListItem.querySelector('#seeMore');
        
        // console.log(seeMoreBtn);
        // console.log(seeMoreBtn.dataset.check);
        if(seeMoreBtn.dataset.check === 'true') {
            text.innerText = this.text;
            seeMoreBtn.innerText = 'See less';
            seeMoreBtn.dataset.check = false;
        } else {
            this.textCut();
            seeMoreBtn.innerText = 'See more';
            
        }
       
    };
    
    // Функция обрезки текста ПОСТА
    textCut() {
        let text = this.text.trim();
        const postListItem = document.getElementById(this.id);
        const seeMoreBtn = postListItem.querySelector('#seeMore');
        const textSpan = postListItem.querySelector('.text');


        if( text.length <= 500) {
            textSpan.innerText = this.text;
        } else {
            text = text.slice(0, 500);
            seeMoreBtn.style.display = "block";
            seeMoreBtn.dataset.check = true;
            // console.log(seeMoreBtn);
            // console.log(seeMoreBtn.dataset.check);
            textSpan.innerText = text.trim() + "...";
        }
  
        
    }
};

// Функция СОЗДАНИЯ ПОСТА
function createPost(e) {
    e.preventDefault();
    let author = postForm.author.value;
    let text = postForm.text.value;
    if(author === "" || text === "") {
        alert("Please, Write in all inputs!")
        return;
    }
    let date = getDay();
    let imgUrl = loadImg();
    id++;
    localStorage.setItem('idCount', JSON.stringify(id));

    let post = new Posts(id, author, date, text, imgUrl);
    
    posts.push(post);

    localStorage.setItem('posts', JSON.stringify(posts));
    postForm.author.value = "";
    postForm.text.value = "";
    postForm.imageURl.value ="";
    let preview = document.querySelector('.preview_img');
    preview.src = "";

};

// Функция формирования времени создания поста/комента
function getDay()  {
    let dateObj = new Date();
    let day = dateObj.getDate();
    let month = dateObj.getMonth();
    month++; 
    let year = dateObj.getFullYear();
    let hour = dateObj.getHours();
    let minutes = dateObj.getMinutes()
    day = checkDate(day);
    month = checkDate(month);
    hour = checkDate(hour);
    minutes = checkDate(minutes);
    
    let date = `${day}/${month}/${year}   ${hour}:${minutes}`;
    return date;
};

function checkDate(par) {
    // console.log(typeof(par));
    if (par < 10) {
        par.toString();
        return `0${par}`; 
    };
    return par;
};
 
// Функция загрузки картинки 
function loadImg() {
    let urlInput = document.getElementById('img_inp');
    let preview = document.querySelector('.preview_img');
    if (urlInput.value !== "") {  
        // console.log(preview);
        preview.src = urlInput.value;
    } else {
        preview.src = 'img/default-image.jpg';
    }
    return preview.src
};


// КЛАСС для КОММЕНТАРИЕВ
class Comment {
    constructor(id, author, text, date, parentId) {
        this.id = id;
        this.author = author; 
        this.text = text;  
        this.date = date; 
        this.parentId = parentId;

        this.seeMoreFunc = this.seeMoreFunc.bind(this);
        this.textCut = this.textCut.bind(this);
        this.render();
    }
  
    // Функция отображения коментария под постом
     render () {
          const postListItem = document.getElementById(this.parentId);
          const commentList = postListItem.querySelector('.comments');
          let commentListItem = document.createElement('li');
          commentListItem.innerHTML = `
            <div class="author_date">
                <div class="author">
                 ${this.author}
                </div>
                <div class="date">
                ${this.date}
                </div>
            </div>
     
            <div class="post_text">
                <span class="text">${this.text}</span>
                <button id="seeMore">See more</button>
            </div>
              `;
          commentListItem.setAttribute('id', this.id);
          const seeMoreBtn = commentListItem.querySelector('#seeMore');
          seeMoreBtn.addEventListener('click', this.seeMoreFunc);

          commentList.prepend(commentListItem);
          this.textCut();

        };

    // Функция отображения полного текста Комментария
    seeMoreFunc(e) {
            e.preventDefault();
            const commentListItem = document.getElementById(this.id);
            const text = commentListItem.querySelector('.text');
            const seeMoreBtn = commentListItem.querySelector('#seeMore');
            if(seeMoreBtn.dataset.check === 'true') {
                text.innerText = this.text;
                seeMoreBtn.innerText = 'See less';
                seeMoreBtn.dataset.check = false;
            } else {
                this.textCut();
                seeMoreBtn.innerText = 'See more';   
            }   
        };

    // Функция обрезки текста Комментария
    textCut() {
            let text = this.text.trim();
            const commentListItem = document.getElementById(this.id);
            const seeMoreBtn = commentListItem.querySelector('#seeMore');
            const textSpan = commentListItem.querySelector('.text');
    
    
            if( text.length <= 500) {
                textSpan.innerText = this.text;
            } else {
                text = text.slice(0, 500);
                seeMoreBtn.style.display = "block";
                seeMoreBtn.dataset.check = true;
                textSpan.innerText = text.trim() + "...";
            }
        }
  };
 

//   Функция получения данных  с LocalStorage
  function GetSavedPosts() {
    let data = localStorage.getItem('posts');
    let idLS = localStorage.getItem('idCount');
    if (idLS !== null){
        id = idLS;
    }
    if (data !== null) {
        posts = JSON.parse(data);
        return posts;
    }

    return null;
  }

//   Загрузка и отображение постов, которые были в LocalStorage
  let postsLS = GetSavedPosts();

  if (postsLS !== null) {
      postsLS.forEach(function (post) {
          new Posts(post.id, post.author, post.date, post.text, post.imgUrl, post.likes, post.countComments, post.comments);  
          post.comments.forEach(function (comment) {
                new Comment(comment.id, comment.author, comment.text, comment.date, comment.parentId)
            })        
          })   
   }