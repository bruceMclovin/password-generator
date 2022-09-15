// Assignment code here
// parameters
var arrayLowcase = ["a", "b", "c", "d", "e", "f"];
var arrayUpcase = ["A", "B", "C", "D", "E", "F", "G", "H", "I"];
var arraySym = ["!", "@", "#"];
var arrayNum = ["1", "2", "3"];
var array = [];



// Get references to the #generate element
// generate password function
function generatePassword() {

    var passLength = parseInt(window.prompt("please enter your password length between 8 and 128 characters"));
    if (Number.isNaN(passLength)) {
        alert("please enter a correct input");
        return;
    }

    if (passLength < 8 || passLength > 128) {
        alert("please enter a valid input");
        return;
    }

    var passLowCase = confirm("would you like lower case letters?");
    var passUpCase = confirm("would you like upper case letters?");
    var passNum = confirm("would you like numbers?");
    var passSym = confirm("would you like symbols?");

    if (passUpCase) {
        array = array.concat(arrayUpcase);
    }
    if (passLowCase) {
        array = array.concat(arrayLowcase);
    }
    if (passNum) {
        array = array.concat(arrayNum);
    }
    if (passSym) {
        array = array.concat(arraySym);
    }
    console.log(array);

    var newPassword = "";
    for (let index = 0; index < passLength; index++) {
        var logicMath = Math.floor(Math.random() * array.length);
        newPassword = newPassword + array[logicMath];

    }
    console.log(newPassword);
    return newPassword;
}

var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);