const fetch = require('node-fetch');

const API_KEY = '4672d96fee5f13b03da89ebae115ba14';
const BASE_URL = 'http://api.openweathermap.org/data/2.5/weather';

async function getWeather(city) {
    const url = `${BASE_URL}?q=${city}&appid=${API_KEY}&units=metric`;

    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            const main = data.main;
            const weather = data.weather[0];
            console.log(`City: ${city}`);
            console.log(`Temperature: ${main.temp}°C`);
            console.log(`Weather: ${weather.description}`);
        } else {
            console.log("City not found.");
        }
    } catch (error) {
        console.log("Error fetching data.");
    }
}

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('Enter city name: ', city => {
    getWeather(city);
    readline.close();
});