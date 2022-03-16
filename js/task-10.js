function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}


const refs = {
  controls : document.querySelector("#controls"),
  imput : document.querySelector("input"),
  createButton : document.querySelector("[data-create]"),
  destroyButton : document.querySelector("[data-create]"),
  boxes : document.querySelector("#boxes"),
}

