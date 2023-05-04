var generateBtn = document.querySelector("#generate");

// Define arrays
var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var uppercaseLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var lowercaseLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var symbolsCharacters = ['!', '#', '$', '.', '&', '*', '%', '(', ')', '@', '_', '~'];


// Get random index from array
function getRandom(arr) {
  return Math.floor(Math.random() * arr.length);
}


// Generate Password
function generatePassword() {
  // Prompts
  var passLength = parseInt(prompt("How many characters would you like your password to contain? (Value must be between 8 and 128)"));
  // Password Criteria
  if (passLength < 8 || passLength > 128) {
    alert("Password must be between 8 and 128 characters in length!!!")
    return null;
  }
  var hasUppercase = confirm("Would you like to have uppercase letters in your password?")
  var hasLowercase = confirm("Would you like to have lowercase letters in your password?")
  var hasNumbers = confirm("Would you like to have numbers in your password?")
  var hasSymbols = confirm("Would you like to have symbols in your password?")

  // - at least one character type selected


  // Contains random characters
  var pool = []
  var password = [];

  // Push random characters to pool
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

  // Push random characters from pool to password
  for (let i = 0; i < passLength; i++) {
    var randomIndex = getRandom(pool);
    var randomChar = pool[randomIndex];
    password.push(randomChar)
  }

  // Convert password to string
  return password.join("");
}

// Write password function
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}


// Add event listener to generate button and will call writePassword function
generateBtn.addEventListener("click", writePassword);