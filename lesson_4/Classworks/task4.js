const countriesSelect = document.getElementById('countries');
const result = document.getElementById('result');

const countries = ['Ukraine', 'Poland', 'USA'];
const ukraineCity = ['Kyiv', 'Lviv', 'Odesa', 'Charkiv'];
const polandCity = ['Warszawa', 'Poznan', 'Krakow', 'Katowice'];
const usaCity = ['New York', 'Los Angeles', 'Las Vegas', 'Chicago'];


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
countriesSelect.addEventListener("input", function () {
    console.log(countriesSelect.value)
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
})

