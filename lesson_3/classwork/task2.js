var houseArray = [
    "https://static.pexels.com/photos/106399/pexels-photo-106399.jpeg",
    "https://i.pinimg.com/736x/7f/be/50/7fbe50ec634c65709d7fe6ac267c4e6f--large-garage-plans-house-plans-large-family.jpg",
    "https://i.ytimg.com/vi/Xx6t0gmQ_Tw/maxresdefault.jpg"
  ];
    var planeArray = [
    "http://www.x-plane.com/wp-content/uploads/2014/08/B777-200ER.png",
    "https://media.cntraveler.com/photos/57067c1e9adc6caf5afe3f4c/master/pass/plane-landing-cr-getty-sb10062851ai-001.jpg",
    "https://media.wired.com/photos/59323264a31264584499367f/master/w_1024,c_limit/diesel-plane-inline.jpg"
  ];
  var treeArray = [
    "https://static.pexels.com/photos/56875/tree-dawn-nature-bucovina-56875.jpeg",
    "https://c1.staticflickr.com/8/7218/7184786016_1ddab461e8_b.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/f/ff/Spruce_tree_IMG_0444.JPG"
  ];

  

  var buttons = document.querySelectorAll('button');
  var iconBlock = document.getElementById('chooseYourBlock');
  var resultBlock = document.getElementById('result');

  console.log(buttons);

  var iconsObj = {
    house:  'https://image.flaticon.com/icons/svg/149/149064.svg',
    tree: 'https://image.flaticon.com/icons/svg/620/620705.svg',
    plane: 'https://image.flaticon.com/icons/svg/579/579268.svg'
  }

  const imgObj = {
    house:  houseArray,
    tree: treeArray,
    plane: planeArray 
  }

  function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  function showIcon(e){
    var val = e.target.innerText.toLowerCase();
    console.log(e);
    return val;
  }

  function rundomImg(e) {
    resultBlock.innerHTML = "";

    let data = e.target.getAttribute('data');
    let rundomNumber = getRandomIntInclusive(0, 2);
    
    const image = document.createElement('img');
    image.src = imgObj[data][rundomNumber];
    image.alt = "Image not found";
    resultBlock.appendChild(image);

  }

  buttons.forEach( (btn) => {
    btn.addEventListener('click', (e) => {
        iconBlock.innerHTML = "";
        resultBlock.innerHTML = "";

        const icon = document.createElement('img');
        icon.src = iconsObj[showIcon(e)];
        icon.alt = "Image not found";
        iconBlock.appendChild(icon);

        const rundomBtn = document.createElement('button');
        rundomBtn.innerText = "Create rundom image";
        rundomBtn.setAttribute('data', showIcon(e));
        iconBlock.appendChild(rundomBtn);

        rundomBtn.addEventListener('click', rundomImg);
    })
  })