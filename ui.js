class UI {
  getText(wtData){
    let out = `
    <div class="card text-center">
      <div class="card-body">
        <h5 class="card-title"><span>${wtData.name}</span></h5>
        <h6 class="card-subtitle mb-2 text-muted"><span>${wtData.sys.country}</span></h6>
        <h2><span>${wtData.main.temp}&#8451;</span></h2>
        <h4>${wtData.weather[0].main}</h4>
        <br>
        <span class="m-2">Feels like: ${wtData.main.feels_like}&#8451;</span>
        <span class="m-2">Visibility: ${wtData.visibility}m</span>
        <span class="m-2">Wind: ${wtData.wind.speed}km/h</span>
        <br>
        <span class="m-2">Barrometer: ${wtData.main.pressure}mb</span>
        <span class="m-2">Humidity: ${wtData.main.humidity}%</span>
        <span class="m-2">DevPoint: ${wtData.main.temp_min}&#8451;</span>
      </div>
    </div>
    `
    document.getElementById('showData').innerHTML = out;
  }
  getError(){
    document.getElementById('showData').innerHTML = `
    <div class="alert alert-danger text-center" role="alert">
    City you are looking for does not exist.
    </div>`
    setTimeout(() => { document.getElementById('showData').innerHTML = '';}, 5000);
  }
}