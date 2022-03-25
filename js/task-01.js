// Задача 1
const listEl = document.querySelectorAll(`.item`);
console.log(`Number of categories: `, listEl.length);
console.log(``);


const allList = listEl.forEach( list => {
    const childrenListEl = list;
    const titleEl = childrenListEl.firstElementChild;
    console.log(`Category: ${titleEl.textContent}`)
    
    const AllChildInsideSecondLastListEl = childrenListEl.querySelectorAll(`li`)
    console.log(`Elements: ${AllChildInsideSecondLastListEl.length}`);
    console.log(``);
});
