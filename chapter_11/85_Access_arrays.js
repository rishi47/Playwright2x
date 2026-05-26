let status=["pass","fail","skipped"]
console.log(status.length+"size of array status");

// for(let a=0;a<status.length;a++)
// {
//     console.log(status[a]);
// }

console.log(status.at(-1));
console.log(status.at(-2));
console.log(status.at(-3));
console.log(status.at(-4)); // undefined 

//modify 
status[1]="blocked" // changed index at first index 
console.log(status);