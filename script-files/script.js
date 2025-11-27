// LOGGER FUNCTION

function log(x) {
  console.log(x);
}

// SELECTORS

const password = document.body.querySelector("#PASSWORD");

const confirmPassword = document.body.querySelector("#CONFIRM-PASSWORD");

// REGEX

const passwordCheckSmallLetters = /(?:[a-z]+)/;
const passwordCheckCapitalLetters = /(?:[A-Z]+)/;
const passwordCheckSymbols = /(?:\W)+/;
const passwordCheckNumbers = /\d+/;
const passwordCheckCharNumber = /.{8,15}/;

// FUNCTION TO CHECK VALIDITY

password.addEventListener("change", () => {
  passwordValue = password.value;
  if (
    !passwordCheckCapitalLetters.test(passwordValue) ||
    !passwordCheckSmallLetters.test(passwordValue) ||
    !passwordCheckSymbols.test(passwordValue) ||
    !passwordCheckNumbers.test(passwordValue) ||
    !passwordCheckCharNumber.test(passwordValue)
  ) {
    password.setCustomValidity(
      "Please make sure your password is between 8 - 15 characters and contains at least one capital letter, a number and a special character (!, @, #, $, %)."
    );
    password.reportValidity();
  }
});

// FUNCTION TO CONFIRM PASSWORDS

confirmPassword.addEventListener("change", () => {
  passwordValue = password.value;
  confirmedValue = confirmPassword.value;
  if (passwordValue !== confirmedValue) {
    confirmPassword.setCustomValidity("Passwords do not match!");
    confirmPassword.reportValidity();
  } else {
    confirmPassword.setCustomValidity("");
  }
});
