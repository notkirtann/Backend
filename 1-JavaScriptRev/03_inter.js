//OBJECTS AND FUNCTION

//singleton
//Object.create

//symbol
const sym1 = Symbol('my identifier')

//objects literal
const obj1 = {
    name : "Kirtan",
    channel : "CodeWithKirtan",
    address : "India",
    [sym1] : "my identifier" , //symbol as key
    email : "kirtan@google.com",
    "upi address" : "kirtan@ybl" //can't access with dot notation because of special char like upi in string
};
// two ways to access the obj value
console.log(obj1['name']); //speically used on condition
console.log(obj1.channel); //most used
console.log(obj1["upi address"]); //accessing special char key
console.log(obj1[sym1]); //accessing symbol key

//adding function in object
obj1.getInfo = function(){
    return `name is ${this.name} and email is ${this.email}`
}
console.log(obj1.getInfo());

//freezing the object
obj1.email = "kirtan@apple.com"
Object.freeze(obj1); 
obj1.email = "kirtan@microsoft.com" // didt change
console.log(obj1.email);

//singleton
const person = new Object(); //singleton
const person2 = {}; // non singleton
console.log(typeof person, typeof person2);
person.name = "Kirtan";
person.age = 22;
person.channel = "CodeWithKirtan";

const regularObj = {
    email : "123@mail.com",
    fullName:{
        userFullName : {
            firstName : "Kirtan",
            lastName : "Nahar"
        }
    }
}
console.log(regularObj);
console.log(regularObj.fullName.userFullName.firstName); //accessing nested object
console.log(regularObj.fullName?.userFullName?.middleName); //undefined without error

//Object combined
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

const p4 = Object.assign({}/*optional*/ ,p1,p2) //{} tareget array where other obj will be copied
console.log(p4);

const p5 = {...p1,...p2} //spread operator
console.log(p5);

//when value come from database
const Users = [{
    id: 1,
    fullName: "Kirtan Nahar",
    email: "kirtan@mail.com"
},{
    id: 2,
    fullName: "Sonu Nahar",
    email: "sonu@mail.com"
}]
console.log(Users[1].email);

//Object methods
console.log(Object.keys(obj1)); //return array of keys
console.log(Object.values(obj1)); //return array of values
console.log(Object.entries(obj1)); //return array of key value pair in array {array k andar array}

console.log(obj1.hasOwnProperty('email')); //true
console.log(obj1.hasOwnProperty('gmail')); //false

//destructuring of object
const course = {
    courseName : "JavaScript",
    price : 999,
    courseInstructor : "Kirtan"
}
console.log(course.courseInstructor);
//another way to access without dot notation
const {courseInstructor} = course 
console.log(courseInstructor);

//can change the variable name
const {courseInstructor: instructor} = course
console.log(instructor);

//multiple destructuring
const {courseName, price} = course
console.log(courseName, price);

//json format
// {
//     //json 
//     "name" : "kirtan",
//     "age" : 22,
//     "channel" : "CodeWithKirtan"
// }

//sometime data come in json format from server as array of json object
// [
//     {
//         "name":"kirtan",
//         "age":22,
//         "channel":"CodeWithKirtan"
//     },
//     {
//         "name":"sonu",
//          "age":20,
//          "channel":"SonuTech"
//     }
// ]

//functions in js

function greet(name){
    if(!name){
        name = "Guest"
    }
    console.log(`Hello ${name}, welcome to JS`);
}
greet("kirtan"); //()calling or invoking the function

function greet(name="Guest"){ //default parameter
    console.log(`Hello ${name}, welcome to JS`);
}
greet()

//function with return type 
function addTwo(num1,num2){
    return num1+num2;
}   
const result = addTwo(5,7);
console.log(result);


//when we dont how many parameter will be passed
function totalSum(...numbers){ //rest operator
    let total = 0;
    for(let i=0; i<numbers.length; i++){
        total += numbers[i];
    }
    return total;
}
const ans = totalSum(1,2,3,4,5,6,7,8,9,10);
console.log(ans);

//handle object in function
const insaan = {
    name : "Kirtan",
    age : 22
}
 function getDetails(anyobject){
    console.log(`Name is ${anyobject.name} and age is ${anyobject.age}`);
 }

getDetails(insaan);
getDetails({name:"Sonu", age:20}); //directly passing object

//another way to pass object in function    
const anotherPerson = {
    name: "Amit",
    age: 25
};
getDetails(anotherPerson);

//handle array in function
const arrayHeros = ["kirtan","ronaldo","messi","neymar"]

function printHeros(heros){
    console.log(heros[1]);
}
printHeros(arrayHeros);
printHeros(["sonu","sachin","dhoni"]); //directly passing array




