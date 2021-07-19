// Assignment Code
var generateBtn = document.querySelector("#generate");

const lowercaseLetters = "abcdefghijklmnopqrstuvwxyz".split("");
const uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
const numbers = "0123456789".split("");
const specialChars = "!?@#$%^&*()_-+=~/".split("");
// Empty array to take all choices
let allRequestedCharacters = [];


function prompting() {
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

    numerals = confirm('Include numbers?');
    if (numerals) {
        allRequestedCharacters.push(...numbers)
    }

    otherChars = confirm('Include special characters?');
    if (otherChars) {
        allRequestedCharacters.push(...specialChars)
    }
    console.log(allRequestedCharacters);

    if (!lcLetters && !ucLetters && !numerals && !otherChars) {
        alert('You must choose at least one type of character.')
        return;
    }
}

function generatePassword() {
    // call prompting() to get user choices 
    prompting();
    // getting a random number between 1 and the length of user choice array
    const randomCharIndex = Math.floor( Math.random() * allRequestedCharacters.length );
  
    console.log(randomCharIndex);
    // 
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