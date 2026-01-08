"use strict" // treat as Latest version of JS.

console.log("BACK AGAIN")
const K = 9
var notUse=7;
let Use = "Madrid";

//cant use alert() and all in nodejs in vscode
// code readabilty should be strictly followed.
//ecma for basic documentation of javascript followed

//datatypes
let aString = "Kirtan"
let age = 23
let aBool = true;

// number bigint string bool 
// null also a standalone value
// undefined != undefiend
// symbol mainly used in uniqness

// object 
console.log(typeof null)    

//datatype conversion 
let score = 33
console.log(typeof score)
let convertInString = String(score)
console.log(typeof convertInString)

// only gets convert when possoble otherwise give NaN aur same type as org
// "33"=> 33
// "33abc" => NaN
// true == 1
let loggedIn ="kirtan" //empty false
let boolChange = Boolean(loggedIn)
console.log(boolChange)
// can change to diff datatype just by writing Datatype in Cap first letter

let str1="Kirtan"
let str2=" Madrid"

let str3 = str1+str2

// "1"+2== 12 vise versa
// "1"+2+2 == 122 
// 1 + 2 + "2" == 32what comes first in short


//comparison operatotot
// nevr compare two datatypes at once
console.log("02">1); //truee
console.log("2">=1); //true
console.log(null >0);
console.log(null ==0);
console.log(null >=0); //truee but cant compared
//in case of undefined false 


//=== check strictly check the data typ also
console.log('----');

console.log('2'===2);   //false

// two datatypes primitive and non primitive 

// Primitive 
// 7 types : String Number Boolean null undefined Symbol bigInt

//Ref type or Non Primitive
// array Obj Functions

//Symbol example 
const id = Symbol('123')
const anotherId= Symbol('123')
console.log(id===anotherId);//false because same symbol but still diff

const bigNumber = 123n;// n after number convert it into bigint
console.log(typeof bigNumber);

const arrayHeros = ["kirtan","ronaldo"]
let myObj = {
    name:"Kirtan",
    age:22
}
const myFunction = function(){
    console.log('HalaMadrid')  
}
console.table([typeof arrayHeros,typeof myObj, typeof myFunction])

//working of memory space
/* 
1-Stack(primitive) sends the copy of the data

2-Heap(non primitive) sends the refrence of the data
 */
//STACK
let myName = "Kirtan"
let anotherName = myName
anotherName= "Sonu"
console.log([myName,anotherName]);
 
//HEAP 
//change in data will change in main file example.

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

 //STRINGSS
console.log(myName+userOne.email+"hello"); //not good way to write in js

//string interpolation
console.log(`Hello ${myName.toUpperCase()} your email is ${userOne.email.toLowerCase()}`);

const gameName = new String('Cristiano')
console.log(gameName[0]); // string  hi hai yaha key value pair bane hai
console.log(gameName.__proto__); //object empty show ho raha pr empty nhi hai

//aur bhi method use kr skte to know check in browser terminal
/*
indexOf
charAt
toUpperCase etc.
*/
const newString = gameName.substring(0,4)
console.log(newString);

const anotherString = gameName.slice(-8,4)
console.log(anotherString);

const spaceName = "    Messi   "
console.log(spaceName);
console.log(spaceName.trim()); 

const url = 'https://kirtan%20cristiano'
console.log(url.replace('%20',' '));

console.log(url.includes('Kirtan'));//false because of uppercase

console.log(userOne.email.split('@'));

//if dedicately want number to be number 
const scoree = 40.58453; // can be string 
const balance = new Number(400); // definelty number

console.log(balance.toFixed(2)); //400.00

console.log(scoree.toPrecision(3)); 
// focus on first 3 values like 123.8222352 will become 124
//12.7918 will become 12.8

const money = 10000000
console.log(money.toLocaleString('en-In'));
////////////////MATHS////////
console.log(Math);

console.log(Math.abs(-4)); //4
console.log(Math.round(4.3));
console.log(Math.ceil(4.3));
console.log(Math.floor(4.3));
console.log(Math.max(4,3,9,5,2,6));
console.log(Math.min(4,3,9,5,2,6));

console.log(Math.random());

console.log(Math.ceil((Math.random()*10))); //no need to add +1 for 1-10


//const timing = Temporal.Now.instant()
//console.log(timing);// available only in mozila browser

//Date

let myDate = new Date();
console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());

let createdDate = new Date(2023,0,23) // month start from zero in js
console.log(createdDate.toDateString());
let createdDate2 = new Date("2023-01-23")//(01-23-2023) will also work
console.log(createdDate2.toLocaleString());

let myTimeStamp = Math.floor(Date.now()/1000);
console.log(myTimeStamp);

let newDate = new Date()
console.log(`Today date is ${newDate.getDate()} and todays month is ${newDate.getMonth()} and same other things also from getDate type function`);// month start from 0 so 9 means october and same.

newDate.toLocaleString('defalut',{
    weekday:"long",
})//control space to know all the property of object


