// Assignment Code targets 'generate password' button, 
var generateBtn = document.querySelector("#generate");

var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var uppercaseLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var lowercaseLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var symbolsCharacters = ['!', '#', '$', '.', '&', '*', '%', '(', ')', '@', '_', '~'];

/* define array, randomize selections, define password options, */

function getRandom(arr) {
  return Math.floor(Math.random() * arr.length);
}

function generatePassword() {
  /* this is my pseudo code
  call functions within generate password
  for loop related to amount of characters typed into prompt

  
  Prompts for password criteria:
      How many characters should PW contain?  8 < 128*/
  var passLength = parseInt(prompt("How many characters would you like your password to contain? (Value must be greater than 8 and less than 128)"));
  if (passLength < 8 || passLength > 128) {
    alert("length problem")
    return null;
  }
  var hasUppercase = confirm("Would you like to have uppercase letters in your password?")
  var hasLowercase = confirm("Would you like to have lowercase letters in your password?")
  var hasNumbers = confirm("Would you like to have numbers in your password?")
  var hasSymbols = confirm("Would you like to have symbols in your password?")

  /*Click OK if you want special characters
  Click OK if you want numbers
  Click OK if you want lowercase letters
  Click OK if you want uppercase letters
  

Validate input, display error if PW does not meet criteria
- word min/max
- at least one character type selected

Generate PW

Display PW
 
*/

  var pool = []
  var password = [];

  if (hasUppercase === true) {
    for (let i = 0; i < passLength; i++) {
      var randomIndex = getRandom(uppercaseLetters);
      var randomChar = uppercaseLetters[randomIndex];
      pool.push(randomChar)
    }

  }
  if (hasLowercase === true) {
    for (let i = 0; i < passLength; i++) {
      var randomIndex = getRandom(lowercaseLetters);
      var randomChar = lowercaseLetters[randomIndex];
      pool.push(randomChar)
    }

  }
  if (hasSymbols === true) {
    for (let i = 0; i < passLength; i++) {
      var randomIndex = getRandom(symbolsCharacters);
      var randomChar = symbolsCharacters[randomIndex];
      pool.push(randomChar)
    }

  }
  if (hasNumbers === true) {
    for (let i = 0; i < passLength; i++) {
      var randomIndex = getRandom(numbers);
      var randomChar = numbers[randomIndex];
      pool.push(randomChar)
    }

  }

  for (let i = 0; i < passLength; i++) {
    var randomIndex = getRandom(pool);
    var randomChar = pool[randomIndex];
    password.push(randomChar)
  }

  return password.join("");
}

/* Write password to the #password input; call value from generatePassword function 
(need to define GeneratePassword function) and store in password variable
#password is where generated password displays on the screen*/
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  // takes value from generated password and plugs into whats displayed on the screen
  passwordText.value = password;
}



// Add event listener to generate button and will call writePassword function
generateBtn.addEventListener("click", writePassword);






/*
https://stackoverflow.com/questions/59904757/random-password-generator-javascript-not-returning-password
https://www.youtube.com/watch?v=x4HUaiazDes
// Special characters for the function created

const specialCharacters = "!@#$%^&*()";
const generateButton = document.getElementById('generateBtn')
generateButton.addEventListener('click', writePassword)


// Write password to the #password input

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Prompts that come up after you click generate password
function generatePassword() {
  var passwordLength = prompt("Please enter the number of characters you want for you new password.  It must be more than 8 but less than 128.");

  var numbers = confirm("Do you want numbers in your password?");

  var lowerCases = confirm("Do you want lowercases in your password?");

  var upperCases = confirm("Do you want uppercases in your password?");

  var special = confirm("Do you want special characters in your password?");

  // this is a minimum count for numbers, lowerCases, upperCases & specialCharacters
  var minimumCount = 0;


  // Empty minimums for numbers, lowerCases, upperCases & specialCharacters

  var minimumNumbers = "";
  var minimumLowerCases = "";
  var minimumUpperCases = "";
  var minimumSpecialCharacters = "";


  // Generator functions**
  var functionArray = {
    getNumbers: function() {
      return String.fromCharCode(Math.floor(Math.random() * 10 + 48));
    },

    getLowerCases: function() {
      return String.fromCharCode(Math.floor(Math.random() * 26 + 97));
    },

    getUpperCases: function() {
      return String.fromCharCode(Math.floor(Math.random() * 26 + 65));
    },

    getSpecialCharacters: function() {
      return specialCharacters[Math.floor(Math.random() * specialCharacters.length)]
    }

};

  // Checks to make sure user selected ok for all and uses empty minimums from above

  if (numbers === true) {
    minimumNumbers = functionArray.getNumbers();
    minimumCount++;

  }

  if (lowerCases === true) {
    minimumLowerCases = functionArray.getLowerCases();
    minimumCount++;

  }

  if (upperCases === true) {
    minimumUpperCases = functionArray.getUpperCases();
    minimumCount++;

  }

  if (special === true) {
    minimumSpecialCharacters = functionArray.getSpecialCharacters();
    minimumCount++;

  }

  // empty string variable for the for loop below
  var randomPasswordGenerated = "";

  // loop getting random characters
  for (let i = 0; i < (parseInt(passwordLength) - minimumCount); i++) {
    var randomNumberPicked = Math.floor(Math.random() * 4);

    randomPasswordGenerated += randomNumberPicked;

  }

  // to make sure characters are added to the password
  randomPasswordGenerated += minimumNumbers;
  randomPasswordGenerated += minimumLowerCases;
  randomPasswordGenerated += minimumUpperCases;
  randomPasswordGenerated += minimumSpecialCharacters;


  return randomPasswordGenerated;

}
*/