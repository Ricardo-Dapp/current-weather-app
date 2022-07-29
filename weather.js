const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "a628d50938msh222c8877954209fp19a154jsn2a3d1df8c826",
    "X-RapidAPI-Host": "open-weather13.p.rapidapi.com",
  },
};
/*
fetch("https://open-weather13.p.rapidapi.com/city/chicago", options)
  .then((response) => response.json())
  .then((data) => console.log(data.weather[0].main))
  .catch((err) => console.error(err));
*/

// Variables

// DOM Elements
const locationInput = document.getElementById("location-input");
const weather = document.getElementById("weather");
const searchButton = document.getElementById("search-button");

searchButton.onclick = () => search(locationInput.value);

function search(value) {
  const city = value.toString();
  console.log("clicked");
  fetch(`https://open-weather13.p.rapidapi.com/city/${city}`, options)
    .then((response) => response.json())
    .then((data) => getTemperatureResults(data.weather[0].main))
    .catch((err) => console.error(err));
}

function getTemperatureResults(data) {}
