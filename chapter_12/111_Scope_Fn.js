// scope 
let env="Staging"; // Staging

function setupConfig(){
    let timeout=3000; //local scope
    console.log(env); // can access global
     console.log(timeout); // can access local
}
setupConfig()
console.log(env)
console.log(timeout)