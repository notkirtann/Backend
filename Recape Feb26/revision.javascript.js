let loggedIn ="kirtan" //empty false
let boolChange = Boolean(loggedIn)//true
console.log(1+2+"2")

console.log("02">1); //truee
console.log("2">=1); //true
console.log(null >0);
console.log(null ==0);
console.log(null >=0)

const arrayHeros = ["kirtan","ronaldo"]
let myObj = {
    name:"Kirtan",
    age:22
}
const myFunction = function(){
    console.log('HalaMadrid')  
}
console.table([typeof arrayHeros,typeof myObj, typeof myFunction])

console.log(typeof arrayHeros);

let userOne = {
    email : "user@google.com",
    upi : "user@ybl"
}
let userTwo = userOne;
 console.log(userTwo);
 console.log('change done in user two');

 userTwo.email = "kirtan@google.com"
 console.log(userOne);
 console.log(userTwo);

 const gameName = new String('Cristiano')
console.log(gameName[0]); // string  hi hai yaha key value pair bane hai
console.log(gameName.__proto__); //object empty show ho raha pr empty nhi hai

const anotherString = gameName.slice(-9,3)
console.log(anotherString);

const s = "1241.141a"
console.log(isNaN(s));

console.log(Math.abs(-4)); //4
console.log(Math.round(4.3));
console.log(Math.ceil(4.3));
console.log(Math.floor(4.3));

let myDate = new Date();
console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleDateString());
console.log(myDate.toLocaleString());

console.log('\n\n\n\n\n');
// ?-------------------basic 02-------------------

//array do shallow copy (change in org value)
// ex:arrays
const myArr =[0,1,2,3,4,5,true,"kirtan"];
const myArr2 = myArr;
myArr.push(6);
console.log(myArr);

myArr.pop(); //from last
console.log(myArr);

myArr.unshift("sbsephele");// insert value at first
console.log(myArr); 

myArr.shift();
console.log(myArr);

const newThing = myArr.join()
console.log(newThing);

console.log(typeof myArr);
console.log(typeof newThing);

console.log(myArr2); // every changes are there in array 2

console.log(Array.isArray("Kirtan")); //false string hai
console.log(Array.from("Kirtan")); //ab array ban gyii
// [ 'K', 'i', 'r', 't', 'a', 'n' ]

// !!!!!!!!!!!!!!!!!!!
console.log(Array.from({name:"Kirtan",age:22})); // gives emtyp array nahi bna paa raha kyuki

// approch for this problem
const obj = {name:"Kirtan",age:22}
console.log(Object.keys(obj));
console.log(Object.values(obj));
console.log(Object.entries(obj));

console.log('\n\n\n\n\n');
//? ------------------------03 inter--------------------

const obj1={
    name:"kirtan",
    age:23
}
obj1.getInfo=()=>{
    return `name is ${this.name}`
}
obj1.getData=function(){
    return `name is ${this.name}`
}
console.log(obj1.getInfo());
console.log(obj1.getData());

obj1.email = "kirtan@apple.com"
Object.freeze(obj1); 
obj1.email = "kirtan@microsoft.com" // didt change
console.log(obj1.email);

//! singleton vs non singleton
const user = {
    name: "Kirtan",
    age: 22
};

const user2 = user;           // singleton

user2.age = 25;

console.log(user.age); // 25 (same instance)

function User(name, age) {
    this.name = name;
    this.age = age;
}

const user7 = new User("Kirtan", 22);
const user10 = new User("Ronaldo", 40);

console.log(user10 === user7); // false


const p1 = {
    name : "Ronaldo",
    channel : "CR7"
}
const p2 = {
    name : "Messi",
    channel : "PSG"
}
const p3= {p1,p2} //not good way
console.log(p3);

const p5 = {...p2,...p1} //spread operator behave diffrent here
console.log(p5);

console.log(obj1.hasOwnProperty('email')); //true
console.log(obj1.hasOwnProperty('gmail')); //false

const arrayHero = ["kirtan","ronaldo","messi","neymar"]

function printHeros(heros){
    heros.forEach(i => {
        console.log(i,",");
        
    });
}
printHeros(arrayHero);
printHeros(["sonu","sachin","dhoni"]); //directly passing array

console.log('\n\n\n\n\n');
//? -----------------------04 inter-----------

//!hoisting
//hoisting is a mechanism in which variables and functions are moved to the top of their scope before code execution
//example of hoisting

addOne(5,7); //works because function is hoisted
function addOne(num1,num2){
    return num1+num2;
}

//addTwo(5,7); //error because function expression is not hoisted
const addTwo = function(num1,num2){ //function expression
    return num1+num2;
}

//! short tricks

//@ single line mai return krna ho toh curly braces nhi lgate
const jodo = (num1,num2) => num1+num2;
console.log(jodo(5,7));

//@if only one parameter hai toh parentheses nhi lagate
const square = num => num*num;
console.log(square(2));


console.log('\n\n\n\n\n');
//? -----------------------05 control flow-----------

// ! nullishing coalecing opertator
const name = user.name?? "guest";

let insaan;
let coal = insaan ?? "operator";

let Cristiano = "Cristiano";
let Messi;

let GOAT = null ?? undefined ?? Messi??Cristiano
console.log(GOAT);

//! ternary operator
let goals = 950
let goat = (goals>900) ? "Cristiano Ronaldo" : "Lionel Messi"
console.log(goat);

//!high order array
let arr = [1,2,3,4,5]
for(const values of arr){
    console.log(values);
}

//@for-in array
const naam = "Kirtan";
for(const values in naam){
    console.log(naam[values]);  
}
console.log('\n');
//@for-of array
for(const values of naam){
    console.log(values);
}

const map = new Map(); //unique key value pairs
map.set('a', 1);
map.set('b', 2);
map.set('c', 3);
map.set('c', 4);// overwrite 3
map.set('d', 5);
map.set('e', 6);
console.log(map);

// #for-in do not work on map
for (const element in map){
console.log(map);
}

//for-of
for (const element of map){
console.log(element);
}
for (const [key, value] of map) {
    console.log(`key is ${key} and value is ${value}`);   
}

myArr2.forEach(i=>{
    console.log(i);
})
myArr.forEach( (val, index,arr) => {
    console.log(`value is ${val} and index is ${index} and array is ${arr}`);
})//dont return anything


//! FILTER (new array)
const answer = myArr.filter((num)=>{
    return isNaN(num)
})
console.log(answer);

const books = [
    {title:"Book One", author:"kirtan", year:2002, rating:4.5},
    {title:"Book Two", author:"ronaldo", year:2010, rating:4.9},
    {title:"Book Three", author:"messi", year:2005, rating:3.5},
    {title:"Book Four", author:"neymar", year:2015, rating:4.8},
    {title:"Book Five", author:"mbappe", year:2020, rating:4.2},
    {title:"Book Six", author:"salah", year:2021, rating:3.9}
]

const userBooks = books.filter((bk)=>{
    return bk.year>2005 && bk.rating >4.0
})
console.log(userBooks);

// !mapping
const myNumbers = [1,2,3,4,5,6,7,8,9]

const mapping = myNumbers.map(num=>num*5)
console.log(mapping);

//!chaning

const chaning = myNumbers.map(num=>num*5)
                         .map(num=>num+3)
                         .filter(num=>num%2==0)
                         .map(num=>num+1)
console.log(chaning);

//!reduce
const total = myNumbers.reduce((acc,val)=>{
    return acc+val;
});
console.log(total);

const shoppingCart = [
    {product:"laptop", price:38374},
    {product:"mobile", price:36482},
    {product:"tv", price:25683},
    {product:"headphone", price:5538},
]
const bill = shoppingCart.reduce((acc,curr)=>acc+curr.price,0)
console.log(bill);

//!find 
const find = myNumbers.find((num)=>num>5)
console.log(find); //return how many match to condition

//! findIndex method
const findIndex = myNumbers.findIndex((num) => num > 5)
console.log(findIndex);



console.log('\n\n\n advance begins\n');
// -----------------------08 adv---------------

const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        const success = true;
        resolve({username:"Kirtan",email:'kirtan.com'}) 
    }, 1000);
});
promise1
.then((data) => {
    console.log("User Data:", data);
})
.finally(()=>{
    console.log("promise 3 completed")
});


const promiseTwo = new Promise((resolve, reject) => {
    setTimeout(() => {
        const success = false;
       if(success){
        resolve({username:"Kirtan",email:'kirtan.com'});
       } else {
        reject("Promise Four Rejected");
       }    
    }, 2000);
});
promiseTwo
.then((user) => {
    return user.username;
})
.then((username) => {
    console.log("Username:", username);
})
.catch((error)=>{
    console.error("Error:", error);
})
.finally(()=>{
    console.log("Promise Four Completed");
});


console.log(eval(promise1));
