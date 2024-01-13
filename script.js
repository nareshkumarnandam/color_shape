var arr = ["square", "triangle", "rectangle", "circle", "diamond", "star"];
var color = [ "red", "cyan",  "black",  "violet",  "blue",  "yellow", "green", "purple",  "orange",  "lightgreen",  "brown" , "orangered"];

let outer = document.getElementById("outer");
let inner = document.getElementById("inner");
let colorbtn = document.getElementById("color");
let shapebtn = document.getElementById("shape");

var index = 0;

colorbtn.addEventListener("click", changeColor);

function changeColor() {
  if (index === color.length) {
    index = 0;
  }
  outer.style.backgroundColor = color[index];
  index++;
}

shapebtn.onclick = function () {
  let style = inner.classList[0];
  let flag = true;
  let random;
  while (flag) {
    random = Math.floor(Math.random() * arr.length);
    if (style != arr[random]) {
      flag = false;
    }
  }
  inner.classList.remove(style);
  inner.classList.add(arr[random]);
};
