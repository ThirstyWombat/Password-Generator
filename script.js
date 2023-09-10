// Assignment code here
/*
prompt to ask the user the length of the password (8 to 128), loop characters until it reaches the specified number. math.random pulls from array of the confirms
save that, in variable most likely, with each of the confirm values being keys in a variable?
confirm for all the other promps, upercase and/or lower, special characters, numbers. 
take all that criteria and generate a password
*/

// parseFloat and parseInteger
function generatePassword() {
  var charLength = prompt(
    "How many characters would you like your password to contain?"
  );
  console.log(charLength);
  var charLengthN = Number(charLength);

  if (isNaN(charLengthN)) {
    alert("Please choose a valid number.");
    return "Try again!";
  }
  if (charLengthN < 8 || charLengthN > 128) {
    alert("Please choose a character amount between 8 and 128.");
    return "Try again!";
  }
  for (var i = 0; i < charLength; i++) {
    console.log(charLength);
  }
  var specChar = confirm(
    "Click OK to confirm including special characters in your password."
  );
  console.log(specChar);
  var smallCase = confirm(
    "Click OK to confirm including lowercase characters in your password."
  );
  console.log(smallCase);
  var bigCase = confirm(
    "Click OK to confirm including uppercase characters in your password."
  );
  console.log(bigCase);
  var numChar = confirm(
    "Click OK to confirm including numeric characters in your password."
  );
  console.log(numChar);
}

// } else {
//   return charLength;
// }
// if (!charLength) {
//   alert("Have a nice day!");
//   return;
// }

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
