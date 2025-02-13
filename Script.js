var loginForm = document.getElementById("login");
var signupForm = document.getElementById("signup");
var btn = document.getElementById("btn");

function showSignup() {
    loginForm.style.left = "-450px";
    signupForm.style.left = "0px";
    btn.style.left = "50%";
}

function showLogin() {
    loginForm.style.left = "0px";
    signupForm.style.left = "450px";
    btn.style.left = "0%";
}