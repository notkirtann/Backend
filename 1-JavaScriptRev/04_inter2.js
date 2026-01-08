//SCOPES
{
    //scopes are the contexts in which variables and functions are accessible
    //there are three types of scopes in js
    //1. Global scope
    //2. Local scope
    //3. Block scope
}
let age = 22 //global scope
function greet()
{
    let name = "Kirtan" //local scope
    console.log(name, age);
}
greet();
//console.log(name); //error name is not defined

//global scope varies from place to place
//like in windos global object is window
//in node js global object is global
//in web worker global object is self

//hoisting
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


//Arrow function mai this keyword use nhi hota

const myFunction = {
    name:"Kirtan",
    age:22,
    greet: function(){
        console.log(`Hello ${this.name}, welcome to JS`);
    } 
}
myFunction.greet();
myFunction.name = "Sonu"
myFunction.greet();
//agar this use nhi krte toh wo smjh nhi pata konsa name use krna hai


//about this keyword
function person(){
    console.log(this);
}
person(); 


//arrow function
const person1 = ()=>{
    console.log("hello");
}

// single line mai return krna ho toh curly braces nhi lgate
const jodo = (num1,num2) => num1+num2;
console.log(jodo(5,7));
//agar curly braces use krte hai toh return krna padta hai
const jodo1 = (num1,num2) => {
    return num1+num2;
}
console.log(jodo1(5,7));

//if only one parameter hai toh parentheses nhi lagate
const square = num => num*num;
console.log(square(5));

//IIFE - Immediately Invoked Function Expression
//1
(function chai(){
    console.log("IIFE");
})(); //named iife
//2
( ()=>{
    console.log("IIFE arrow function");
} )();
//3
( (name) => {
    console.log(`IIFE arrow function with parameter ${name}`);
}
)('Kirtan');
//()(); phele () mai function define krte hai aur dusre () mai call krte hai ; semi colon to end krne ke liye
//IIFE ke andar jo bhi variable define krte hai wo global scope mai nhi jata


/*----------------------*/

/*  JavaScript execution context
    1. Global execution context {this}
    2. Function execution context    
    3. Eval execution context

    Each execution context has two phases
    1. Creation phase / memory creation phase
    2. Execution phase    
*/

/*
    Call Stack uses LIFO (Last In First Out) method 
 */

    