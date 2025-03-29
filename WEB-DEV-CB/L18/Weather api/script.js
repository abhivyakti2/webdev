let apiKey = '68eb9a82e650df54c98feebbf88e20d7';
let button = document.querySelector('button');
let input = document.querySelector('input');

geoURL = (city) => {
    return `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=${apiKey}`;
};

weatherURL = (lat, lon) => {
    return `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;
};

button.addEventListener('click', () => {
    let url = geoURL(input.value);
    axios.get(url)
        .then(res => {
            let data = res.data[0];
            let lat = data.lat;
            let lon = data.lon;

            return { lat, lon };
        })
        .then(data => {
            let lat = data.lat;
            let lon = data.lon;
            let url = weatherURL(lat, lon);

            axios.get(url)
                .then(res => {
                    let data = res.data;
                    console.log(data);

                    // Remove existing weather container if it exists
                    let existingContainer = document.getElementById("weather-info");
                    if (existingContainer) {
                        existingContainer.remove();
                    }

                    // Create a new weather container
                    let weatherContainer = document.createElement("div");
                    weatherContainer.classList.add("weather-container");
                    weatherContainer.id = "weather-info";

                    let heading = document.createElement("h2");
                    heading.innerText = "Weather Details";

                    let cityName = document.createElement("p");
                    cityName.innerHTML = `<strong>City:</strong> ${data.name}`;

                    let temperature = document.createElement("p");
                    temperature.innerHTML = `<strong>Temperature:</strong> ${data.main.temp}°C`;

                    let description = document.createElement("p");
                    description.innerHTML = `<strong>Condition:</strong> ${data.weather[0].description}`;

                    // Append all elements to the container
                    weatherContainer.appendChild(heading);
                    weatherContainer.appendChild(cityName);
                    weatherContainer.appendChild(temperature);
                    weatherContainer.appendChild(description);

                    // Append container to the body or another section
                    document.body.appendChild(weatherContainer);
                });
        })
        .catch(err => {
            console.log(err);
        });
});

