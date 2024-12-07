const apiKey = 'f81c866bbf0b45e6b0343607240712'; // Your WeatherAPI key

// Get references to the DOM elements
const weatherForm = document.getElementById("weatherForm");
const cityInput = document.getElementById("cityInput");
const weatherResult = document.getElementById("weatherResult");

// Event listener for form submission
weatherForm.addEventListener("submit", (event) => {
    event.preventDefault();  // Prevent the form from reloading the page
    const city = cityInput.value.trim();  // Trim spaces for clean input

    if (city) {
        getWeather(city);
    }
});

// Function to get weather data from WeatherAPI
async function getWeather(city) {
    try {
        const encodedCity = encodeURIComponent(city);  // Encode the city name to handle special characters
        const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${encodedCity}`);

        if (!response.ok) {
            throw new Error("City not found or invalid request");
        }

        const data = await response.json();
        displayWeather(data);
    } catch (error) {
        weatherResult.innerHTML = `<p class="error">${error.message}</p>`;
    }
}

// Function to display the weather data
function displayWeather(data) {
    const { location, current } = data;
    const tempCelsius = current.temp_c;  // Current temperature in Celsius
    const humidity = current.humidity;  // Humidity in percentage
    const windKph = current.wind_kph;  // Wind speed in km/h
    const description = current.condition.text;  // Weather description

    // Convert Celsius to Fahrenheit
    const tempFahrenheit = (tempCelsius * 9 / 5) + 32;
    
    // Convert wind speed from km/h to mph
    const windMph = windKph * 0.621371;

    // Display weather data in the result section
    weatherResult.innerHTML = `
        <h2>Weather in ${location.name}, ${location.country}</h2>
        <p><strong>Temperature:</strong> ${tempFahrenheit.toFixed(1)}°F</p>
        <p><strong>Humidity:</strong> ${humidity}%</p>
        <p><strong>Wind Speed:</strong> ${windMph.toFixed(1)} mph</p>
        <p><strong>Description:</strong> ${description}</p>
    `;
}
