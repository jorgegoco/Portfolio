const re = /[A-Z]/;
const messageEmail = 'Email: Invalid characters. Capital letters not allowed';
const form = document.querySelector('.form');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const emailValidation = re.test(form.elements.email.value);
  if (!emailValidation) {
    form.submit();
  } else if (form.lastElementChild.getAttribute('class') !== 'form-button') {
    form.removeChild(form.lastElementChild);
    const messageForm = document.createElement('p');
    messageForm.className = 'invalid-email';
    messageForm.style.color = 'red';
    const messageEmailText = document.createTextNode(messageEmail);
    messageForm.appendChild(messageEmailText);
    form.appendChild(messageForm);
  } else {
    const messageForm = document.createElement('p');
    messageForm.className = 'invalid-email';
    messageForm.style.color = 'red';
    const messageEmailText = document.createTextNode(messageEmail);
    messageForm.appendChild(messageEmailText);
    form.appendChild(messageForm);
  }
});