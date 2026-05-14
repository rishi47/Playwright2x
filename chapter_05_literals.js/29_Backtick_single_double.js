// 29_Backtick_single_double.js

// Single Quotes
let single = 'Hello';

// Double Quotes
let double = "Hello";

// Backticks (Template Literals)
let backtick = `Hello`;

console.log(single);
console.log(double);
console.log(backtick);

/*
Difference:

1. Single (' ') and Double (" ")
   - Used for normal strings.
   - Almost same in JavaScript.

2. Backticks (` `)
   - Can use variables directly with ${}
   - Supports multi-line strings.

Example:
*/

let name = "Rishikesh";

console.log('Hello ' + name);     // old way
console.log(`Hello ${name}`);     // backtick way (easy)