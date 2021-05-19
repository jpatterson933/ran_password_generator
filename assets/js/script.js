// grab our button from the html here using document.querySelector
var generateBtn = document.querySelector("#generate");
var newPassword = document.querySelector("#new-password");

//our variables for the generate password that will be used to create a password based off of user input
var numbers = "0123456789".split("");
//using split on these so we can use a for loop below to sift through and pick random elements from the concatted array
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
var lowerCase = "abcdefghijklmnopqrstuvwxyz".split("");
var symbols = "!@#$%^&*?=+-><(){}[]_/\~".split("");

//-----------------------//
// var passwordLength = "";
//------------------------------------------trying to figure out how to prompt the user for numbers only when they input letters for the password length
//this userChoice will hold the user choices form the prompt - each yes will concat or add the password to the 
var userChoice = [];
//using a for loop below and randomness, we will generate a passowrd string that will be displayed
var password = "";
//-----------------------//


//this function is going to check whether or not the users input is a number or a letter - NOT IMPLEMENTED YET
function typeOfNaN(x) {
  if (isNaN(x)) {
    return 'Number NaN';
  }
  if (isNaN(x)) {
    return 'NaN';
  }
}

//this is the function to generate a passwword
function generatePassword() {

  var passwordLength = (prompt("How long would you like your password to be? It can be between 8 and 128 characters!"));
  if (passwordLength < 8 || passwordLength > 128) {
        //this will appear when the user has not chosen the correct length or no length at all or entered a letter
        alert("Please choose enter a number between 8 and 128");
        var passwordLength = (prompt("How many characters would you like in your password?"));

        // inputValue(passwordLength, "this is some text to display")
        return passwordLength;
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

  //the question is, why does the passwordLength not reset back to 0?
  console.log(passwordLength, "actual password length")
  //for loop to go through concatted array and select random elements to generate a random password
  for (var i = 0; i < passwordLength; i++) {
    var randomPassword = Math.floor(Math.random() * userChoice.length)
    password += userChoice[randomPassword]
  }
  //for some reason the password length is changing - Most likely in the for loop
  console.log(password.length, "checking password length")
  console.log(password, "why does this keep concating the new password to the old password?")
  return password;
}

//i NEED TO RESET THE PASSWORD LENGTH SOMEHOW AS IT STACKS AND THE GENERATE PASSWORD WILL ONLY WORK ONCE BEFORE GIVING AN INCORRECT LENGTH


// Write password to the password input
function writePassword() {
  var password = generatePassword();
  //we set variable passwordText to equal the text area in the html with id #password
  var passwordText = document.querySelector("#password");
  //here we are setting the passwordText VALUE to the password variable that is equal to the generate password function
  passwordText.value = password;
  //Here we hide the generate button and display a new button that will refresh page and remove old random password
  generateBtn.style.display = "none";
  newPassword.style.display = "inline-block";
  
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);