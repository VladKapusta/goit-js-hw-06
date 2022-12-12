const bodyRef = document.querySelector('body');
const buttonRef = document.querySelector('.change-color');
const spanRef = bodyRef.querySelector('.color');

buttonRef.addEventListener('click', creatingBeacgroundColor);

function creatingBeacgroundColor() {
  let createdHexColor = getRandomHexColor();

  bodyRef.style.backgroundColor = createdHexColor;
  spanRef.textContent = createdHexColor;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
