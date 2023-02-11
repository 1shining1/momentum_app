// API Key github에서 숨기기위해 apikey.js를 따로 생성함
const API_KEY = config.apikey;

function onGeoSuccess(position) {
    // console.log(position); - console에서 결과 보면 coords에서 latitude/longitude 확인가능
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    // 섭씨 - &units=metric 화씨 &units=imperial
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    // fetch(url); 하고나면 개발자도구> Network > Preview에서 url 누르면 json보임
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            // const weather = document.querySelector("#weather p:first-child");
            // 날씨상태와 온도를 나누려고 개인적으로 수정
            const weatherStatus = document.querySelector(
                "#weather p:first-child .status"
            );
            const weatherTemp = document.querySelector(
                "#weather p:first-child .temp"
            );
            const city = document.querySelector("#weather p:last-child");
            city.innerText = data.name;
            // weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
            // 날씨상태와 온도를 나누려고 개인적으로 수정
            weatherStatus.innerText = data.weather[0].main;
            weatherTemp.innerText = data.main.temp;
        });
}

function onGeoError() {
    alert("Can't find you. No weather for you.");
}

// getCurrentPosition - 2개 argument 필요(success시 실행, error시 실행), 하나의 input parameter로 object를 줌
navigator.geolocation.getCurrentPosition(onGeoSuccess, onGeoError);
