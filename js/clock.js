const clock = document.querySelector("h1#clock");

function getClock() {
    const date = new Date();
    // date.get***()를 string으로 변환 후 padStart 이용
    // padStart() / padEnd - string에 사용하는 function

    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    // clock.innerText = `${hours}:${minutes}:${seconds}`;
    // seconds 삭제함
    clock.innerText = `${hours}:${minutes}`;
}

// page가 load 되자마다 getClock() 실행하고 매초마다 실행
getClock();
// setInterval(getClock, 1000);
// 60초로 변경..
setInterval(getClock, 60000);
