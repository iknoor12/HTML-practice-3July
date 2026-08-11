// Logic Practice
const prompt = require('prompt-sync')();

// 1. Merge two arrays
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const merged = [...arr1, ...arr2];
console.log(merged);


// 2. Clone Objects
const student1 = {
    name: "John",
    age: 20
};
const studentCopy = { ...student1 };
console.log(studentCopy);


// 3. Sum Using Rest Parameters
function sum(...numbers) {
    let total = 0;
    for (let number of numbers) {
        total += number;
    }
    return total;
}
console.log(sum(10, 20, 30, 40));


// 4. Student Report Using Destructuring
let student2 = {
    name: "John",
    age: 21,
    marks: 85,
    course: "MCA"
};
let { name, marks, course } = student2;
console.log("Name:", name);
console.log("Course:", course);
console.log("Marks:", marks);


// 5. Shopping Cart Using Spread
let cart = ["Laptop", "Mouse"];
let newItems = ["Keyboard", "Headphones"];
cart = [...cart, ...newItems];
console.log(cart);


// 6. Optional Chaining Practice
let user = {
    name: "John",
    address: {
        city: "Delhi"
    }
};
console.log(user.address?.city);
console.log(user.contact?.phone);


// 7. Function Refactoring
const calculateTotal = (price, tax) => price + tax;
console.log(calculateTotal(1000, 180));


// 8. Price Calculator
function calculatePrice(...prices) {
    let total = 0;
    for (let price of prices) {
        total += price;
    }
    return total;
}
console.log(calculatePrice(100, 200, 300));