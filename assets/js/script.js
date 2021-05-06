// Assignment Code
var generateBtn = document.querySelector("#generate");

//our variables for the generate password that will be used to create a password based off of user input
var numbers = "0123456789".split("");
//using split on these so we can use a for loop below to sift through and pick random elements from the concatted array
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
var lowerCase = "abcdefghijklmnopqrstuvwxyz".split("");
var symbols = "!@#$%^&*?=+-><(){}[]_/\~".split("");
var passwordLength = "";
//------------------------------------------trying to figure out how to prompt the user for numbers only when they input letters for the password length
var alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
console.log(lowerCase)
console.log(alphabet)

//this userChoice will hold the user choices form the prompt - each yes will concat or add the password to the 
var userChoice = [];
//using a for loop below and randomness, we will generate a passowrd string that will be displayed
var password = "";

//this is the function to generate a passwword
function generatePassword() {

  var passwordLength = (prompt("How long would you like your password to be? It can be between 8 and 128 characters!"));
  while (passwordLength < 8 || passwordLength > 128) {
    //this will appear when the user has not chosen the correct length or no length at all or entered a letter
    alert("Please choose enter a number between 8 and 128");
    var passwordLength = (prompt("How many characters would you like in your password?"));
  }

  //alerts the user how long their password will be
  alert("Your password will be " + passwordLength + " characters long");

  //prompt to include numbers
  var numbersLength = (confirm("Include numbers?"));
  if (numbersLength === true) {
    userChoice = userChoice.concat(numbers)
  }
  //prompt to include uppercase letters
  var upperCaseLength = (confirm("Include UPPERCASE letters?"));
  if (upperCaseLength === true) {
    userChoice = userChoice.concat(upperCase)
  }
  //prompt to include lowercase letters
  var lowerCaseLength = (confirm("Include lowercase letters?"));
  if (lowerCaseLength === true) {
    userChoice = userChoice.concat(lowerCase)
  }
  //prompt to include symbols
  var symbolsLength = (confirm("Include symbols?"));
  if (symbolsLength === true) {
    userChoice = userChoice.concat(symbols)
  }

  //for loop to go through concatted array and select random elemetns to generate a random password
  for (var i = 0; i < passwordLength; i++) {
    var randomPassword = Math.floor(Math.random() * userChoice.length)
    password += userChoice[randomPassword]
  }
  return password
}





// Write password to the password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);