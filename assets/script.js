function displayTemperature(response) {
  console.log(response.data.main.temp);
  let temperatureElement = document.querySelector("#lond-temp");
  let cityElement = document.querySelector("#city");
  let windElement = document.querySelector("#lond-wind");
  let humidityElement = document.querySelector("#lond-hum");
  temperatureElement.innerHTML = Math.round(response.data.main.temp);
  cityElement.innerHTML = response.data.name;
  windElement.innerHTML = response.data.wind;
  humidityElement.innerHTML = response.data.main.humidity;
}

let apiKey = "7200d6703bcb378a2156497d6def2682";
let lat = 51.5128;
let lon = -0.0918;
let apiUrl = `api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}`;

axios.get(apiUrl).then(displayTemperature);

console.log(apiUrl);
