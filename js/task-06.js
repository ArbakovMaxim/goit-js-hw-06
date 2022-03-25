const input = document.querySelector("#validation-input");

input.addEventListener('blur', inputLength);
const lengthInput = input.dataset.length

function inputLength (event){
    if (event.currentTarget.value.length === Number(lengthInput)){
       return input.classList ='valid';
    }
    input.classList = "invalid";
}
