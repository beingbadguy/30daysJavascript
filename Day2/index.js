// Activity 1 = Arithematic Operations

// Task 1
let a = 10;
let b = 20;
console.log(a + b);

// Task 2
console.log(a - b);
// Task 3

console.log(a * b);

// Task 4
console.log(a / b);

// Task 5
console.log(b % a);

// Activity 2 = Assighment Operators

// Task 6

let age = 20;

age += 1;
console.log(age);

// Task 7
let marks = 100;
marks -= 1;
console.log(marks);

//Activity 3 = comparison operators

// Task 8

let num1 = 10;
let num2 = 45;
const isBigger = num1 > num2;
console.log(isBigger);

const isSmaller = num1 < num2;
console.log(isSmaller);

// Task 9
let newNum1 = 20;
let newNum2 = 32;

const isGreaterEqual = newNum1 >= newNum2;
console.log(isGreaterEqual);

const isSmallerEqual = newNum1 <= newNum2;
console.log(isSmallerEqual);

// Task 10

let number = 10;
let anotherNumber = "10";

console.log(number == anotherNumber);
console.log(number === anotherNumber);

// Activity 4 = Logical Operators

// Task 11
const userName = true;
const password = false;
// both need to be true, or false for AND operator

console.log("AND operator = ", userName && password);

// Task 12

// if any one is true then the log will be true in case of OR operator
console.log("OR operator = ", userName || password);

// Task 13

let isIndian = true;

console.log(!isIndian);

// Activity 5 = Ternary Operator

// Task 14

let myAge = 19;

console.log(
  myAge >= 18
    ? "You can vote my guy"
    : "You cannot vote my guy, grow up more hahaha"
);
