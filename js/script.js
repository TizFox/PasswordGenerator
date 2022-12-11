var letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
               'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
var symbols = ['!', '#', '$', '%', '&', '(', ')', '*', '+']

function generatePassword() {
    var nLetters = 0, nNumbers = 0, nSymbols = 0, nPassword = 0;
    var password = [];

    // Adding values
    if (lettersCheckbox.checked) {
        nLetters = lettersNumber.value;

        if (nLetters > 12) {
            nLetters = 12;
        } else if (nLetters < 0) {
            nLetters = 0;
        }
        
        for (var i = 0; i < nLetters; i++) {
            password.push(letters[Math.floor(Math.random() * letters.length)]);
        }
    }

    if (numbersCheckbox.checked) {
        nNumbers = numbersNumber.value;
        
        if (nNumbers > 12) {
            nNumbers = 12;
        } else if (nNumbers < 0) {
            nNumbers = 0;
        }

        for (var i = 0; i < nNumbers; i++) {
            password.push(numbers[Math.floor(Math.random() * numbers.length)]);
        }
    }

    if (symbolsCheckbox.checked) {
        nSymbols = symbolsNumber.value

        if (nSymbols > 8) {
            nSymbols = 8;
        } else if (nSymbols < 0) {
            nSymbols = 0;
        }

        for (var i = 0; i < nSymbols; i++) {
            password.push(symbols[Math.floor(Math.random() * symbols.length)]);
        }
    }

    // Shuffling Password
    nPassword = nLetters + nNumbers + nSymbols;
    for (var i = nPassword - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * nPassword);
        var temp = password[i];
        password[i] = password[j];
        password[j] = temp;
    }
    password = password.join("");

    // Setting Password
    document.getElementById("password").innerHTML = password;
}