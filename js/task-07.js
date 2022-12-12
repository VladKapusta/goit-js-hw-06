const inputControlRef = document.querySelector('#font-size-control');
const spanRef = document.querySelector('#text');

inputControlRef.addEventListener('input', evt => {
  spanRef.style.fontSize = evt.currentTarget.value + 'px';
});
