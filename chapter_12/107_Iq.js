function runtest(name,status,duration){
    return `${name}: ${status} (${duration}ms)`;

}

runtest("Login","pass",320);

let message=runtest("Login","pass",320);

console.log(message)
