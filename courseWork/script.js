const postForm = document.getElementById('create_post');
const ulPosts = document.getElementById('post_lists');
const loadImgBtn = document.getElementById('loadImg')

let posts = [];
let id = 0;
console.log(postForm.send);
postForm.send.addEventListener('click', createPost);
loadImgBtn.addEventListener('click', e =>{
    e.preventDefault();
    loadImg();
});

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
      this.render();
    }

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

    showForm(e) {
        e.preventDefault();
        const showForm =  document.getElementById(`create_comment_for${this.id}`);
        // console.log(showForm);
        showForm.style.display = "block";
    }
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
                    <img src="${this.imgUrl}" alt="it's happend">
                    <div class="post_text">${this.text}</div>
                    <div class="likes_comments">
                        <button class="likes" id="addLike">Likes: ${this.likes}</button>
                        <div>
                            <span>Comments(${this.countComments})</span>
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
        const likeBtn = postListItem.querySelector('#addLike');
        const comentFormBtn = postListItem.querySelector('#openForm');
        const commentCreateBtn = postListItem.querySelector('.btn_send');
        likeBtn.addEventListener('click', this.addLike );
        comentFormBtn.addEventListener('click', this.showForm);
        commentCreateBtn.addEventListener('click', this.sendAnswer);
    };

    sendAnswer(e) {
        e.preventDefault();
        const postListItem = document.getElementById(this.id);
        const commentForm = postListItem.querySelector('.comment_form');
         id++
         this.countComments++;
        let author = commentForm.author.value;
        let text = commentForm.about.value;
        
        let date = getDay()
        let parentId = this.id;

        let comment = new Comment(id, author, text, date, parentId);
        this.comments.push(comment);
        
        comment.render();
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
      }
};

function createPost(e) {
    e.preventDefault();
    let author = postForm.author.value;
    let text = postForm.text.value;
    let date = getDay();
    let imgUrl = loadImg();
    id++;
    let post = new Posts(id, author, date, text, imgUrl);
    
    posts.push(post);

    localStorage.setItem('posts', JSON.stringify(posts));
    postForm.author.value = "";
    postForm.text.value = "";
    postForm.imageURl.value ="";
}

function getDay()  {
    let dateObj = new Date();
    let day = dateObj.getDate();
    let month = dateObj.getMonth();
    month++; 
    let year = dateObj.getFullYear();
    let hour = dateObj.getHours();
    let minutes = dateObj.getMinutes()
    day.toString();
    month.toString();
    if (day < 10) {day = `0${day}` };
    if (month < 10) {month = `0${month}` };
    let date = `${day}/${month}/${year}   ${hour}:${minutes}`;
    return date;
}
  
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
}

class Comment {
    constructor(id, author, text, date, parentId) {
        this.id = id;
        this.author = author; 
        this.text = text;  
        this.date = date; 
        this.parentId = parentId;
    }
  
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
                ${this.text}
            </div>
              `;
            commentListItem.setAttribute('id', this.id);

          commentList.prepend(commentListItem);
        }  
  }