const formRef = document.querySelector('.login-form');

formRef.addEventListener('submit', submitForm);

function submitForm (elt) {
  elt.preventDefault();
  const {
    elements: { password, email },
  } = elt.currentTarget;
  if (password.value === '' || email.value === '') {
    alert('Усі поля повинні бути заповнені');
  }
  const subForm = {
    email: email.value,
    password: password.value,
  };

  console.log(subForm);
  elt.currentTarget.reset();
}