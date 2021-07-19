// Assignment Code
var generateBtn = document.querySelector("#generate");

const lowercaseLetters = "abcdefghijklmnopqrstuvwxyz".split("");
const uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
const numbers = "0123456789".split("");
const specialChars = "!?@#$%^&*()_-+=~/".split("");



function passwordLength() {
   var getPasswordLength = prompt("Choose a password length (min:8 characters. max:128 characters)");
}

function useLowercase() {
   var useLowercaseLetters = confirm("Do you want to use lowercase letters? Type Y or N");
}

function useUppercase() {
   var useUppercaseLetters = confirm("Do you want to use uppercase letters? Type Y or N");
}

function useNumbers() {
   var useNumbersInput = confim("Do you want to use special characters? Type Y or N");
}

function useSpecialChars() {
    var useSpecialCharacters = confirm("Do you want to use special characters? Type Y or N");
}
// function generatePassword will return as the variable 'password' which will then write the password in the text box
function generatePassword() {
    let allRequestedCharacters = [];
  // if useLowercaseLetters then
  if (useLowercase === true)
  allRequestedCharacters.push( ...lowercaseLetters )
  // equivalent to allRequestedCharacters.push( "a", "b", etc )
  if (useUppercase === true)
  allRequestedCharacters.push( ...uppercaseLetters )
  if (useNumbers === true)
  allRequestedCharacters.push( ...numbers )
  if (useSpecialChars === true)
  allRequestedCharacters.push( ...specialChars )

  const randomCharIndex = Math.floor( Math.random() * allRequestedCharacters.length );
  console.log( "all requested characters", "/n", allRequestedCharacters, "/n", allRequestedCharacters[ randomCharIndex ], randomCharIndex );
}
//Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

//Add event listener to generate button
generateBtn.addEventListener("click", writePassword);