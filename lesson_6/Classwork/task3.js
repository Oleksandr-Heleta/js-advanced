 /*
      Задание:
      1. При помощи методов изложеных ниже, переформатировать ITEA_COURSES в массив который содержит длину строк каждого из элементов.
      2. Отфильтровать массив ITEA_COURSES по алфавиту.
          + Бонусный бал. Вывести на страничку списком
      3. Реализация функции поиска по массиву ITEA_COURSES.
          + Бонусный бал. Вывести на страничку инпут и кнопку по которой будет срабатывать поиск.
    */

    const ITEA_COURSES = ["Курс HTML & CSS", "JavaScript базовый курс", "JavaScript продвинутый курс", "JavaScript Professional", "Angular 2.4 (базовый)", "Angular 2.4 (продвинутый)", "React.js", "React Native", "Node.js", "Vue.js"];

    const input = document.getElementById("finder");
    const resultList = document.getElementById("result");

    // -------1------
    const strLengthsArr = ITEA_COURSES.map((item) => item.length);
    console.log(strLengthsArr);

    // ------2-------
    ITEA_COURSES.sort();
    console.log(ITEA_COURSES);

    function renderCourses(array) {
        resultList.innerHTML = "";
      
        array.forEach((item) => {
          const newListItem = document.createElement("li");
          newListItem.innerText = item;
          resultList.appendChild(newListItem);
        });
      }
      renderCourses(ITEA_COURSES);

    // -------3--------
    function findCourse(e) {
        const inputText = e.target.value.toLowerCase();
        const filteredCourses = ITEA_COURSES.filter((item) =>
          item.toLowerCase().includes(inputText)
        );
        renderCourses(filteredCourses);
      }
      
      input.addEventListener("input", findCourse);
      


   /*
     Задание 2:
     Написать фильтр массива по:
     Актеру, продолжительности

     Бонус:
       Сделать графическую оболочку для программы:
       - Селект со списком актеров
       - Селект или инпут с продолжительностью
       - Результат в виде списка фильмов
   */

     const stars = ['Elijah Wood', 'Ian McKellen', 'Orlando Bloom','Ewan McGregor',' Liam Neeson', 'Natalie Portman', 'Ewan McGregor', 'Billy Bob Thornton', 'Martin Freeman']
     const movies = [
           {
             name: "Lord of the Rigs",
             duration: 240,
             starring: [ 'Elijah Wood', 'Ian McKellen', 'Orlando Bloom']
           },
           {
             name: "Star Wars: Episode I - The Phantom Menace",
             duration: 136,
             starring: [ 'Ewan McGregor',' Liam Neeson', 'Natalie Portman']
           },
           {
             name: "Fargo",
             duration: 100,
             starring: [ 'Ewan McGregor', 'Billy Bob Thornton', 'Martin Freeman']
           },
           {
           name: "V for Vendetta",
           duration: 150,
           starring: [ 'Hugo Weaving', 'Natalie Portman', 'Rupert Graves']
         }
       ];

       
const actorSelector = document.getElementById("actorSelector");
const movieLengthSelector = document.getElementById("movieLengthSelector");
const moviesList = document.getElementById("moviesResult");

// функция создания списка фильмов
function renderMovies(movies) {
  moviesList.innerHTML = "";

  movies.forEach((item) => {
    const newListItem = document.createElement("li");
    const movieStr = `
    <span>Movie: ${item.name}</span>
    <span>Duration: ${item.duration}</span>
    <span>Stars: ${item.starring.map((actor) => actor).join(", ")}</span>
    `;
    newListItem.innerHTML = movieStr;
    moviesList.appendChild(newListItem);
  });
}

renderMovies(movies);

// функция создания селектора Актеров
const startOpt = new Option( "Выберите актера", null, true, true);
            startOpt.disabled = true;
            // console.log(startOpt);

stars.forEach( function(item, key){
    let option;
    option = new Option(item, item);
    // console.log( option )
    
    actorSelector.appendChild(option);
});
  
actorSelector.appendChild(startOpt);

// функция создания селектора Продолжительности фильма
const duration = [];
movies.forEach(item => duration.push(item.duration));

const startDurOpt = new Option( "Выберите продолжительность", null, true, true);
            startDurOpt.disabled = true;
            // console.log(startOpt);

duration.forEach( function(item, key){
    let option;
    option = new Option(item, item);
    // console.log( option )
    
    movieLengthSelector.appendChild(option);
});
  
movieLengthSelector.appendChild(startDurOpt);

// функция сортирования по актеру
const filterStar = (e) => {
  let starValue = e.target.value;
  let sortMovies = [];
  movies.forEach((obj) => {
    obj.starring.forEach(el => {
      if(el === starValue) sortMovies.push(obj)
    })
  } )
  renderMovies(sortMovies)
}

actorSelector.addEventListener('input', filterStar)

// функция сортирования по продолжитильности
const filterDuration = (e) => {
  let durationValue = +e.target.value;
  let sortMovies = [];
  movies.forEach((obj) => {
      if(obj.duration === durationValue) sortMovies.push(obj)
  } )
  renderMovies(sortMovies)
}

movieLengthSelector.addEventListener('input', filterDuration)