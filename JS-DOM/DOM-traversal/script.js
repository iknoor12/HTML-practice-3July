// Find parent or parent's parent
let name = document.querySelector(".student p");
console.log(name.parentElement.parentElement);

// Find all children
const student = document.querySelector(".student");
console.log(student.children);

// Find first child
console.log(student.firstElementChild);

// Find last child
console.log(student.lastElementChild);

// Find next sibling
console.log(student.nextElementSibling);

// Find previous sibling
console.log(student.previousElementSibling);

// Change a parent's content: 
const john = document.querySelector(".student p");
john.parentElement.innerHTML = `
    <p>Mike</p>
    <p>25</p>
    <p>MBA</p>
`;