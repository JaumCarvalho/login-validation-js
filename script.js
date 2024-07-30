// get elements
const loginButton = document.getElementById('login-btn');
const backButton = document.getElementById('back-btn');
const usernameInput = document.getElementById('your-email');
const passwordInput = document.getElementById('your-password');
const loginContainer = document.querySelector('.container');
const welcomeScreen = document.querySelector('.welcome-screen');
const errorMessage = document.getElementById('error-message');

// define email and password values
const myEmail = "email@email.com";
const myPassword = "12345";

// styling error message and welcome screen to not appears in main content
errorMessage.style.display = "none";
welcomeScreen.style.display = "none";

// clear inputs when invalid credentials is true and when go back to login button is clicked
function clearInputs(){
  usernameInput.value = "";
  passwordInput.value = "";
}

// validate email and password to show error message or welcome screen
loginButton.addEventListener('click', function () {
  if (usernameInput.value === myEmail && passwordInput.value === myPassword) {
    loginContainer.style.display = "none";
    welcomeScreen.style.display = "flex";
  } else{
    errorMessage.style.display = "block";
    clearInputs();
  }
});

// go back button to login form
backButton.addEventListener('click', function () {
  loginContainer.style.display = "flex";
  welcomeScreen.style.display = "none";
  clearInputs();
  errorMessage.style.display = "none";
});