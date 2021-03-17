// Assignment Code
var generateBtn = document.querySelector("#generate");

// consts = alphabet & numbers 
const lowercaseLetters = "abcdefghijklmnopqrstuvwxyz".split("");
const uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
const numbers = "0123456789".split("");
const specialChars = "!?@#$%^&*()_-+=~/".split("");



function generatePassword() {
  var passwordLength = 0;
  var useLowercaseLetters = false;
  var useUppercaseLetters = false;
  var useNumbers = false;
  var useSpecialChars = false;
  var cancelPressed = false; // Create a cancel check

  //add prompts
  passwordLength = getPasswordLength();
  if (passwordLength === null) {
    cancelPressed = true;
  }

  useLowercaseLetters = getLowercaseInput();
  if (useLowercaseLetters === false)
  //incomplete
function getLowercaseInput() {
  var lowercaseInput = prompt("Do you want to use lowercase letters? (Type 'y' or 'n')");
  var cancelPressed = useLowercase === null;
  console.log(getLowercaseInput);
  var y = true;
  var n =false;

  if (!cancelPressed) {
    //check if user typed y or n
    // 
    var isLowercaseSelected = lowercaseInput === y || n;
    console.log(lowercaseInput);
    
  }

  // function getPasswordLength() {
  //   var passwordLength = prompt("Choose password length (between 8-128 characters):");
  //   var cancelPressed = passwordLength === null;
  //   console.log(passwordLength);
  
  //   if (!cancelPressed) {
  //     var parsedPasswordLength = parseInt(passwordLength);
  //     var isPasswordLengthValid = parsedPasswordLength >= 8 && parsedPasswordLength <= 128;
  //     while (isPasswordLengthValid === false && !cancelPressed) {
  //       passwordLength = prompt("That is not a valid input. Number must be between 8 and 128. Choose password length (between 8-128 characters):");
  //       cancelPressed = passwordLength === null;
  //       parsedPasswordLength = parseInt(passwordLength);
  //       isPasswordLengthValid = parsedPasswordLength >= 8 && parsedPasswordLength <= 128;
  //     }
  //   }
    
  //   return passwordLength
  // }
  
  // return useLowercase
// }

  //prompt for lowercase

  //if (!cancelPressed) {
   // const useLowercase = getLowercaseInput()
   // if (useLowercase === null) {
    //  cancelPressed = true;
   // }
  //} 
  //return useLowercase boolean

  //prompt for uppercase 
  // if (!cancelPressed) {
  //   useUppercase = getUppercaseInput()
  //   if (useUppercase === null) {
  //     cancelPressed = true;
  //   }
  // } //return useUppercase boolean

  //  // prompt for numbers if cancel hasn't been pressed
  //  if (!cancelPressed) {
  //   useNumbers = prompt ("Do you want to use numbers? (Type 'y' or 'n')");
  //   if (useNumbers === null) {
  //     cancelPressed = true;
  //   }
  // } //return use numbers boolean
 
  
  // //prompt for special characters
  // if (!cancelPressed) {
  //   useSpecialChars = prompt ("Do you want to use special characters? (Type 'y' or 'n')");
  //   if (useSpecialChars === null) {
  //     cancelPressed = true;
  //   }
  // } //return use special characters boolean
  
  
//math.random to randomly generate password
  const allRequestedCharacters = []
  // if useLowercaseLetters then
  if useLowercaseLetters
  allRequestedCharacters.push( ...lowercaseLetters )
  // equivalent to allRequestedCharacters.push( "a", "b", etc )
  // if useUppercaseLetters then
  allRequestedCharacters.push( ...uppercaseLetters )
  // etc.
  allRequestedCharacters.push( ...numbers )
  allRequestedCharacters.push( ...specialChars )

  const randomCharIndex = Math.floor( Math.random() * allRequestedCharacters.length );
  console.log( "all requested characters", "/n", allRequestedCharacters, "/n", allRequestedCharacters[ randomCharIndex ], randomCharIndex );

  // when using for loop to add "passwordLength" number of characters to the password string, if password = "abc" then password + "d" = "abcd". Don't forget to return password!
  //for (i = passwordLength; i < getPasswordLength; 1++);{

  //}



function getPasswordLength() {
  var passwordLength = prompt("Choose password length (between 8-128 characters):");
  var cancelPressed = passwordLength === null;
  console.log(passwordLength);

  if (!cancelPressed) {
    var parsedPasswordLength = parseInt(passwordLength);
    var isPasswordLengthValid = parsedPasswordLength >= 8 && parsedPasswordLength <= 128;
    while (isPasswordLengthValid === false && !cancelPressed) {
      passwordLength = prompt("That is not a valid input. Number must be between 8 and 128. Choose password length (between 8-128 characters):");
      cancelPressed = passwordLength === null;
      parsedPasswordLength = parseInt(passwordLength);
      isPasswordLengthValid = parsedPasswordLength >= 8 && parsedPasswordLength <= 128;
    }
  }
  
  return passwordLength
}






//        
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
