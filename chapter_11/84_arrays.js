// creating array 

let browser=["chrome","firefox","edge"];

//Array constructor used to call constructor to create constructor 

let score=new Array(3);
score[0]=20;
score[1]=30;
score[2]=30;
let score2=new Array(1,2,3);
console.log(score)
console.log(score2)

let array= new Array(10,20,30);
console.log(array)

let ok=Array.of(20,40,60);

console.log(ok)

let characters=Array.from("HELLO")  // from will drive its into multile characters // it will not work with numbers
console.log(characters)

// let characteroks=Array.from("123456789")  // from will drive its into multile characters // it will not work with numbers
// console.log(characteroks)