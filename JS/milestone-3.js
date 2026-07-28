// Logic Practice
const prompt = require('prompt-sync')();


// 1. Sum of the all digits in a number.
let number = Number(prompt("Enter a number: "));
let sum = 0;
while (number > 0) {
    let digit = number % 10;
    sum += digit;
    number = Math.floor(number / 10);
}
console.log(`The sum of the digits is: ${sum}`);


// 2. Reverse a number
let Num = Number(prompt("Enter a number to reverse: "));
let reverse = 0;
while (Num > 0) {
    let digit = Num % 10;
    reverse = reverse * 10 + digit;
    Num = Math.floor(Num / 10);
}
console.log(`The reversed number is: ${reverse}`);


// Prime number check
let num = Number(prompt("Enter a number: "));
let count = 0;
if (num <= 0){
    console.log(`${num} isn't a prime number.`);
} else {
    for (let i=1; i<=num; i++){
        if (num % i == 0){
            count+=1;
        }
    }
    if (count == 2){
        console.log(`${num} is a prime number.`);
    } else {
        console.log(`${num} isn't a prime number.`);
    }
}
