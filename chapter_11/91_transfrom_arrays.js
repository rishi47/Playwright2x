
let score=[69,99,100,200];

let grades=score.map(s => s > 70 ? "pass" : "fail");
console.log(grades)


let fillter =score.filter(s => s >90)
console.log(fillter)



// reduce 
let total=score.reduce((sum,s)=> sum+s,0 );

console.log(total)

console.log("---")
let nested=[[1,2],[4,3]];
console.log(nested.flat());