let count = 0;
let countElement = document.querySelector("#count");

let increaseButton = document.querySelector("#increase");
let decreaseButton = document.querySelector("#decrease");
let resetButton = document.querySelector("#reset");

increaseButton.addEventListener("click", function () {
    count++;
    countElement.textContent = count;
});

decreaseButton.addEventListener("click", function () {
    count--;
    countElement.textContent = count;
});

resetButton.addEventListener("click", function () {
    count = 0;
    countElement.textContent = count;
});