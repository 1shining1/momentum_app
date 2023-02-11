const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

// localStrorage에서 발견되는 이전의 toDo(parsedToDos)를 넣을거라서 let
let toDos = [];

function saveToDos() {
    // localStorage에는 text로만 저장가능(array는 안됨)
    // JSON.stringify() - json 객체를 String 객체로 변환
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteTodo(event) {
    // console.dir(event.target);로 button click 했을때 해당버튼의 parent가 뭔지 확인가능(parentElement:li)
    // console.log(event.target.parentElement.innerText);로 해당버튼 text 확인가능

    // click한 button의 parent li
    const li = event.target.parentElement;
    // toDo는 toDos DB에 있는 요소 중 하나임
    // 클릭한 li의 id와 다른 toDo는 남김
    // parseInt로 string인 li.id를 숫자로 변경
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
    li.remove();
    // toDos DB에서 todo 지운 뒤에 saveToDos 다시 실행
    saveToDos();
}

function paintToDo(newTodo) {
    // li, li 내 span/button 생성
    const li = document.createElement("li");
    // newTodoObj에서 받은 id를 li에 줌(html에 반영됨)
    li.id = newTodo.id;
    const span = document.createElement("span");
    // span 내 text는 newTodo(toDoInput에 입력되었던 value)
    span.innerText = newTodo.text;
    const button = document.createElement("button");
    button.innerText = "x";
    button.addEventListener("click", deleteTodo);
    li.appendChild(span);
    li.appendChild(button);
    // ul#todo-list 안에 li 위치시킴
    toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
    // enter할때 reload되는것 방지
    event.preventDefault();
    const newTodo = toDoInput.value;
    // 입력/enter 후 input 입력한 것을 비우기 / newTodo 변수에 영향주지않음
    toDoInput.value = "";
    // 그냥 text가 아니라 object로 저장하기위해
    const newTodoObj = {
        text: newTodo,
        // random id 생성
        id: Date.now(),
    };
    // newTodoObj를 toDos에 push
    toDos.push(newTodoObj);
    paintToDo(newTodoObj);
    // saveToDos 실행(toDos array 내용을 localStorage에 넣음)
    saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null) {
    // saveToDos를 JavaScript object로 변환
    const parsedToDos = JSON.parse(savedToDos);
    // toDos가 빈 array이기 때문에 localStrorage에서 발견되는 이전의 toDo를 복원(parsedToDos)
    toDos = parsedToDos;
    // forEach() - 배열 요소 각각에 대해 실행하는 메서드
    // array의 각 item에 대해 function 실행
    // parsedToDos.forEach((item) => console.log("this is the turn of ", item));
    parsedToDos.forEach(paintToDo);
}
