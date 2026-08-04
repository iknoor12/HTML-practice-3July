// Logic Practice
const prompt = require('prompt-sync')();


// 1. Largest Number from an Array
let arr = prompt("Enter numbers separated by commas: ").split(",").map(Number);
let largest = arr[0];
for (let i = 1; i < arr.length; i++) {
    if (arr[i] > largest) {
        largest = arr[i];
    }
}
console.log(`The largest number in the array is: ${largest}`);


//  2. Sum of the given array
let array = prompt("Enter numbers separated by commas: ").split(",").map(Number);
let sum = 0;
for (let i = 0; i < array.length; i++) {
    sum += array[i];
}
console.log(`The sum of the numbers in the array is: ${sum}`);


//  3. Average of the given array
let numbers = prompt("Enter numbers separated by commas: ").split(",").map(Number);
let total = 0;
for (let i = 0; i < numbers.length; i++) {
    total += numbers[i];
}
let average = total / numbers.length;
console.log(`The average of the numbers in the array is: ${average}`);


//  4. Reverse an array
let arrToReverse = prompt("Enter numbers separated by commas: ").split(",").map(Number);
let reversed = [];
for (let i = arrToReverse.length - 1; i >= 0; i--) {
    reversed.push(arrToReverse[i]);
}
console.log(`The reversed array is: ${reversed}`);