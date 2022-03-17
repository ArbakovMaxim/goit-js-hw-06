function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}


const refs = {
  imput : document.querySelector("input"),
  createButton : document.querySelector("[data-create]"),
  destroyButton : document.querySelector("[data-destroy]"),
  boxes : document.querySelector("#boxes"),
}


refs.imput.addEventListener("input", onInput);

  function onInput(event){
    refs.imput.value =  event.currentTarget.value;
}


  const onButton = () => {
    const amount = refs.imput.value;
    createBoxes(amount);
}

refs.createButton.addEventListener("click", onButton);


    function createBoxes(amount){
      const ress = [];

      for (let i = 0 + 1; i <= amount ; i+=1){  
        ress.push(i);                 
      } 
      const allDiv = ress.map(res => {
        const divEl = document.createElement('div')
          divEl.style.width = (20  + (res * 10)) + "px";
          divEl.style.height = (20 + (res * 10)) + "px" ;
          divEl.style.backgroundColor = getRandomHexColor();
      
        return divEl
      })
      refs.boxes.append(...allDiv);
    }

    const destroyBoxes = () => {
      refs.boxes.innerHTML = '';
    }
    
    refs.destroyButton.addEventListener("click", destroyBoxes);
