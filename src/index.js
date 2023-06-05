let now = new Date();

let hour = now.getHours();
if (hour < 10) {
  hour = `0${hour}`;
}
let minute = now.getMinutes();
if (minute < 10) {
  minute = `0${minute}`;
}
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let day = days[now.getDay()];
let timeStamp = document.querySelector("#time-stamp");
timeStamp.innerHTML = `Last updated: ${day} ${hour}:${minute}`;

function placeName(event) {
  event.preventDefault();
  let apiKey = "6b3c4e08d289a7670d02139e01cac3a3";
  let city = document.querySelector("#city-input").value;
  let apiUrl =`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric`
  axios.get(`${apiUrl}&appid=${apiKey}`).then(showTemp);
}

let cityForm = document.querySelector("#city-form");
cityForm.addEventListener("submit", placeName);


function showTemp (response) {
  let temperature = Math.round(response.data.main.temp);
  let currentTemp = document.querySelector("#currentTemp");
  currentTemp.innerHTML = `${temperature}˚C`;
  document.querySelector("#city-search").innerHTML = response.data.name;
document.querySelector("#feelLike").innerHTML = Math.round(response.data.main.feels_like);
let max = response.data.main.temp_max;
let min = response.data.main.temp_min;
let maxMin = document.querySelector("#max-min");
console.log (`${max}˚C | ${min}˚C`);
}
 

