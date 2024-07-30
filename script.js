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