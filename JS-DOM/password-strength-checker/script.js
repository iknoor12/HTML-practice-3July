const password = document.querySelector("#password");
const result = document.querySelector("#result");

password.addEventListener("input", function() {
    let value = password.value;

    if (value.length === 0) {
        result.textContent = "";
        return;
    }

    if (value.length < 6) {
        result.textContent = "Weak Password";
    } 
    else if (value.length < 10) {
        result.textContent = "Medium Password";
    } 
    else {
        result.textContent = "Strong Password";
    }
})