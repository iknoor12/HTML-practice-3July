// Logic Practice
const prompt = require('prompt-sync')();


// 1. Even or Odd
let num = Number(prompt("Enter the number: "));
if (num % 2 == 0){
    console.log(`This ${num} is Even.`);
} else {
    console.log(`This ${num} is Odd.`);
}


//  2. Leap year
let year = Number(prompt("Enter the year: "));
if ((year % 400 == 0) || (year % 4 == 0 && year % 100 !== 0)){
    console.log(`This ${year} is Leap year.`);
} else{
    console.log(`This ${year} is not a leap year.`);
}


// 3. Largest of three numbers
let num1 = Number(prompt("Enter the first number: "));
let num2 = Number(prompt("Enter the second number: "));
let num3 = Number(prompt("Enter the third number: "));
if (num1 > num2 && num1 > num3) {
    console.log(`The ${num1} is largest.`);
} else if (num2 > num1 && num2 > num3) {
    console.log(`This ${num2} is Largest.`);
} else {
    console.log(`This ${num3} is largest.`);
}


// 4. Electricity bill
let unit = Number(prompt("Enter your units: "));
let bill;
if (unit <= 100){
    bill = 5 * unit;
    console.log(`Your total bill is ${bill}.`);
} else if (unit <= 200) {
    bill = 7 * unit;
    console.log(`Your total bill is ${bill}.`);
} else {
    bill = 10 * unit;
    console.log(`Your total bill is ${bill}.`);
}


//  5. Login validation
let username = prompt("Enter username: ");
let password = prompt("Enter password: ");

if (username === "admin" && password === "1234") {
    console.log("Login Successful");
}
else {
    console.log("Invalid Username or Password");
}


//  6. Age eligibility
let age = Number(prompt("Enter your age: "));
if (age >= 18) {
    console.log("Eligible to Vote");
}
else {
    console.log("Not Eligible to Vote");
}



//  Phase 2.5 Console Projects

//  2. Student Grade Analyzer
let name = prompt("Enter the student name: ");
let math = Number(prompt("Enter the score in maths: "));
let science = Number(prompt("Enter the score in science: "));
let english = Number(prompt("Enter the score in english: "));
let hindi = Number(prompt("Enter the score in hindi: "));
let student = {};

let total = math + science + english + hindi;
let average = total / 4;

let grade;
if (average >= 90) {
    grade = "A";
} else if (average >= 80) {
    grade = "B";
} else if (average >= 70) {
    grade = "C";
} else if (average >= 60) {
    grade = "D";
} else {
    grade = "F";
}

let result;
if (average >= 50){
    result = "Pass";
} else {
    result = "Fail";
}

student = {...student, name, total, average, grade, result};
console.log(student);
