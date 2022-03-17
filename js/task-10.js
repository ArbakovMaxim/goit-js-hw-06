function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}


const refs = {
  input : document.querySelector("input"),
  createButton : document.querySelector("[data-create]"),
  destroyButton : document.querySelector("[data-destroy]"),
  boxes : document.querySelector("#boxes"),
}


refs.input.addEventListener("input", onInput);

  function onInput(event){
    refs.input.value =  event.currentTarget.value;
}
const amount = refs.input.value;

  const onButton = () => {
    const amount = refs.input.value;
    createBoxes(amount);
}

refs.createButton.addEventListener("click", onButton);


    function createBoxes(amount){
      const arrey = [];
      for (let i = 0 + 1; i <= amount ; i+=1){  
        const divEl = document.createElement('div')
          divEl.style.width = (20  + (i * 10)) + "px";
          divEl.style.height = (20 + (i * 10)) + "px" ;
          divEl.style.backgroundColor = getRandomHexColor();
        arrey.push(divEl);
      }
      refs.boxes.append(...arrey);
      console.log(arrey)
    }

    const destroyBoxes = () => {
      refs.boxes.innerHTML = '';
      refs.input.value = '';
    }

    
    refs.destroyButton.addEventListener("click", destroyBoxes);
