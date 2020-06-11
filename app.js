const weather = new Weather;
const btnCity = document.getElementById('btnIn');

btnCity.addEventListener('click', (e) =>{
  let searchCity = document.getElementById('cityIn').value;
  console.log(searchCity);

    if(searchCity !== ''){
    weather.getWeather(searchCity)
    .then(data => console.log(data))
  }

  e.preventDefault
//   console.log(searchText);
})
// searchCity.addEventListener('keyup', (e) => {
//   let searchText= e.target.value;
//   console.log(searchText);

//   if(searchText !== ''){
//     weather.getWeather(searchText)
//     .then(data => console.log(data))
//   }
// })