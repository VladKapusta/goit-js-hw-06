const inputRef = document.querySelector('#name-input');
const spanRef = document.querySelector('#name-output');

inputRef.addEventListener('input', event => {
  spanRef.textContent = event.currentTarget.value;
  if (spanRef.textContent === '') {
    spanRef.textContent = 'Anonymous';
  }
});

// const inputRef = document.querySelector('#name-input')
// const spanRef = document.querySelector('#name-output')

// inputRef.addEventListener('input', ()=> {
//     spanRef.textContent = inputRef.value
//     if(spanRef.textContent === "") {
//         spanRef.textContent = 'Anonymous'
//     }
// })
