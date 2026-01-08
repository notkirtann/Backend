//Control Flow - Logic Flow
//IF else if-elseStatement
//Switch Statement
//Loops - for, while, do-while
//Break and Continue

//Loops - for, while, do-while
//1. For Loop
//2. While Loop
//3. Do-While Loop
//4. For...in Loop
//5. For...of Loop
//6. Nested Loop

//syntax
// switch () {
//     case 1 :
//         break;
//     case 2 :
//         break;
//     default: 
//         break;
// }

//truthy values - true, 1, " ", [], {}, function(){}, bigint(1n),"0","false"

//falsy values - false, 0,-0, "", null, undefined, NaN, bigint(0n)

//diff way to check array empty
// if(arr.length === 0) {}
// if(!arr.length) {}
// if(arr && arr.length) {}
// if(arr?.length) {}

//way to check object empty
// if(Object.keys(obj).length === 0) {}
// if(!Object.keys(obj).length) {}


//nullish coalescing operator (??) - returns right side value if left side is null or undefined
let user;
let userName = user ?? "Guest";
console.log(userName); // Output: "Guest" 
let bhai = "cristiano";
let userName2 = undefined ?? "guest" ?? bhai;
console.log(userName2); // Output: "guest" // jo phele defined hoga vo return hoga


//ternary operator
// condition ? expr1 : expr2
let age = 20;
let beverage = (age >= 18) ? "Beer" : "Juice";
console.log(beverage); // Output: "Beer"

//LOOPS ITERATION 
for(let i=0;i<5;i++){
    // console.log(i);
}
//while loop
let i=0;        
while(i<5){
    // console.log(i);
    i++;
}

//do while loop
let j=0;
do{
    // console.log(j);
    j++;
}while(j<5)
//executes at least once even if condition is false

//high order array methods
let arr = [1,2,3,4,5];
for (const value of arr) {
    //console.log(value);
}
greeting = "Hello World"
for (const element of greeting) {
    // console.log(element);
    // mtlb har ek character ko alag alag karke dega
}
const map = new Map(); //unique key value pairs
map.set('a', 1);
map.set('b', 2);
map.set('c', 3);
console.log(map);

for (const element of map) {
    console.log(element);   
}
//key value pair me dega
for (const [key, value] of map) {
    console.log(`key is ${key} and value is ${value}`);   
}
//forof do not work on objects

//forin works on objects
let object = {
    name : "kirtan",
    age : 22,
    city : "Ahmedabad"
}
for (const key in object) {
    console.log(key +" "+ object[key]);   
}
//forin does work on array but not on map
//but forin loop is not recommended for array use forof or high order array methods

//for each loop
const array = ['a','b','c','d'];
array.forEach( function(val){
    console.log(val);
})

array.forEach( (val, index,arr) => {
    console.log(`value is ${val} and index is ${index} and array is ${arr}`);
})

const myCoding = [
    {name:"kirtan", age:22},
    {name:"ronaldo", age:38},
    {name:"messi", age:36}
]
myCoding.forEach( (item) => {
    console.log(item.name);
} )

const store = myCoding.forEach( (item) => {
    console.log(item);
    return item.name 
}) //for each dont return anything
//still need data then use push method to push in empty array
console.log(store);

const myNumbers = [1,2,3,4,5,6,7,8,9]

//filter
const answer = myNumbers.filter((num) => {
    return num%2 === 0;
})
console.log(answer); //filter return new array

const books = [
    {title:"Book One", author:"kirtan", year:2001, rating:4.5},
    {title:"Book Two", author:"ronaldo", year:2010, rating:4.9},
    {title:"Book Three", author:"messi", year:2005, rating:3.5},
    {title:"Book Four", author:"neymar", year:2015, rating:4.8},
    {title:"Book Five", author:"mbappe", year:2020, rating:4.2},
    {title:"Book Six", author:"salah", year:2021, rating:3.9}
]

const userBooks = books.filter((bk)=>{
    return bk.year > 2005 && bk.rating >= 4.0
})
console.log(userBooks);

const lala = myNumbers.map((num)=> num * 5)
console.log(lala); //map return new array


//chaining
const chaining = myNumbers
                .map((num)=> num * 5)
                .map((num)=>num+5)
                .filter((num)=> num > 20)
//first multiply by 5 then add 5 then filter greater than 20
console.log(chaining);

//reduce
const total = myNumbers.reduce((accumulator, currentValue) => {
    console.log(accumulator+" "+ currentValue);
    return accumulator + currentValue
}, 0) //0 is initial value of accumulator
console.log(total); //45

//amother example of reduce
const shoppingCart = [
    {product:"laptop", price:30000},
    {product:"mobile", price:20000},
    {product:"tv", price:25000},
    {product:"headphone", price:5000},
]

const totalAmount = shoppingCart.reduce((acc,curr)=>acc + curr.price,0)
console.log(totalAmount); //80000

//find method
const find = myNumbers.find((num) => num > 5)
console.log(find); //6 only first match return karta hai

//findIndex method
const findIndex = myNumbers.findIndex((num) => num > 5)
console.log(findIndex); //5 index of first match return karta hai
