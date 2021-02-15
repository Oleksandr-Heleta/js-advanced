const countriesSelect = document.getElementById('countries');
const result = document.getElementById('result');

const countries = ['Ukraine', 'Poland', 'USA'];
const ukraineCity = ['Kyiv', 'Lviv', 'Odesa', 'Charkiv'];
const polandCity = ['Warszawa', 'Poznan', 'Krakow', 'Katowice'];
const usaCity = ['New York', 'Los Angeles', 'Las Vegas', 'Chicago'];

let country;
let city;
let temperature;
let frase;

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const arrBeloveZero = ['Солнечно', 'Легкий снегопад', 'Сильный снегопад'];
const arrFromZeroToThirty = ['Солнечно', 'Дождь', 'Ветер', 'Сильный дождь'];
const arrFromThirtyToFoty = ['Солнечно', 'Засуха', 'Ветер'];


let startOpt = new Option( "Выберите страну", null, true, true);
            startOpt.disabled = true;
            console.log(startOpt);

    countries.forEach( function(item, key){
        let option;
        
          option = new Option(item, item);
          console.log( option )
        
        countriesSelect.appendChild(option);
    });
  
countriesSelect.appendChild(startOpt);

const selectCity = function(e) {
  // console.log(result);
  // console.log(document.getElementById('check'));
  if (document.getElementById('check')) {
   let deletElement =  document.getElementById('check');
   deletElement.remove();
  }
  city = e.target.value;
  // console.log(city);
  temperature = getRandomIntInclusive(-10, 40);
  // console.log(temperature);
  if (temperature <= 0) {
    frase = arrBeloveZero[getRandomIntInclusive(0, arrBeloveZero.length - 1)]
  } else if (temperature > 0 && temperature < 30) {
    frase = arrFromZeroToThirty[getRandomIntInclusive(0, arrFromZeroToThirty.length - 1)]
  } else {
    frase = arrFromThirtyToFoty[getRandomIntInclusive(0, arrFromThirtyToFoty.length - 1)]
   }
  // console.log(frase);
  let forecastString = document.createElement('div');
  forecastString.setAttribute('id', "check")
  forecastString.innerText = ` ${country}. В ${city} ${frase} ${temperature} градусов.`
  result.appendChild(forecastString);
}

const selectCountry = function () {
  result.innerHTML = "";
  country = countriesSelect.value;
    let citySelect = document.createElement("select");
    let cityArr = [];
    switch(countriesSelect.value) {
        case 'Ukraine':  
            cityArr = ukraineCity;
          break;
        case 'Poland': 
            cityArr = polandCity;
          break;
        case 'USA':  
            cityArr = usaCity;
          break;
        default:
          console.log("Chose country");
          break;
      }
    
      cityArr.forEach( function(item, key){
        let city;
        
          city = new Option(item, item);
          
        
          citySelect.appendChild(city);
    });
    result.appendChild(citySelect);
    citySelect.addEventListener('input', selectCity)
};

countriesSelect.addEventListener("input", selectCountry);