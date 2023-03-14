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

tel.addEventListener('input', () =>{
  if(tel.validity.patternMismatch) {
    telError.textContent = 'Please enter 10 number';
  } else {
    telError.textContent = '';
  }
})

password.addEventListener('input', (e) => {

  if (password.validity.patternMismatch){

    const currentValue = password.value;
    const regExpCap = /[A-Z]/g;
    const regExpDig = /[0-9]/g;
    let result = '';

    if(regExpCap.test(currentValue)) {
      result += ''
    } else {
      result += 'Missing a capital letter <br>';
    }

    if(regExpDig.test(currentValue)) {
      result += ''
    } else {
      result += 'Missing a number <br>';
    }

    if(currentValue.length < 8) {
      result += `Missing ${8 - currentValue.length} chars`;
    }

    passwordError.innerHTML = result;

  } else {
    passwordError.textContent = '';
  }

});

confirmPassword.addEventListener('input', (event)  => {
  if (confirmPassword.value !== password.value) {
    confirmPasswordError.textContent = 'Passwords do not match';
  } else {
    confirmPasswordError.textContent = '';
  }
});