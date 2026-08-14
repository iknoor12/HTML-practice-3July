let username = document.querySelector('#username');
let password = document.querySelector('#password');
let loginbtn = document.querySelector('#loginbtn');
let message = document.querySelector('#message');

loginbtn.addEventListener("click", function () {
    let enteredUser = username.value;
    let enteredPass = password.value;

    if (enteredUser == ""){
        message.textContent = "Username is required.";
        return;
    }

    if (enteredPass == ""){
        message.textContent = "Password is required.";
        return;
    }

    if (enteredUser === "admin" && enteredPass === "12345") {
        message.textContent = "Login successful";
    } else {
        message.textContent = "Invalid username or password";
    }
})