function onGeoOk(position) {
    const lat = position.coords.latitude;
    const long = position.coords.longitude;
    const units = "metric";
    const API_KEY = ""; //openweathermap API가 필요함
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${API_KEY}&units=${units}`;

    fetch(url)
        .then(response => response.json())
        .then(data => { //fetch는 promise 당장 일어나지 않고 시간이 좀 걸림
            const weather = document.querySelector("#weather span:first-child");
            const city = document.querySelector("#weather span:last-child");

            city.innerText = data.name;
            weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
        });
}

function onGeoError() {
    alert("Error! unknown geolocation");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);