// Задача 1
const listEl = document.querySelectorAll(`.item`);
console.log(`Number of categories: `, listEl.length);
console.log(``);

//Первый списиок

const ferstListEl = document.querySelector(`.item`);
const ferstTitleEl = ferstListEl.firstElementChild;
console.log(`Category: ${ferstTitleEl.textContent}`)

const ferstListInsideListEl = document.querySelector(`.item, li`)
const LastChildInsideListEL = ferstListInsideListEl.lastElementChild;
const AllChildInsideLastListEl = LastChildInsideListEL.querySelectorAll(`li`);
console.log(`Elements: ${AllChildInsideLastListEl.length}`);
console.log(``);

//Второй список


const secondChildrenListEl = listEl[1];
const secondTitleEl = secondChildrenListEl.firstElementChild;
console.log(`Category: ${secondTitleEl.textContent}`)

const AllChildInsideSecondLastListEl = secondChildrenListEl.querySelectorAll(`li`)
console.log(`Elements: ${AllChildInsideSecondLastListEl.length}`);
console.log(``);

//Третий список

const thirdChildrenListEl = listEl[2];
const thirdTitleEl = thirdChildrenListEl.firstElementChild;
console.log(`Category: ${thirdTitleEl.textContent}`)

const AllChildInsideThirdLastListEl = thirdChildrenListEl.querySelectorAll(`li`)
console.log(`Elements: ${AllChildInsideThirdLastListEl.length}`);
