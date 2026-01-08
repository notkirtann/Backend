//arrayyy
const myArr =[0,1,2,3,4,5,true,"kirtan"]
//array do shallow copy
//shallow copy(change in org value) and deep copy
const myArr2 = new Array(1,2,3,5)
//array methods

myArr.push(6)
console.log(myArr);
myArr.pop()
console.log(myArr);
myArr2.unshift("sbsephele")// insert value at first
console.log(myArr2); 
myArr2.shift() // removes first value
console.log(myArr2);

console.log(myArr.includes(9)); //return boolean reply
console.log(myArr.indexOf(9)); // tell index if not a part of array return -1 

const newThing = myArr2.join() // add array value in a string 
console.log(typeof myArr2);
console.log(typeof newThing);

//SPLICE and SLICE

const myn1 = myArr.slice(1,3) // return only particular part last not included
console.log(myn1);
console.log(myArr);

const myn2 = myArr.splice(1,3) // return only particular part  last included also removes particular part from main array
console.log(myn2);
console.log(myArr);

let arr1 = [1,2,3,4,5]
let arr2 = ["one","two","three"]
let arr3 = ["four",6,"seven",7]

//better way to merge use concat
let arr4 = arr2.concat(arr1);
console.log(arr3);
//dont use push to merge arr
arr1.push(arr2) // array inside array
console.log(arr1);
//one more way can use to spread multiple array not only 1 or 2

const arr5 =[...arr1,...arr2,...arr3]
console.log(arr5);
// in above arr1 push arr2 so usme arr2 print k time ek banke element show ho rahi kyuki arr1 mai as single element hai so what i did is

//i used flat jitni bhi array k andar array hai sab ek single array hi ban jaayegi

let multiArr = [1,2,3,["one","two",["four",6,[90,10,43,54],"seven",7],"three"]]

let singleArr = multiArr.flat(Infinity) //depth of arr can be 1 2 aur infinty
console.log(singleArr);

console.log(Array.isArray("Kirtan")); //string hai givr true or false
console.log(Array.from("Kirtan")); //ab array ban gyii

console.log(Array.from({name:"Kirtan",age:22})); // gives emtyp array nahi bna paa raha kyuki
//will learn to tackle letter

let score1=100
let score2=200
let score3=400

console.log(Array.of(score1,score2,score3)); // makes array of all scores