const postForm = document.getElementById('create_post');
const ulPosts = document.getElementById('post_lists');
const loadImgBtn = document.getElementById('loadImg')

let posts = [];
let id = 0;
console.log(postForm.send);
postForm.send.addEventListener('click', createPost);
loadImgBtn.addEventListener('click', loadImg);

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
                            <button>Write comment</button>
                        </div>
                    </div>
                    <ul class="comments">
                        
                     </ul>
                    <form class="comment_form" id="create_post">
                        <input type="text" placeholder="Author"  id="author_inp" name="author">
                        <br>
                        <textarea placeholder="Comment" id="about_inp" name="about"></textarea>
                        <br>
                        <button class="btn_send" name="send">Send Post</button>
                    
                    </form>
            `;
        postListItem.dataset.id = this.id;
        

        ulPosts.appendChild(postListItem);
        const likeBtn = postListItem.querySelector('#addLike');
        likeBtn.addEventListener('click', this.addLike );
    };
};

function createPost(e) {
    e.preventDefault();
    let author = postForm.author.value;
    let text = postForm.text.value;
    let date = getDay();
    let imgUrl = postForm.imageURl.value;
    id++;
    let post = new Posts(id, author, date, text, imgUrl);
    
    posts.push(post);

    localStorage.setItem('posts', JSON.stringify(posts));
    postForm.author.value = "";
    postForm.text.value = "";
    postForm.imageURl.value = loadImg();
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
  
function loadImg(e) {
    e.preventDefault();
    let urlInput = document.getElementById('img_inp');
    let preview = document.querySelector('.preview');
    if (urlInput.value !== "") {  
        // console.log(preview);
        preview.src = urlInput.value;
    } else {
        preview.src = 'https://фонетический-разбор.рф/wp-content/themes/slova/img/no-photo.jpg';
    }
    return preview.src
}