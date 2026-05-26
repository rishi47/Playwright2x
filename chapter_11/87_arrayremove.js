let arr=[1,2,3];
arr.push(4,5,6)
console.log(arr)

//splice to tring array from given length 
arr.splice(2,1);
console.log(arr)
arr.splice(2,0,20)
console.log(arr)

arr.splice(2,1,99 ) // It will repalce element from the give location
console.log(arr)

arr.splice(1,2,10,20);
console.log(arr)  /// remove from 1st index and added two elements
