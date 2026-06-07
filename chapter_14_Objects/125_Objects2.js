
let student={name:"Ravi",age:64}

let student1={name:"Ravi"}

let student2={name:"Ravi"}

let student3={"name":"Ravi","age":"64"};

let a={status:"pass"}

// console.log(a)
// console.log(a.status);
//console.log(a["status"])
let b=a;
console.log(b)
b.status="fail";

console.log(b.status)
console.log(a.status)
if(a===b)
{
    console.log("true")
}
else{
     console.log("fail")
}