const inputControlRef = document.querySelector('#font-size-control');
const spanRef = document.querySelector('#text');

inputControlRef.addEventListener('click', evt => {
  spanRef.style.fontSize = evt.currentTarget.value + 'px';
});
