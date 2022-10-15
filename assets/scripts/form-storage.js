document.addEventListener('load', (event) => {
  let storedData = JSON.parse(localStorage.getItem('formData'));
  document.querySelector('.form-name').value = storedData.name;
  document.querySelector('.form-email').value = storedData['email'];
  document.querySelector('.form-textarea').value = storedData['text'];
});

let submitForm = document.querySelector('.form');
submitForm.addEventListener('submit', function() {
  let formName = document.querySelector('.form-name').value;
  let formEmail = document.querySelector('.form-email').value;
  let formText = document.querySelector('.form-textarea').value;

  let data = {
    name: formName,
    email: formEmail,
    text: formText
  }

  localStorage.setItem('formData', JSON.stringify(data));
});