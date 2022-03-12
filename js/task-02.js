const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const ingredientsEl = ingredients.map(ingredient => {

  const elementListEl = document.createElement(`li`);
    elementListEl.classList.add(`item`);
    elementListEl.textContent = ingredient;

  return elementListEl
})

const listEl = document.querySelector(`#ingredients`);

listEl.append(... ingredientsEl);
