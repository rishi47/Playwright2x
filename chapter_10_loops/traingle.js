let a = 20;
let b = 30;
let c = 20;

if (a + b <= c || a + c <= b || b + c <= a) {
    console.log("Invalid triangle");
}
else if (a === b && b === c) {
    console.log("It is an equilateral triangle");
}
else if (a === b || b === c || a === c) {
    console.log("It is an isosceles triangle");
}
else {
    console.log("It is a scalene triangle");
}