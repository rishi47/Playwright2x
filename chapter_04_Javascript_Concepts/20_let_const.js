console.log(c);
// Temporal Dead Zone (TDZ) for 'c' starts here
console.log("hi");
console.log("hi");
console.log("hi");
console.log("hi");

const c=10;
console.log(c);
// TDZ ends here