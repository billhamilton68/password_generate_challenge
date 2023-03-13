  // Assignment Code
  // Assignment Code
var generateBtn = document.querySelector("#generate");
var psswrdTxtarea = document.getElementById('password');
var lCaseOpt = 'abcdefghijklmnopqrstuvwxyz';
var uCaseOpt = lCaseOpt.toUpperCase;
var spclChars = "#@%*$+"
var numChoices = "0123456789"
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

  var password = "";


  var psswrdLength = parseInt(prompt("Enter your password length, between 8 and 128 charecters"));

  while (isNaN(psswrdLength) || psswrdLength < 8 || psswrdLength > 128) {

    psswrdLength = parseInt(prompt("Your password is invalid, it must be between 8 and 128 chrecters!!!"));
  }

  var lCaseChoose = confirm("Do want to use lowercase letters?");
  var uCaseChoose = confirm("Do you want to use uppercase letters?");
  var numChoose = confirm("Do you want numbers?");
  var spclCharsChoose = confirm("Do you want special charecters?");

  

  while (!lCaseChoose && !uCaseChoose && !numChoose && !spclCharsChoose) {
    
    alert("You must include at minimum one charecter type!!!");
   var lCaseChoose = confirm("Do want to use lowercase letters?");
   var uCaseChoose = confirm("Do you want to use uppercase letters?");
   var numChoose = confirm("Do you want numbers?");
   var spclCharsChoose = confirm("Do you want special charecters?");

 
  }

var charSet = '';
  
  if (lCaseChoose) {
    charSet += lCaseOpt;
  }
  if (uCaseChoose) {
    charSet += uCaseOpt;
  }
  if (numChoose) {
    charSet += numChoices;
  }
  if (spclCharsChoose) {
    charSet += spclChars;
  }

  // Generate password
  for (let i = 0; i < psswrdLength; i++) {
    password += charSet.charAt(Math.floor(Math.random() * charSet.length));
  }

  // Update password textarea with generated password
  psswrdTxtarea.value = password;
}