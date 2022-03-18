function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}


const refs = {
  input : document.querySelector("input"),
  createButton : document.querySelector("[data-create]"),
  destroyButton : document.querySelector("[data-destroy]"),
  boxes : document.querySelector("#boxes"),
}

//let amount = 0;
let size = {
  width : 20,
  height : 20
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
          size.height += 10;
          size.width  += 10;

          divEl.style.width = size.width + "px";
          divEl.style.height = size.height + "px" ;
          divEl.style.backgroundColor = getRandomHexColor();
        arreyDiv.push(divEl);
      }
      refs.boxes.append(...arreyDiv);
      console.log(arreyDiv)
    }

    const destroyBoxes = () => {
      refs.boxes.innerHTML = '';
      refs.input.value = '';
      size.height = 20;
      size.width = 20;

    }

    refs.destroyButton.addEventListener("click", destroyBoxes);
