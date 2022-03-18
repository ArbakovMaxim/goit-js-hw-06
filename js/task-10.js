function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}


const refs = {
  input : document.querySelector("input"),
  createButton : document.querySelector("[data-create]"),
  destroyButton : document.querySelector("[data-destroy]"),
  boxes : document.querySelector("#boxes"),
}

let size = {
  width : 30,
  height : 30
}

refs.input.addEventListener("input", valueInput);

  function valueInput(event){
    refs.input.value =  event.currentTarget.value;
}

  const onButton = () => {
    const amount = refs.input.value;
    createBoxes(amount);
}

refs.createButton.addEventListener("click", onButton);


    function createBoxes(amountElements){
      const arreyDiv = [];
      for (let i = 0 + 1; i <= amountElements ; i+=1){  
        const divEl = document.createElement('div')

          divEl.style.width = size.width + "px";
          divEl.style.height = size.height + "px" ;

          size.height += 10;
          size.width  += 10;

          divEl.style.backgroundColor = getRandomHexColor();
        arreyDiv.push(divEl);
      }
      refs.boxes.append(...arreyDiv);
    }

    const destroyBoxes = () => {
      refs.boxes.innerHTML = '';
      refs.input.value = '';
      size.height = 30;
      size.width = 30;

    }

    refs.destroyButton.addEventListener("click", destroyBoxes);
