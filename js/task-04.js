const  counterValue= document.querySelector('#value');
counterValue.textContent = 0;
counterValue.step = 1;
counterValue.value = 0;

const decrementButton = document.querySelector('[data-action="decrement"]');
const incrementButton = document.querySelector('[data-action="increment"]');



const callBeckDecrement = () =>{
    counterValue.value -= counterValue.step;
    counterValue.textContent = counterValue.value;
};


decrementButton.addEventListener("click", callBeckDecrement);


const callBeckIncrement = () =>{

    counterValue.value += counterValue.step;
    counterValue.textContent = counterValue.value;
};


incrementButton.addEventListener("click", callBeckIncrement);



//вариант 2 (не работает, надо понять по чему)

/* const counterValue  = function({value = 0, step = 1,}={}){
    this.value = value;
    this.step = step;
    this._refs = refs;
    this.incrementBtn();
};

counterValue.prototype.refs ={
counter : document.querySelector('#value'),
decrementButton : document.querySelector('[data-action="decrement"]'),
incrementButton : document.querySelector('[data-action="increment"]'),
}

counterValue.prototype.incrementBtn = function(){
    this._refs.incrementButton.addEventListener('click', () => {
    this.increment();
    this.newValue();
    });

    this._refs.decremenButton.addEventListener('click', () => {
    this.decremen();
    this.newValue();
    });

}

counterValue.prototype.newValue = function(){
    this._refs.counter.textContent = this.value;
}

counterValue.prototype.increment = function() {
    this.value += this.step
}

counterValue.prototype.decrement = function() {
    this.value -= this.step
}
console.log(counterValue);
console.log(this._refs.counter.textContent) */