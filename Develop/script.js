// Assignment Code
var generateBtn = document.querySelector("#generate");
var lCaseChoice = 'abcdefghijklmnopqrstuvwxyz';
var uCaseChoice = lCaseChoice.toUpperCase;
// create and initialize variables for password random lettters charecters 

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {
var password = "hello world";

console.log(password);


}