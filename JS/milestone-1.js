// Logic Practice
const prompt = require('prompt-sync')();


// 1. Print Name
let name = prompt("Enter your name: ");
console.log("Hello, " + name + "!");


// 2. Swap Two Numbers
let num1 = prompt("Enter the first number: ");
let num2 = prompt("Enter the second number: ");
let temp = 0;
temp = num1;
num1 = num2;
num2 = temp;
console.log("After swapping: First number is " + num1 + " and second number is " + num2);


// 3 . Area of Circle
let radius = prompt("Enter the radius of the circle: ");
let area = Math.PI * radius * radius;
console.log(`The area of circle is ${area}`);


// 4. Celsius to Fahrenheit
const celsius = prompt("Enter temperature in celsius: ");
const fahrenheit = (celsius * 1.8) + 32;
console.log(`Temperature in farenheit is ${fahrenheit}`);



// 5. Age Calculator
let currentYear = prompt("Enter the current year: ");
let birthYear = prompt("Enter your birth year: ");
let age = currentYear - birthYear;
console.log(`Your age: ${age}`);


// 6. Simple Interest
let p = prompt("Enter the principal amount: ");
let r = prompt("Enter the rate per year: ");
let t = prompt("Enter the time in year: ");
let interest = (p * r * t) / 100;
console.log(`Your Simple Interest amount is ${interest}`);


//  7. perimeter of a square
let side = prompt("Enter the side of the square: ");
let perimeter = 4 * side;
console.log(`Perimeter: ${perimeter}`);




//  Phase 2.5 Console Projects

//  1. Calculator Engine
let digit1 = Number(prompt("Enter the first number: "));
let digit2 = Number(prompt("Enter the second number: "));
let operator = prompt ("Enter the operator (+, -, *, %, /): ");
switch(operator){
    case "+":
        console.log("Addition: ", digit1 + digit2);
        break

    case "-":
        console.log("Substraction: ", digit1 - digit2);
        break

    case "*":
        console.log("Multiplication: ", digit1 * digit2);
        break

    case "/":
        console.log("Division: ", digit1 / digit2);
        break

    case "%":
        console.log("Modulus: ", digit1 % digit2);
        break

    default:
        console.log("Invalid operator");
}



//  2. Student Grade Analyzer
let name = prompt("Enter the student name: ");
let math = Number(prompt("Enter the score in maths: "));
let science = Number(prompt("Enter the score in science: "));
let english = Number(prompt("Enter the score in english: "));
let hindi = Number(prompt("Enter the score in hindi: "));
let student = {};
let total = math + science + english + hindi;
let average = total / 4;
student = {...student, name, total, average};
console.log(student);