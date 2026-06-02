// Arrow function
const greet=function(name){
    return "Hi this in normal function "+name;
}

let r=greet("Test")
console.log(r)

const greet2=(name) =>"Hi this is arrrow function "+name;
let r2= greet2("Noddy")
console.log(r2)

const DoubleIt=n=>n*2
console.log(DoubleIt(2))

const printit=name =>console.log("Hello "+ name)
printit("Noddy")

const add= (a,b) =>  a+b;

function say() {console.log("HI")}

const message=() => "Hello";

//return value 
const message2=()=>'HI';

const greetMessage = name =>{
    const message="HI+"+name;
    return message;



}