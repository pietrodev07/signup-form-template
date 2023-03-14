# SIGNUP FORM TEMPLATE

**_SignUp form template_** is a template for build a signup form quickly

The project is structured in the following method:

- **index.html** (defines the structure of the page)

- **style.css** (defines the style of the page)

- **main.js** (defines the validation of the inputs)

In **index.html** there is a form with 6 inputs:

1. **first name**
2. **last name**
3. **email**
4. **phone number**
5. **password**
6. **confirm password**

```html 
<input type="text" id="first-name" required >

<input type="text" id="last-name" required>

<input type="email" id="email" required autocomplete="off">

<input type="tel" id="phone-number" required pattern='[0-9]{10}'>

<input type="text" id="password" required pattern='(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}'>

<input type="text" id="confirm-password" required pattern='(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}'>
```
