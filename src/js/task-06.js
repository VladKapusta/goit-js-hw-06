const inputRef = document.querySelector('#validation-input');

const inputDataLength = Number(inputRef.getAttribute('data-length'));
inputRef.addEventListener('blur', () => {
  const quantitySymbolsInInput = inputRef.value.length;

  inputRef.classList.add('invalid');
  inputRef.classList.remove('valid');

  if (quantitySymbolsInInput === inputDataLength) {
    inputRef.classList.add('valid');
    inputRef.classList.remove('invalid');
  }
});
