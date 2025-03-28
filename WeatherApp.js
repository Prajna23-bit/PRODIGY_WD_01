const apiKey = 'YOUR_API_KEY'; // Replace with your actual OpenWeatherMap API key

// Function to fetch weather data for the input location
function getWeather() {
    const location = document.getElementById('location').value;
    if (!location) {
        alert('Please enter a location');
        return;
    }

    const url = `http://localhost:5000/weather?location=London,UK`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            displayWeather(data);
        })
        .catch(err => {
            alert('Error fetching weather data. Please check the location and try again.');
            console.error(err);
        });
}

// Function to fetch weather data based on the user's current location
function getLocationWeather() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
            const lat = position.coords.latitude;
            const lon = position.coords.longitude;

            const url = `http://localhost:5000/weather/geo?lat=51.5074&lon=-0.1278
`;

            fetch(url)
                .then(response => response.json())
                .then(data => {
                    displayWeather(data);
                })
                .catch(err => {
                    alert('Error fetching weather data for your location.');
                    console.error(err);
                });
        });
    } else {
        alert('Geolocation is not supported by this browser.');
    }
}

// Function to display weather information
function displayWeather(data) {
    document.getElementById('city-name').innerText = `${data.name}, ${data.sys.country}`;
    document.getElementById('temperature').innerText = `Temperature: ${data.main.temp}°C`;
    document.getElementById('weather-description').innerText = `Weather: ${data.weather[0].description}`;
    document.getElementById('humidity').innerText = `Humidity: ${data.main.humidity}%`;
    document.getElementById('wind-speed').innerText = `Wind Speed: ${data.wind.speed} m/s`;

    document.getElementById('weather-info').style.display = 'block';
}
