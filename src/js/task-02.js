const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];

let ingredientsList = document.querySelector('#ingredients');

let arr = [];
ingredients.forEach(el => {
  const titel = document.createElement('li');
  titel.textContent = el;
  titel.classList.add('item');
  arr.push(titel);
});

ingredientsList.append(...arr);
