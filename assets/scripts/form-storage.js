document.addEventListener('load', () => {
  const storedData = JSON.parse(localStorage.getItem('formData'));
  document.querySelector('.form-name').value = storedData.name;
  document.querySelector('.form-email').value = storedData.email;
  document.querySelector('.form-textarea').value = storedData.text;
});

const submitForm = document.querySelector('.form');
submitForm.addEventListener('submit', () => {
  const formName = document.querySelector('.form-name').value;
  const formEmail = document.querySelector('.form-email').value;
  const formText = document.querySelector('.form-textarea').value;

  const data = {
    name: formName,
    email: formEmail,
    text: formText,
  };

  localStorage.setItem('formData', JSON.stringify(data));
});