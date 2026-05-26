let result=["pass", "fail","pass","error"];

result.indexOf("pass"); // will retunrn the first index for element  
console.log(result.indexOf("pass"));
result.lastIndexOf("fail")
console.log(result.indexOf("fail"));

console.log(result.includes("fail"));
console.log(result.includes("Skip"));

let nums=[10,20,30,40];

nums.find(x => x > 20);

console.log(nums.find(x => x > 20));

nums.findIndex(n => n > 20);

console.log(nums.findIndex(n => n > 20));

let ac=nums.findLastIndex(n => n > 20 )
console.log(ac)