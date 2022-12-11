const valueRef = document.querySelector('#value');
let counterValue = 0;

const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');

const onDecrementButton = () => {
  valueRef.textContent = counterValue -= 1;
};
const onIncrementButton = () => {
  valueRef.textContent = counterValue += 1;
};

decrementBtn.addEventListener('click', onDecrementButton);
incrementBtn.addEventListener('click', onIncrementButton);
