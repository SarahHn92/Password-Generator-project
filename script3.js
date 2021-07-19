// Assignment Code
var generateBtn = document.querySelector("#generate");

const lowercaseLetters = "abcdefghijklmnopqrstuvwxyz".split("");
const uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
const numbers = "0123456789".split("");
const specialChars = "!?@#$%^&*()_-+=~/".split("");
// Empty array to take all choices
let allRequestedCharacters = [];

function generatePassword() {
    length = parseInt(prompt('Please specify the password length./n(Choose a number between 8 and 28)'));
    if (length <8 || length >128) {
        alert('Please specify a length between 8 and 128 characters.')
        return;
    }
    console.log(length);

    lcLetters = confirm('Include lowercase letters?'); 
    if (lcLetters) {
        allRequestedCharacters.push(...lowercaseLetters)
    }

    ucLetters = confirm('Include uppercase letters?');
    if (ucLetters) {
        allRequestedCharacters.push(...uppercaseLetters)
    }

    otherChars = confirm('Include special characters?');
    if (otherChars) {
        allRequestedCharacters.push(...specialChars)
    }
    console.log(allRequestedCharacters);
} 

generatePassword();


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);