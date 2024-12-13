document.getElementById('getApi').addEventListener('click', function() {
    const apiKey = 'be69e010d1fb4ce4adf00524241312'; // Replace with your actual API key
    const cityName = document.getElementById('cityName').value;

    // Fetch current weather data
    fetch(`http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${cityName}&aqi=yes`)
        .then(response => response.json())
        .then(data => {
            const output = `
                <div style="background-color:white; border-radius:10px; padding:20px;">
                    <h2>${data.location.name}</h2>
                    <p>${data.current.temp_c}°C</p>
                    <p>${data.current.condition.text}</p>
                </div>`;
            document.getElementById('output').innerHTML = output;

            // Fetch additional metrics
            const metrics = `
                <p>Wind Speed: ${data.current.wind_kph} kph</p>
                <p>Humidity: ${data.current.humidity}%</p>
                <p>UV Index: ${data.current.uv}</p>`;
            document.getElementById('additionalMetrics').innerHTML = metrics;

            // Fetch detailed forecast
            fetch(`http://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${cityName}&days=7&aqi=no&alerts=yes`)
                .then(response => response.json())
                .then(forecastData => {
                    let forecastHtml = '<h3>7-Day Forecast:</h3>';
                    forecastData.forecast.forecastday.forEach(day => {
                        forecastHtml += `
                            <div style="background-color:white; border-radius:10px; padding:10px; margin-top:10px;">
                                <p><strong>${day.date}</strong></p>
                                <p>Max Temp: ${day.day.maxtemp_c}°C</p>
                                <p>Min Temp: ${day.day.mintemp_c}°C</p>
                                <p>${day.day.condition.text}</p>
                            </div>`;
                    });
                    document.getElementById('detailedForecast').innerHTML = forecastHtml;
                })
                .catch(error => console.error('Error fetching detailed forecast:', error));
        })
        .catch(error => console.error('Error fetching weather data:', error));
});