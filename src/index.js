function search(city) {
  let apiKey = "e38aed1f8311226ef260843b3904f91b";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(showTemperature);
}

function handleSubmit(event) {
  event.preventDefault();
  let city = document.querySelector("#city-input");
  let h1 = document.querySelector("h1");
  h1.innerHTML = `Today's Weather in ${city.value} is`;
  search(city.value);
}

function showTemperature(response) {
  console.log(response.data.main.temp);
  let temperature = document.querySelector("#temperature");
  temperature.innerHTML = Math.round(response.data.main.temp);

  document.querySelector("#humidity").innerHTML = response.data.main.humidity;
  document.querySelector("#wind").innerHTML = Math.round(
    response.data.wind.speed
  );
  document.querySelector("#description").innerHTML =
    response.data.weather[0].main;
}
let searchCity = document.querySelector("form");
searchCity.addEventListener("submit", handleSubmit);

search("New York");

let now = new Date();
let hours = now.getHours();
let minutes = now.getMinutes();
let time = document.querySelector("#time");
time.innerHTML = `${hours}:${minutes}`;

let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];
let day = days[now.getDay()];
let weekday = document.querySelector("#weekday");
weekday.innerHTML = `${day}`;
