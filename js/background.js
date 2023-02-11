const images = ["01.jpg", "02.jpg", "03.jpg", "04.jpg", "05.jpg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

// div > img tag 만들어 넣음
const imgWrap = document.createElement("div");
// 만든 div에 class 추가
imgWrap.setAttribute("class", "img_wrap");
const bgImage = document.createElement("img");
// imgWrap.appendChild(bgImage);

// img 주소
bgImage.src = `img/${chosenImage}`;

// body에 img tag 추가
document.body.appendChild(imgWrap);
imgWrap.appendChild(bgImage);
