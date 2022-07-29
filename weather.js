// aip key is imported from this file
import API_KEY from "./apikey.js";

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": API_KEY,
    "X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com",
  },
};

// DOM Elements
const locationInput = document.getElementById("location-input");
const weather = document.getElementById("weather");
const searchButton = document.getElementById("search-button");
const temp = document.getElementById("temp");
const city = document.getElementById("city");

searchButton.onclick = () => search(locationInput.value);

//functions
function search(value) {
  // fetches data and passes it to getTemperatureResults()
  fetch(
    `https://weatherapi-com.p.rapidapi.com/current.json?q=${value}`,
    options
  )
    .then((response) => response.json())
    .then((response) => {
      getTemperatureResults(response);
    })
    .catch((err) => console.error(err));
}

function getTemperatureResults(data) {
  //receive data from search() and displays the data to the DOM
  console.log(data);
  city.innerText = `City: ${data.location.name}`;
  weather.innerText = `Weather: ${data.current.condition.text}`;
  temp.innerHTML = `Temp: ${data.current.temp_f}<span>&#176;F</span>`;
}
