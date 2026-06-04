let str=" Hello World! "

console.log(str.toUpperCase())
console.log(str.toLowerCase())
console.log(str.trim())
console.log(str.trimStart())
console.log(str.trimEnd())

let msg="Test: FAIL. Retry: FAIL.";
console.log(msg.replace("FAIL","PASS"))
console.log(msg.replaceAll("FAIL","PASS"))

let url="https://app.vwo.com?appname=digital"
console.log(url.replace(/app/,"google"));

// Concatination 
"Hello "+ "World "
"Hello".concat("","World");
`${url} ${"WORLD"}`

console.log("pass,fail,skip".split(",")) /// it will print an array of after splitted array
let rr="test_login_pass".split("_").join(" ")
console.log(rr)

let part=["2024","03","29"]
let  date=part.join("-")
console.log(date)