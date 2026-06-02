// pure function
// will retrun same output for same input
function calculate(total,pass){
    return((pass/total)*100).toFixed(2);
}
console.log(calculate(10,7))

// impure depends on external state

function isPassing(score){
    return score>= threshold;
}
let threshold=70;
console.log(isPassing(threshold))
threshold=50
console.log(isPassing(threshold))