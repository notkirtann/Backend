# JavaScript Recap Notes

## 1. Type Conversion & Comparisons

### Boolean Conversion

```js
Boolean("kirtan") // true
Boolean("")       // false
```

### Type Coercion

```js
1 + 2 + "2"   // "32"
"02" > 1      // true
"2" >= 1      // true
```

### Null Comparisons (Important)

```js
null > 0    // false
null == 0   // false
null >= 0   // true
```

Reason: `>=` converts `null` to `0`.

---

## 2. Data Types & Memory

### typeof

```js
typeof []        // "object"
typeof {}        // "object"
typeof function(){} // "function"
```

### Reference Behavior

Objects and arrays are **reference types**:

```js
let userTwo = userOne;
userTwo.email = "new@mail.com";
// userOne also changes
```

---

## 3. Strings

```js
const gameName = new String("Cristiano");
gameName[0]
gameName.slice(-9, 3)
```

### isNaN

```js
isNaN("1241.141a") // true
```

---

## 4. Math & Date

### Math

```js
Math.abs(-4)
Math.round(4.3)
Math.ceil(4.3)
Math.floor(4.3)
```

### Date

```js
new Date()
date.toString()
date.toLocaleString()
```

---

## 5. Arrays (Shallow Copy)

```js
const arr2 = arr; // reference copy
```

### Common Methods

* push / pop
* shift / unshift
* join()
* Array.isArray()
* Array.from("Kirtan")

### Object → Array

```js
Object.keys(obj)
Object.values(obj)
Object.entries(obj)
```

---

## 6. Objects

### this Difference

```js
obj.method = function() { return this.name } // correct

obj.arrow = () => this.name // wrong (arrow has no own this)
```

### Freeze Object

```js
Object.freeze(obj)
```

### hasOwnProperty

```js
obj.hasOwnProperty("email")
```

---

## 7. Singleton vs Non-Singleton

```js
const user2 = user1 // same reference (singleton behavior)

new User() // new instance each time (non-singleton)
```

---

## 8. Object Spread

```js
const merged = { ...p2, ...p1 }
// last object overrides
```

---

## 9. Functions & Hoisting

### Function Declaration (Hoisted)

```js
addOne()
function addOne(){}
```

### Function Expression (Not Hoisted)

```js
const addTwo = function(){}
```

### Arrow Shortcuts

```js
const add = (a,b) => a + b
const square = x => x * x
```

---

## 10. Operators

### Nullish Coalescing

```js
let name = user.name ?? "Guest"
```

### Ternary

```js
condition ? trueValue : falseValue
```

---

## 11. Loops

### for-of (values)

```js
for (const v of arr)
```

### for-in (keys/index)

```js
for (const i in arr)
```

### Map Iteration

```js
for (const [key, value] of map)
```

---

## 12. Array Higher Order Methods

### forEach

No return value.

### filter

Returns new array.

```js
arr.filter(x => x > 5)
```

### map

Transforms values.

```js
arr.map(x => x * 5)
```

### Chaining

```js
arr.map().filter().map()
```

---

## 13. reduce

Without initial value:

```js
arr.reduce((acc, val) => acc + val)
```

With initial value (recommended):

```js
arr.reduce((acc, val) => acc + val, 0)
```

Objects example:

```js
cart.reduce((acc, item) => acc + item.price, 0)
```

---

## 14. find & findIndex

```js
arr.find(x => x > 5)
arr.findIndex(x => x > 5)
```

---

## 15. Promises

### Basic Promise

```js
const p = new Promise((resolve, reject) => {})
```

### Handling

```js
p.then()
 .catch()
 .finally()
```

### Chaining

```js
.then(data => data.username)
.then(username => console.log(username))
```

---

## 16. Important Concepts

* Arrays & Objects → Reference types
* Spread → shallow copy
* Arrow functions → no own `this`
* `forEach` → no return
* Always use initial value in `reduce`
* `Array.from(obj)` works only for iterable/array-like

---

## 17. Common Pitfalls

* `null >= 0` is true
* Arrow function in object loses `this`
* `for-in` doesn’t work on Map
* `eval()` should be avoided
* Direct reference copy changes original

---

## Quick Interview Cheats

| Topic    | Key Point                |
| -------- | ------------------------ |
| reduce   | Use initial value        |
| this     | Arrow vs normal function |
| copy     | Spread = shallow         |
| objects  | Stored by reference      |
| promises | then → catch → finally   |

---
