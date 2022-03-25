const input = document.querySelector("#validation-input");

input.addEventListener('blur', inputLength);

function inputLength (event){
    if (event.currentTarget.value.length === input.dataset.length){
       return input.classList ='valid';
    }
    input.classList = "invalid";
}
