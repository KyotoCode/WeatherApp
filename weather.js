// api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={your api key}
//008cd7b474299feb5e0f6db92730f0a5
//http://api.openweathermap.org/data/2.5/weather?q=belgrade&units=metric&appid=008cd7b474299feb5e0f6db92730f0a5

class Weather{
  constructor(){
    this.api_key = '008cd7b474299feb5e0f6db92730f0a5';
  }
  async getWeather(cityName){
    const weatherResponse = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${this.api_key}`);

    const weatherData = await weatherResponse.json();
    return weatherData;
  }
}