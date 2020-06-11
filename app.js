const weather = new Weather;
const ui = new UI;
const btnCity = document.getElementById('btnIn');

btnCity.addEventListener('click', (e) =>{
  let searchCity = document.getElementById('cityIn').value;
  console.log(searchCity);

    if(searchCity !== ''){
    weather.getWeather(searchCity)
    .then(data => {
      if(data.message === 'city not found'){
        ui.getError();
      }else{
      console.log(data)
      ui.getText(data)
      }
    })
  }else{
    alert('Please enter valid input');
  }
  e.preventDefault
})
