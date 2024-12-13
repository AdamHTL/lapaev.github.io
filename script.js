{\rtf1\ansi\ansicpg1252\cocoartf2820
\cocoatextscaling1\cocoaplatform1{\fonttbl\f0\froman\fcharset0 TimesNewRomanPSMT;}
{\colortbl;\red255\green255\blue255;\red0\green0\blue0;}
{\*\expandedcolortbl;;\cssrgb\c0\c0\c0;}
\deftab720
\pard\pardeftab720\partightenfactor0

\f0\fs24 \cf2 \expnd0\expndtw0\kerning0
\outl0\strokewidth0 \strokec2 document.getElementById('getApi').addEventListener('click', function() \{\
\'a0 \'a0 const apiKey = 'be69e010d1fb4ce4adf00524241312'; // Replace with your actual API key\
\'a0 \'a0 const cityName = document.getElementById('cityName').value;\
\
\'a0 \'a0 // Fetch current weather data\
\'a0 \'a0 fetch(`http://api.weatherapi.com/v1/current.json?key=$\{apiKey\}&q=$\{cityName\}&aqi=yes`)\
\'a0 \'a0 \'a0 \'a0 .then(response => response.json())\
\'a0 \'a0 \'a0 \'a0 .then(data => \{\
\'a0 \'a0 \'a0 \'a0 \'a0 \'a0 const output = `\
\'a0 \'a0 \'a0 \'a0 \'a0 \'a0 \'a0 \'a0 <div style="background-color:white; border-radius:10px; padding:20px;">\
\'a0 \'a0 \'a0 \'a0 \'a0 \'a0 \'a0 \'a0 \'a0 \'a0 <h2>$\{data.location.name\}</h2>\
\'a0 \'a0 \'a0 \'a0 \'a0 \'a0 \'a0 \'a0 \'a0 \'a0 <p>$\{data.current.temp_c\}\'b0C</p>\
\'a0 \'a0 \'a0 \'a0 \'a0 \'a0 \'a0 \'a0 \'a0 \'a0 <p>$\{data.current.condition.text\}</p>\
\'a0 \'a0 \'a0 \'a0 \'a0 \'a0 \'a0 \'a0 </div>`;\
\'a0 \'a0 \'a0 \'a0 \'a0 \'a0 document.getElementById('output').innerHTML = output;\
\
\'a0 \'a0 \'a0 \'a0 \'a0 \'a0 // Fetch additional metrics\
\'a0 \'a0 \'a0 \'a0 \'a0 \'a0 const metrics = `\
\'a0 \'a0 \'a0 \'a0 \'a0 \'a0 \'a0 \'a0 <p>Wind Speed: $\{data.current.wind_kph\} kph</p>\
\'a0 \'a0 \'a0 \'a0 \'a0 \'a0 \'a0 \'a0 <p>Humidity: $\{data.current.humidity\}%</p>\
\'a0 \'a0 \'a0 \'a0 \'a0 \'a0 \'a0 \'a0 <p>UV Index: $\{data.current.uv\}</p>`;\
\'a0 \'a0 \'a0 \'a0 \'a0 \'a0 document.getElementById('additionalMetrics').innerHTML = metrics;\
\
\'a0 \'a0 \'a0 \'a0 \'a0 \'a0 // Fetch detailed forecast\
\'a0 \'a0 \'a0 \'a0 \'a0 \'a0 fetch(`http://api.weatherapi.com/v1/forecast.json?key=$\{apiKey\}&q=$\{cityName\}&days=7&aqi=no&alerts=yes`)\
\'a0 \'a0 \'a0 \'a0 \'a0 \'a0 \'a0 \'a0 .then(response => response.json())\
\'a0 \'a0 \'a0 \'a0 \'a0 \'a0 \'a0 \'a0 .then(forecastData => \{\
\'a0 \'a0 \'a0 \'a0 \'a0 \'a0 \'a0 \'a0 \'a0 \'a0 let forecastHtml = '<h3>7-Day Forecast:</h3>';\
\'a0 \'a0 \'a0 \'a0 \'a0 \'a0 \'a0 \'a0 \'a0 \'a0 forecastData.forecast.forecastday.forEach(day => \{\
\'a0 \'a0 \'a0 \'a0 \'a0 \'a0 \'a0 \'a0 \'a0 \'a0 \'a0 \'a0 forecastHtml += `\
\'a0 \'a0 \'a0 \'a0 \'a0 \'a0 \'a0 \'a0 \'a0 \'a0 \'a0 \'a0 \'a0 \'a0 <div style="background-color:white; border-radius:10px; padding:10px; margin-top:10px;">\
\'a0 \'a0 \'a0 \'a0 \'a0 \'a0 \'a0 \'a0 \'a0 \'a0 \'a0 \'a0 \'a0 \'a0 \'a0 \'a0 <p><strong>$\{day.date\}</strong></p>\
\'a0 \'a0 \'a0 \'a0 \'a0 \'a0 \'a0 \'a0 \'a0 \'a0 \'a0 \'a0 \'a0 \'a0 \'a0 \'a0 <p>Max Temp: $\{day.day.maxtemp_c\}\'b0C</p>\
\'a0 \'a0 \'a0 \'a0 \'a0 \'a0 \'a0 \'a0 \'a0 \'a0 \'a0 \'a0 \'a0 \'a0 \'a0 \'a0 <p>Min Temp: $\{day.day.mintemp_c\}\'b0C</p>\
\'a0 \'a0 \'a0 \'a0 \'a0 \'a0 \'a0 \'a0 \'a0 \'a0 \'a0 \'a0 \'a0 \'a0 \'a0 \'a0 <p>$\{day.day.condition.text\}</p>\
\'a0 \'a0 \'a0 \'a0 \'a0 \'a0 \'a0 \'a0 \'a0 \'a0 \'a0 \'a0 \'a0 \'a0 </div>`;\
\'a0 \'a0 \'a0 \'a0 \'a0 \'a0 \'a0 \'a0 \'a0 \'a0 \});\
\'a0 \'a0 \'a0 \'a0 \'a0 \'a0 \'a0 \'a0 \'a0 \'a0 document.getElementById('detailedForecast').innerHTML = forecastHtml;\
\'a0 \'a0 \'a0 \'a0 \'a0 \'a0 \'a0 \'a0 \})\
\'a0 \'a0 \'a0 \'a0 \'a0 \'a0 \'a0 \'a0 .catch(error => console.error('Error fetching detailed forecast:', error));\
\'a0 \'a0 \'a0 \'a0 \})\
\'a0 \'a0 \'a0 \'a0 .catch(error => console.error('Error fetching weather data:', error));\
\});\
\
}