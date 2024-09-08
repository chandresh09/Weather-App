let search = document.querySelector(".search-icon");
let city = document.querySelector("input");
let date = document.querySelector(".date");

async function checkWeather(city) {
    if(city == "") {
        alert("Enter City Name to check Weather");
    }
    else {
        const api_key = `3a1be83dfa9c35ee1098db641a46496c`;
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`);
        const data = await response.json();
        console.log(data);
        let desc = document.querySelector(".des");
        let name = document.querySelector(".name");
        let icon = document.querySelector(".icon");
        let humidity = document.querySelector(".hm");
        let wind = document.querySelector(".sp");
        let temp = document.querySelector(".temp");

        icon.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
        desc.innerText = data.weather[0].main;
        temp.innerText = Math.round(data.main.temp - 273.15);
        name.innerText = data.name;
        humidity.innerText = data.main.humidity;
        wind.innerText = data.wind.speed;
    }
}

search.addEventListener("click", ()=> {
    checkWeather(city.value);
})

const d = new Date();
let days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
let dayInWords = days[d.getDay()];
let months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
let month = months[d.getMonth()];
let day = d.getDate();
let year = d.getFullYear();

let fullDate = `${dayInWords}, ${month} ${day}, ${year}`;
date.innerText = fullDate;