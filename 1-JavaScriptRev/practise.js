// slice and splice
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];  
let newArr = arr.slice(2, 5); // [3, 4, 5]
console.log(newArr);
arr.splice(4, 2, 10, 11); // removes 6,7 and adds 10,11

console.log(arr); // [1, 2, 3, 4, 5, 10, 11, 8, 9]
