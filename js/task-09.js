function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  spanColor : document.querySelector(".color"),
  btn : document.querySelector('.change-color'),
  body : document.querySelector('body')
}

refs.btn.addEventListener("click", changeColor);

function changeColor(){
  refs.body.style.backgroundColor = getRandomHexColor();
  refs.spanColor.textContent = refs.body.style.backgroundColor;

}