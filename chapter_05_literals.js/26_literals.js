// 26_literals.js - Exercise on JavaScript Literals
// This file demonstrates all supported literal types in JavaScript,
// with a special focus on number literals.

// 1. Number Literals
// JavaScript supports decimal, hexadecimal, octal, binary, and exponential notation.

// Decimal numbers
let decimalNum = 42;
console.log("Decimal:", decimalNum);

// Floating-point numbers
let floatNum = 3.14159;
console.log("Float:", floatNum);

// Negative numbers
let negativeNum = -123;
console.log("Negative:", negativeNum);

// Scientific notation (exponential)
let scientificNum = 1.23e4; // 12300
console.log("Scientific:", scientificNum);

// Hexadecimal (base 16) - starts with 0x or 0X
let hexNum = 0xFF; // 255
console.log("Hexadecimal:", hexNum);

// Octal (base 8) - starts with 0o or 0O (ES6+)
let octalNum = 0o77; // 63
console.log("Octal:", octalNum);

// Binary (base 2) - starts with 0b or 0B (ES6+)
let binaryNum = 0b1111; // 15
console.log("Binary:", binaryNum);

// BigInt literals (for very large integers) - ends with n
let bigIntNum = 123456789012345678901234567890n;
console.log("BigInt:", bigIntNum);

// Infinity and NaN
let infinityNum = Infinity;
let nanNum = NaN;
console.log("Infinity:", infinityNum);
console.log("NaN:", nanNum);

// 2. String Literals
// Single quotes
let singleQuote = 'Hello World';
console.log("Single Quote String:", singleQuote);

// Double quotes
let doubleQuote = "Hello World";
console.log("Double Quote String:", doubleQuote);

// Template literals (backticks) - support interpolation
let name = "JavaScript";
let templateLiteral = `Hello ${name}!`;
console.log("Template Literal:", templateLiteral);

// 3. Boolean Literals
let trueBool = true;
let falseBool = false;
console.log("True:", trueBool);
console.log("False:", falseBool);

// 4. Null Literal
let nullValue = null;
console.log("Null:", nullValue);

// 5. Undefined (though not typically called a literal, it's a primitive value)
let undefinedValue = undefined;
console.log("Undefined:", undefinedValue);

// 6. Object Literals
let person = {
    name: "John",
    age: 30,
    isStudent: false
};
console.log("Object Literal:", person);

// 7. Array Literals
let numbers = [1, 2, 3, 4, 5];
let mixedArray = [1, "two", true, null];
console.log("Array Literal (numbers):", numbers);
console.log("Array Literal (mixed):", mixedArray);

// 8. RegExp Literals
let regex = /hello/i;
console.log("RegExp Literal:", regex);

// Exercise: Try modifying these literals and see what happens!
// For example, change a number literal to a different base or add more properties to the object.