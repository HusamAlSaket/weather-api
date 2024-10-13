function renderWeather(weather) {
    var resultsContainer = document.querySelector("#weather-results");
    
    var card = document.createElement("div");
    card.className = "weather-card";

    var city = document.createElement("h2");
    city.textContent = weather.name;
    card.append(city);

    var temp = document.createElement("p");
    temp.textContent = "Temp: " + weather.main.temp + " F ";
    card.append(temp);

    var humidity = document.createElement("p");
    humidity.textContent = "Humidity: " + weather.main.humidity + " %";
    card.append(humidity);

    var wind = document.createElement("p");
    wind.textContent = "Wind: " + weather.wind.speed + " mph, " + weather.wind.deg + " deg";
    card.append(wind);

    resultsContainer.append(card);
}

function fetchWeatherForCity(city) {
    var url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=ada9a8baf4bed573cbb3640899e88f73`;
    
    fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            renderWeather(data); 
        })
        .catch(error => console.log("Error fetching weather data:", error));
}

function fetchWeatherForCities() {
    var cities = ["Tokyo", "New York", "London", "Paris", "Berlin", "Moscow", "Beijing", "Sydney", "Cairo", "Rio de Janeiro" , "China", "Jordan", "Sweden", "Netherlands","norway"];
    var resultsContainer = document.querySelector("#weather-results");
    resultsContainer.innerHTML = ""; 

    for (var i = 0; i < cities.length; i++) {
        fetchWeatherForCity(cities[i]);
    }
}

fetchWeatherForCities();


