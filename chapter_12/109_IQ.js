function getstatus(code){
    if(code>=200 && code<=300) return "success";
    if(code>=400 && code<=500) return "Cline error ";
    if(code>=500 && code<=300) return "Server error ";

}

getstatus(200)
getstatus(404)
getstatus(500)

let a=getstatus(200);
console.log(a)

function logTest(name){
    console.log(`Running :${name}`);
    //no Return
}
let result=logTest("Login")
console.log(result)


 greet("Alice");

function greet(name){
    return `Hello ", ${name}!`;
}

// will calue refrence errror hello("bob") 
const hello=function(name){ return `Hi, ${name}`};