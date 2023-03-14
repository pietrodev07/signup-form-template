const firstName = document.querySelector('#first-name');
const lastName = document.querySelector('#last-name');
const email = document.querySelector('#email');
const tel = document.querySelector('#tel');
const password = document.querySelector('#password');
const confirmPassword = document.querySelector('#confirm-password');

const firstNameError = document.querySelector('#first-name-error');
const lastNameError = document.querySelector('#last-name-error');
const emailError = document.querySelector('#email-error');
const telError = document.querySelector('#tel-error');
const passwordError = document.querySelector('#password-error');
const confirmPasswordError = document.querySelector('#confirm-password-error');

firstName.addEventListener('input', (e) =>{
  if(firstName.value === '') {
    firstNameError.textContent = 'Please type your first name';
  } else {
    firstNameError.textContent = '';
  }
})

lastName.addEventListener('input', () =>{
  if(lastName.value === '') {
    lastNameError.textContent = 'Please type your last name';
  } else {
    lastNameError.textContent = '';
  }
})

email.addEventListener('input', () =>{
  if (email.validity.typeMismatch) {
    emailError.innerHTML = 'Please enter a valid email. <br> ex(example@email.com)';
  } else {
    emailError.textContent = '';
  }
})