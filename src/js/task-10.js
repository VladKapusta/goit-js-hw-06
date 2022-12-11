const inputRef = document.querySelector('input');
const btnCreate = document.querySelector('[data-create]');
const btnDestroy = document.querySelector('[data-destroy]');
const boxsesRef = document.querySelector('#boxes');

btnCreate.addEventListener('click', addsBoxes);

function addsBoxes() {
  let arrDiv = [];
  function createBox(amount) {
    for (let i = 0; i < amount; i += 1) {
      arrDiv.push(`<div style = "background:${getRandomHexColor()};
    width: ${30 + i * 10}px; height:${30 + i * 10}px"></div>`);
    }
  }

  createBox(inputRef.value);
  boxsesRef.innerHTML = arrDiv.join(' ');
  inputRef.value = '';
}

btnDestroy.addEventListener('click', destroyBoxes);

function destroyBoxes() {
  boxsesRef.innerHTML = '';
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
