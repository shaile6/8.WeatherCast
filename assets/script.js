function displayTemperature(response) {
  // console.log(response.data.main.temp);
  let temperatureElement = document.querySelector("#lond-temp");
  let cityElement = document.querySelector("#city");
  let windElement = document.querySelector("#lond-wind");
  let humidityElement = document.querySelector("#lond-hum");
  let iconElement = document.querySelector("#icon");

  temperatureElement.innerHTML = Math.round(response.data.main.temp);
  cityElement.innerHTML = response.data.name;
  windElement.innerHTML = MAth.round(response.data.wind);
  humidityElement.innerHTML = response.data.main.humidity;
  iconElement.setAttribute(
    "src",
    `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
  );
  iconElement.setAttribute("alt", response.data.weather[0].description);
}

let apiKey = "7200d6703bcb378a2156497d6def2682";
let city = "London";
let lat = 51.5128;
let lon = -0.0918;
let apiUrl = `api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}`;

axios.get(apiUrl).then(displayTemperature);

console.log(apiUrl);
