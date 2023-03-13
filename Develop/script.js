// Assignment Code
const generateBtn = document.querySelector("#generate");
const psswrdTxtArea = document.getElementById("password");
const lCaseOpt = "abcdefghijklmnopqrstuvwxyz";
const uCaseOpt = lCaseOpt.toUpperCase();
const spclChars = "#@%*$+"
const numChoices = "0123456789"
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

    // Confirm a number between 8 and 128 is entered
  }

  var lCaseChoose = confirm("Do want to use lowercase letters?");
  var uCaseChoose = confirm("Do you want to use uppercase letters?");
  var numChoose = confirm("Do you want numbers?");
  var spclCharsChoose = confirm("Do you want special characters?");

  //prompts users to choose whether there password will include uppercase letters, lowercase letters, numbers and special characters

  while (!lCaseChoose && !uCaseChoose && !numChoose && !spclCharsChoose) {

    alert("You must include at minimum one charecter type!!!");
    var lCaseChoose = confirm("Do want to use lowercase letters?");
    var uCaseChoose = confirm("Do you want to use uppercase letters?");
    var numChoose = confirm("Do you want numbers?");
    var spclCharsChoose = confirm("Do you want special charecters?");
    //enforces requirement at least one charecter before moving on to the password detail prompts

  }

  var charSet = "";

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
  //add users password charectrer choices to var charecterset
  // Generate password
  for (let i = 0; i < psswrdLength; i++) {
    password += charSet.charAt(Math.floor(Math.random() * charSet.length));
  }
  // loops through charSet variable to create random values based on the users choices for each iteration
  return password;


}