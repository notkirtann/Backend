// Variable Declarations (let, const)
let language = "JavaScript";
const version = "ES6";

// Arrow Functions
const square = (num) => num * num;
console.log("Square of 5:", square(5));

// Template Literals
const user = "Kirtan";
console.log(`Hello ${user}, welcome to ${language} ${version}!`);

// Default Parameters
function greet(name = "Guest") {
  console.log(`Hello, ${name}!`);
}
greet();
greet("Kirtan");

// Destructuring Assignment
const person = { 
    name: "Kirtan", 
    age: 22, 
    country: "India" 
};
const { name, age, country } = person;
console.log("Destructured Object:", name, age, country);

const numbers = [1, 2, 3, 4];
const [first, second, ...restNums] = numbers;
console.log("Destructured Array:", first, second, restNums);

// Spread Operator
const arr1 = [1, 2];
const arr2 = [3, 4];
const merged = [...arr1, ...arr2];
console.log("Merged Arrays (Spread):", merged);

const updatedPerson = { ...person, age: 23, city: "Mumbai" };
console.log("Updated Object (Spread):", updatedPerson);

// Rest Operator
function sum(...nums) {
  return nums.reduce((a, b) => a + b, 0);
}
console.log("Sum:", sum(1, 2, 3, 4, 5));

// Enhanced Object Literals
const skill = "Backend";
const developer = {
  name,
  skill,
  greet() {
    console.log(`I'm ${this.name}, a ${this.skill} developer.`);
  },
};
developer.greet();


function sayHello() {
  console.log("Hello from sayHEllo function");
}
sayHello();

// Promises
const loadData = new Promise((resolve, reject) => {
  const success = true;
  setTimeout(() => {
    success ? resolve("Data loaded!") : reject("Failed to load data!");
  }, 800);
});
loadData
  .then((msg) => console.log(msg))
  .catch((err) => console.error(err))
  .finally(() => console.log("Promise completed!"));

// Classes
class Animal {
  constructor(name) {
    this.name = name;
  }
  speak() {
    console.log(`${this.name} makes a sound.`);
  }
}
class Dog extends Animal {
  speak() {
    console.log(`${this.name} barks!`);
  }
}
const dog = new Dog("Husky");
dog.speak();

// for...of Loop
const colors = ["red", "green", "blue"];
for (const color of colors) {
  console.log("Color:", color);
}

// Map and Set
const myMap = new Map();
myMap.set("name", "Kirtan");
myMap.set("role", "Developer");
console.log("Map Entries:");
for (const [key, value] of myMap) console.log(`${key} → ${value}`);

const mySet = new Set([1, 2, 2, 3]);
console.log("Unique Set:", mySet);

// Symbols
const id = Symbol("id");
const emp = { [id]: 101, name: "Kirtan" };
console.log("Symbol Property:", emp[id]);


// Async/Await
const fetchUser = () =>
  new Promise((resolve) => setTimeout(() => resolve("User fetched"), 1000));

async function getUserData() {
  try {
    const data = await fetchUser();
    console.log(data);
  } catch (err) {
    console.error("Error:", err);
  }
}
getUserData();

// Block Scoping & TDZ
{
  let scoped = "Inside block";
  console.log(scoped);
  // console.log(undeclaredVar); // ReferenceError: Cannot access before initialization
  let undeclaredVar = "TDZ example";
}

// New Built-in Methods
const arr = [10, 20, 30, 40];
console.log("find():", arr.find((x) => x > 25));
console.log("includes():", arr.includes(20));

const str = "Hello ES6!";
console.log("startsWith():", str.startsWith("Hello"));
console.log("endsWith():", str.endsWith("ES6!"));
console.log("repeat():", str.repeat(2));

const obj = { a: 1, b: 2 };
console.log("Object.keys():", Object.keys(obj));
console.log("Object.values():", Object.values(obj));
console.log("Object.entries():", Object.entries(obj));


// Miscellaneous
const arrConst = [1, 2, 3];
arrConst.push(4); // allowed, modifies content, not reference
console.log("Const Array Updated:", arrConst);

