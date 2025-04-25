# PasswordValidator
April- Fall mid-T exam Password-Validator Function
## Js file
### HTML file 

## Description
Your job is to write a simple password validation function, as seen on many websites.
The rules for a valid password are as follows:
There needs to be at least 1 uppercase letter.
There needs to be at least 1 lowercase letter.
There needs to be at least 1 number.
The password needs to be at least 8 characters long.
Your function takes a string argument and returns whether it is a valid password, as a boolean.

Examples:
"Abcd1234" ===> true 
"Abcd123" ===> false 
"abcd1234" ===> false 
"AbcdefGhijKlmnopQRsTuvwxyZ1234567890" ===> true 
"ABCD1234" ===> false 
"Ab1!@#$%^&*()-_+={}[]|\:;?/>.<," ===> true
"!@#$%^&*()-_+={}[]|\:;?/>.<," ===> false


Your solution must be implemented within a JavaScript function defined as follows:

function password(str) { 
                 // Your password validation logic here
}  

function image attached for function clarification

Please attach your assignment script file, ensuring it is named precisely in the format: YourFirstName_YourLastName.js

Any deviation from this naming convention (including incorrect capitalization, spacing, or the wrong file extension) will result in an automatic score of 0 for the assignment.

###Password-Validator HTML APP
# Features
The 👁️ icon toggles between "show" and "hide" using 🙈
Positioned inside the password field using a relative wrapper and absolute icon
Fully styled and responsive
Simple DOM manipulation using JavaScript

## Creating a functional password validator using HTML and JavaScript is a great way to practice form handling and DOM manipulation. Here’s a complete working example with:
An HTML form
A password input
A button to validate
JavaScript that checks for conditions like length, numbers, special characters, etc.
A display of validation results. Putting the show/hide icon inside the password field on the right is sleek and user-friendly — just like modern login forms. 
Password rules and feedback.
### Extracted Javascript Password Validation Function
## Running this code on VS Code: node "FileName".js. 
// To run this code, you can use vscode node cmd terminal (node my_script.js) or any JavaScript environment that supports ES6 syntax.
// also executable in the browser console.
function password(str) {
  const hasUpperCase = /[A-Z]/.test(str);
  const hasLowerCase = /[a-z]/.test(str);
  const hasNumber = /[0-9]/.test(str);
  const length = str.length >= 8;
 
  return hasUpperCase && hasLowerCase && hasNumber && length;
}

console.log("Test 1:", password("Abcd1234"));
console.log("Test 2:", password("Abcd123"));
console.log("Test 3:", password("abcd1234"));
console.log("Test 4:", password("ABCD1234"));
console.log("Test 5:", password("Ab1!@#$%^&*()-_+={}[]|\\:;?/>.<,"));
console.log("Test 6:", password("!@#$%^&*()-_+={}[]|\\:;?/>.<,")); 
