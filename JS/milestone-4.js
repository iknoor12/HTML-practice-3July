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


// 5. Reverse a string
let text = prompt("Enter a string:");
let reversed = "";
for (let i = text.length - 1; i >= 0; i--) {
    reversed = reversed + text[i];
}
console.log("Reversed String:", reversed);


// 6. Count the number of vowels in a string
let text = prompt("Enter a string:");
let count = 0;
for (let i = 0; i < text.length; i++) {
    let ch = text[i].toLowerCase();
    if (
        ch === "a" || ch === "e" || ch === "i" || ch === "o" || ch === "u"
    ) {
        count++;
    }
}
console.log("Number of Vowels:", count);


// 7. Palindrome check
let text = prompt("Enter a string:");
let reversed = "";
for (let i = text.length - 1; i >= 0; i--) {
    reversed = reversed + text[i];
}

if (text === reversed) {
    console.log("Palindrome");
} else {
    console.log("Not a Palindrome");
}


// 8. Frequency Counter
let text = prompt("Enter a string:");
let frequency = {};
for (let i = 0; i < text.length; i++) {
    let ch = text[i];
    if (frequency[ch]) {
        frequency[ch]++;
    } else {
        frequency[ch] = 1;
    }
}
console.log(frequency);


// 9. Remove Duplicates
let numbers = [1, 2, 3, 2, 4, 1, 5];
let unique = [];
for (let i = 0; i < numbers.length; i++) {
    if (!unique.includes(numbers[i])) {
        unique.push(numbers[i]);
    }
}
console.log("Original:", numbers);
console.log("Without Duplicates:", unique);


// 10. Merge Two Arrays
let array1 = [1, 2, 3];
let array2 = [4, 5, 6];
let merged = [];
for (let i = 0; i < array1.length; i++) {
    merged.push(array1[i]);
}

for (let i = 0; i < array2.length; i++) {
    merged.push(array2[i]);
}
console.log("Merged Array:", merged);


// 11. Student Marks and Result
let students = [
    {
        name: "John",
        marks: [80, 75, 90]
    },
    {
        name: "Emma",
        marks: [90, 85, 95]
    },
    {
        name: "David",
        marks: [60, 70, 65]
    }
];

for (let i = 0; i < students.length; i++) {
    let student = students[i];
    let total = 0;

    for (let j = 0; j < student.marks.length; j++) {
        total = total + student.marks[j];
    }

    let average = total / student.marks.length;
    let result;

    if (average >= 40) {
        result = "Pass";
    } else {
        result = "Fail";
    }

    console.log("Name:", student.name);
    console.log("Marks:", student.marks);
    console.log("Total:", total);
    console.log("Average:", average);
    console.log("Result:", result);
    console.log("----------------");
}



// Phase 2.5 Console Projects

// 1. Word Analyzer, It can calculate:
// Total characters
// Number of vowels
// Number of consonants
// Number of words
// Reversed text
// Whether it is a palindrome
let text = prompt("Enter a word or sentence:");

let characters = text.length;
let vowels = 0;
let consonants = 0;
let words = text.trim().split(" ");

for (let i = 0; i < text.length; i++) {
    let ch = text[i].toLowerCase();
    if (
        ch === "a" || ch === "e" || ch === "i" || ch === "o" || ch === "u"
    ) {
        vowels++;
    }
    else if (ch >= "a" && ch <= "z") {
        consonants++;
    }
}

let reversed = "";
for (let i = text.length - 1; i >= 0; i--) {
    reversed = reversed + text[i];
}

console.log("Original Text:", text);
console.log("Characters:", characters);
console.log("Words:", words.length);
console.log("Vowels:", vowels);
console.log("Consonants:", consonants);
console.log("Reversed:", reversed);

if (text.toLowerCase() === reversed.toLowerCase()) {
    console.log("Palindrome: Yes");
} else {
    console.log("Palindrome: No");
}


// 2. Number guessing game 
// The computer chooses a random number, and the user tries to guess it. We'll use a number between 1 and 100.
let secretNumber = Math.floor(Math.random() * 100) + 1;

let attempts = 0;
let guess;
while (guess !== secretNumber) {
    guess = Number(prompt("Guess a number between 1 and 100:"));
    attempts++;

    if (guess === secretNumber) {
        console.log("Correct!");
        console.log("You guessed it in", attempts, "attempts.");
    }
    else if (guess < secretNumber) {
        console.log("Too low! Try again.");
    }
    else {
        console.log("Too high! Try again.");
    }
}