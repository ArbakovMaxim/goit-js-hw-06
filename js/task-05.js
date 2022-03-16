const refs = {
inputEl : document.querySelector('#name-input'),
nameEl : document.querySelector('#name-output'),
}

refs.inputEl.addEventListener('input', onInput) 

function onInput (event) {
    if (event.currentTarget.value === ""){
        return refs.nameEl.textContent ="Anonymous"
    }

    refs.nameEl.textContent = event.currentTarget.value;
}
