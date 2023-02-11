const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

// 일반적으로 string만 포함한 변수는 대문자로 표기
const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
    // submit 하고 브라우저 새로고침 되는 것(디폴트 기능)을 방지
    event.preventDefault();
    // hide form
    loginForm.classList.add(HIDDEN_CLASSNAME);
    // input value를 username이라는 변수로 저장
    const username = loginInput.value;
    // local storage에 username 저장
    localStorage.setItem(USERNAME_KEY, username);
    // 아래 function 실행
    paintGreetings(username);
}

function paintGreetings(username) {
    greeting.innerText = `Hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

// local storage에 username이 저장되어있는지 확인하고 form 숨길지 여부 결정
if (savedUsername === null) {
    // show the form
    // input에 username 넣고submit할때 onLoginSubmit function 실행
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
} else {
    // show the greetings
    // local storage에 저장된 username(savedUsername으로 greeting)하도록 function 실행
    paintGreetings(savedUsername);
}
