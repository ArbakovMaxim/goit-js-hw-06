const imput = document.querySelector("#validation-input");

imput.addEventListener('blur', inputLength);

function inputLength (event){
    if (event.currentTarget.value.length > 6){
       return imput.classList = "invalid";
    }
    imput.classList ='valid';
}
