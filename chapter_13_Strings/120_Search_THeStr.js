let usl="https://staging.google.com/api/login?retry=true"

console.log(usl.includes("google"));
console.log(usl.includes("prod"));
console.log(usl.startsWith("http"));
console.log(usl.endsWith("true"));

console.log(usl.indexOf("a"))
console.log(usl.lastIndexOf("a"))
console.log(usl.indexOf("none"))
console.log(usl.indexOf("x"))

console.log(usl.search(/login/))

console.log(usl.search(/google/))