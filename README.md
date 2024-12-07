# Weather App

A simple and interactive weather app built using JavaScript, HTML, and CSS. The app fetches real-time weather data using the [WeatherAPI](https://www.weatherapi.com/) and displays current weather information like temperature, humidity, wind speed, and weather conditions for a given city. This project demonstrates the ability to integrate third-party APIs, handle user input, and display dynamic data on the front-end.

## Demo

[View the live app](#) *(https://jmumpower.github.io/weather-app/)*.

## Features

- **City Search:** Users can enter any city name to retrieve its current weather.
- **Current Weather Info:** Displays temperature (in Fahrenheit), humidity, wind speed (in mph), and weather description.
- **Responsive Design:** The app is designed to be mobile-friendly and fully responsive, ensuring usability across devices.
- **User-friendly UI:** Clean and minimalistic interface with intuitive form inputs and outputs.

## Technologies Used

- **HTML5** - For structuring the web page.
- **CSS3** - For styling the app with a clean and modern look.
- **JavaScript** - For making API requests and handling dynamic content updates.
- **WeatherAPI** - Provides real-time weather data (free tier for development).

## Installation

1. Clone this repository to your local machine:
    ```bash
    git clone https://github.com/jmumpower/weather-app.git
    ```

2. Navigate into the project directory:
    ```bash
    cd weather-app
    ```

3. Open the `index.html` file in your browser.

No server setup is required as this is a static front-end application.

## API Key

This project uses the [WeatherAPI](https://www.weatherapi.com/), a free weather data API. To use this API, you need to create an account and obtain your own API key.

1. Visit [WeatherAPI](https://www.weatherapi.com/).
2. Sign up for a free account.
3. Get your API key from the dashboard.
4. Replace the API key in `script.js` with your own.

## How it Works

1. **City Input:** The user enters a city name in the input field and submits the form.
2. **API Request:** A `fetch` request is made to the WeatherAPI using the city name to get the weather data.
3. **Data Parsing:** The app processes the response and extracts temperature, humidity, wind speed, and description.
4. **UI Update:** The weather data is displayed on the page, allowing the user to view current conditions for their chosen city.

## Future Improvements

- **Error Handling:** Enhance error handling for cases like invalid city names or network issues.
- **Unit Conversion:** Allow users to toggle between Celsius and Fahrenheit.
- **Extended Forecast:** Display a 5-day forecast along with hourly temperature and weather predictions.
- **Geolocation Support:** Allow users to get the weather for their current location automatically.

## Contribution

Feel free to fork this repository and submit pull requests with improvements. You can also open issues to report bugs or suggest new features.

## License

This project is open source and available under the [MIT License](LICENSE).
