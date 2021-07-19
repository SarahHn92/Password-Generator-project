// Assignment Code
var generateBtn = document.querySelector("#generate");

const lowercaseLetters = "abcdefghijklmnopqrstuvwxyz".split("");
const uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
const numbers = "0123456789".split("");
const specialChars = "!?@#$%^&*()_-+=~/".split("");
var length = 0;
// Empty array to take all choices
let allRequestedCharacters = [];


function prompting() {
    length = parseInt(prompt('Please specify the password length. (Choose a number between 8 and 28)'));
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
    var result = [];
    // while loop to loop through array while index is less than password length
    for (var i = 0; i < length; i++) {
        let randomChars = allRequestedCharacters[Math.floor( Math.random() * allRequestedCharacters.length )];
        result.push(randomChars);
        console.log(result);
    }
    return result.join('');
} 



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);