function generatePassword() {
  var confirmCharacterlength = prompt(
    "How many characters would you like your password to contain?"
  );
  if (!confirmCharacterlength) {
    alert("Have a nice day!");
    return "Click below to begin generating your password!";
  }

  var characterLength = Number(confirmCharacterlength);

  if (isNaN(characterLength)) {
    alert("Please choose a valid number.");
    return "Try again!";
  }
  if (characterLength < 8 || characterLength > 128) {
    alert("Please choose a character amount between 8 and 128.");
    return "Try again!";
  }

  var confirmSpecial = confirm(
    "Click OK to confirm including special characters in your password."
  );

  var confirmLowercase = confirm(
    "Click OK to confirm including lowercase characters in your password."
  );

  var confirmUppercase = confirm(
    "Click OK to confirm including uppercase characters in your password."
  );

  var confirmNumeric = confirm(
    "Click OK to confirm including numeric characters in your password."
  );

  if (
    !confirmSpecial &&
    !confirmLowercase &&
    !confirmUppercase &&
    !confirmNumeric
  ) {
    alert("Please choose at least one type of character.");
    return "Try again!";
  }

  var password = "";
  var uppercaseCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  var lowercaseCharacters = "abcdefghijklmnopqrstuvwxyz".split("");
  var specialCharacters = "!@#$%^&*()_+-=".split("");
  var numericCharacters = "0123456789".split("");
  const options = [];
  if (confirmSpecial) {
    options.push(specialCharacters);
  }
  if (confirmLowercase) {
    options.push(lowercaseCharacters);
  }
  if (confirmUppercase) {
    options.push(uppercaseCharacters);
  }
  if (confirmNumeric) {
    options.push(numericCharacters);
  }
  for (let index = 0; index < characterLength; index++) {
    var optionsIndex = Math.floor(Math.random() * options.length);
    console.log("random option: ", optionsIndex);
    var characterIndex = Math.floor(
      Math.random() * options[optionsIndex].length
    );

    password = password.concat(options[optionsIndex][characterIndex]);
  }

  return password;
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
