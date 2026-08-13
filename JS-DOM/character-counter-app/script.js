let message = document.querySelector("#message");
let count = document.querySelector('#count');

message.addEventListener("input", function() {
    let text = message.value;
    let characterCount = text.length;
    
    count.textContent = characterCount;
})