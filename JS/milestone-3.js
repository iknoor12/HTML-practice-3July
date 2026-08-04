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


// 3. Prime number check
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


// 4. Multiplication Table
let number1 = Number(prompt("Enter a number to print its multiplication table: "));
console.log(`Multiplication Table of ${number1}:`);
for (let i = 1; i <= 10; i++) {
    console.log(`${number1} x ${i} = ${number1 * i}`);
}


// 5. GCD (Greatest Common Divisor)
let num1 = Number(prompt("Enter first number:"));
let num2 = Number(prompt("Enter second number:"));

let gcd = 1;

let smaller = num1 < num2 ? num1 : num2;

for (let i = 1; i <= smaller; i++) {
    if (num1 % i === 0 && num2 % i === 0) {
        gcd = i;
    }
}

console.log("GCD =", gcd);


// 6. LCM (Least Common Multiple)
let num3 = Number(prompt("Enter first number:"));
let num4 = Number(prompt("Enter second number:"));

let lcm = num3 > num4 ? num3 : num4;

while (true) {
    if (lcm % num3 === 0 && lcm % num4 === 0) {
        break;
    }
    lcm++;
}

console.log("LCM =", lcm);


// 7. Factorial
let Number2 = Number(prompt("Enter a number:"));

let factorial = 1;

for (let i = 1; i <= Number2; i++) {
    factorial = factorial * i;
}

console.log("Factorial =", factorial);


// 8. Fibonacci
let n = Number(prompt("Enter how many terms:"));

let a = 0;
let b = 1;

for (let i = 1; i <= n; i++) {

    console.log(a);

    let next = a + b;

    a = b;
    b = next;
}


// Console Project

// 1. Basic Expense Tracker
let expenses = [];

let n = Number(prompt("How many expenses do you want to add?"));

for (let i = 0; i < n; i++) {

    let name = prompt("Enter expense name:");
    let amount = Number(prompt("Enter expense amount:"));

    let expense = {
        name: name,
        amount: amount
    };

    expenses.push(expense);
}

let total = 0;

for (let i = 0; i < expenses.length; i++) {
    total = total + expenses[i].amount;
}

console.log("Expenses:", expenses);
console.log("Total Expense:", total);