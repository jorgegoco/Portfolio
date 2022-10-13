const re = /[A-Z]/;
const messageEmail = 'Email: Invalid characters. Capital letters not allowed';
const form = document.querySelector('.form');

form.addEventListener('submit', function(event) {
  event.preventDefault();
  let emailValidation = re.test(form.elements['email'].value);
  if(!emailValidation) {
    form.submit();
  } else if(form.lastElementChild.getAttribute('class') !== 'form-button') {
    form.removeChild(form.lastElementChild);
    let messageForm = document.createElement('p');
    messageForm.className = 'invalid-email';
    messageForm.style.color = 'red';
    let messageEmailText = document.createTextNode(messageEmail);
    messageForm.appendChild(messageEmailText);
    form.appendChild(messageForm);
  } else {
    let messageForm = document.createElement('p');
    messageForm.className = 'invalid-email';
    messageForm.style.color = 'red';
    let messageEmailText = document.createTextNode(messageEmail);
    messageForm.appendChild(messageEmailText);
    form.appendChild(messageForm);
  }
});