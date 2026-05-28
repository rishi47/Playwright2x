const greet=function hello (name){
    return `Hello, ${name}`;

}
let a= greet("Ravi");
console.log(a)

function greet1 (name)
{
 return `Hello ,${name}!`;
}


// function as expression 
const greet2 =function(name)
{
 return `Hello ,${name}!`;
}

console.log(greet1("Test"));
console.log(greet2("Noddy"));