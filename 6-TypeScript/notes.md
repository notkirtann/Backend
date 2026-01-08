### problem with JavaScript:
- Lack of static typing can lead to runtime errors.
- Difficult to manage large codebases due to dynamic typing.
- Limited tooling support for refactoring and code analysis.
- developers may face challenges in understanding code intent without explicit types.
- loose docs and code consistency.

example:
```javascript
function greet (name) {
    return "Hello, ", name ;
}

console.log(greet("world")); // Output: Hello, WORLD!
console.log(greet(42)); // Output Hello,42
``` 
In the above example, passing a number to the `greet` function leads to unexpected behavior.
TypeScript solution:
By adding type annotations, TypeScript can catch type-related errors at compile time.
example:
```typescript
function greet(name: string): string {
        return "Hello, " + name.toUpperCase();
    }
```
In this TypeScript example, the `name` parameter is explicitly typed as a `string`. If a number is passed to the `greet` function, TypeScript will raise a compile-time error, preventing potential runtime issues.


# TypeScript 
TypeScript is a statically typed superset of JavaScript that adds optional types, interfaces, and other features to enhance code quality and maintainability. It compiles down to plain JavaScript, making it compatible with any environment that runs JavaScript.
#### Benefits of TypeScript:
- Static typing helps catch errors at compile time.
- Improved tooling support for refactoring and code analysis.
- Better code documentation and readability.
- Enhanced IDE support with features like auto-completion and inline error detection.
- Easier maintenance of large codebases due to explicit type definitions.


#### Features of TypeScript:
- Type Checker: Allows developers to specify types for variables, function parameters, and return values.


#### Type Script Behind the Scenes:
TS -->(Addon) Proccess --> JS --> Browser/Node.js

**TS --> lexer --> parser `(AST)` --> Binder --> Checker --> Emitter --> .js, d.ts, .map**
- lexer: Tokenizes the source code into meaningful symbols.
- parser: Analyzes the tokenized code to create an Abstract Syntax Tree (AST).
- Binder: Resolves variable and function declarations and scopes.
    - Creates symbol tables for type checking.
    - Parent Pointer for nested scopes.
    - Flow Nodes for control flow analysis.
- Checker: Performs type checking based on the defined types and usage.(Syntax Checking + Semantic Checking)
    - Structural Checking: Compares types based on their structure rather than their names.
    - Short Circuiting: Stops type checking early if an error is found to improve performance.
- Emitter: Generates the final JavaScript code from the AST.
    - Produces .js files for execution.
    - Generates .d.ts files for type definitions.
    - Creates .map files for source mapping and debugging.
    ##### Note: Node.js just add emitter step to execute the TypeScript code.

## Type Annotations and Inference:
Type Annotations: Explicitly specify types for variables, function parameters, and return values.
Example:
```typescript
let age: number = 25;
function greet(name: string): string {
    return "Hello, " + name;
}
```
Types of Annotations:
- Primitive Types: `number`, `string`, `boolean`, `null`, `undefined`, `symbol`, `bigint`
- Object Types: `object`, `Array`, `Tuple`, `Enum`

Type Inference: TypeScript automatically infers types based on the assigned values.
Example:
```typescript
let age = 25; // inferred as number
let name = "Alice"; // inferred as string
```

## Union-And-Any Types:
Union Types: Allow variables to hold values of multiple types.
Example:
```typescript
let value: string | number;
value = "Hello"; // valid
value = 42; // valid
```

Any Type: A type that can hold any value, effectively opting out of type checking.
Example:
```typescript
let apiRequestStatus : 'pending' | 'success' | 'error' = "pending";
apiRequestStatus = "success"; // valid
apiRequestStatus = "failed"; // Error: Type '"failed"' is not assignable to type '"pending" | "success" | "error"'.
```

```typescript
const orders =["11",'22','33','44']

let currentOrder:string | undefined ;

for(let order of orders){
    if(order === '33')
        currentOrder = order;
        break;
}

console.log(currentOrder)
```
In this example, `currentOrder` can either be a `string` or `undefined`, accommodating the case where no matching order is found.

Why should we avoid `any` type?
Using the `any` type can lead to potential runtime errors and defeats the purpose of using TypeScript's static typing. It is generally recommended to use more specific types or union types to maintain type safety and improve code quality.

## Type Guards and Type Narrowing:
Type Guards: Type guards are runtime checks that allow you to narrow down the type of a variable within a specific scope.

Example:
```typescript
function isString(value: any): value is string {
    return typeof value === 'string';
}
function processValue(value: string | number) {
    if (isString(value)) {
        // Here, TypeScript knows 'value' is a string
        console.log(value.toUpperCase());
    } else {
        // Here, TypeScript knows 'value' is a number
        console.log(value.toFixed(2));
    }
}
```
Unknown Type: The `unknown` type is a safer alternative to `any`. It represents a value that could be of any type, but unlike `any`, you must perform type checks before performing operations on it.
Example:
```typescript
function processUnknown(value: unknown) {
    if (typeof value === 'string') {
        console.log(value.toUpperCase());
    } else if (typeof value === 'number') {
        console.log(value.toFixed(2));
    } else {
        console.log('Unsupported type');
    }
}
```
In this example, the `processUnknown` function safely handles a value of type `unknown` by performing type checks before using it.

### Type Narrowing:
Type Narrowing: Type narrowing is the process of refining the type of a variable based on control flow analysis. TypeScript automatically narrows types when it can determine more specific types based on conditions.
Example:
```typescript
function getChai(kind: string | number){
    if(typeof kind ==='string'){
    return `Making tea with ${kind} tea leaves.`;
    } else {
    return `Making tea with ${kind} grams of tea powder.`;
    }
}
console.log(getChai("green")); // Making tea with green tea leaves.`
console.log(getChai(50)); // Making tea with 50 grams of tea powder.
```
```typescript
// let msg:'green Tea' | 'Choclate Tea' | 'Ginger Tea'
function orderName(msg?:string){
    if(msg){
        return `Serving ${msg}`
    }else{
        return `Serving default Masala Chai`
    }
}
// msg = 'green Tea'
console.log(orderName());
```
### Type Guards with Classes:
```typescript
class KulhadCHai {
    prepare() {
        return "Preparing Kulhad Chai";
    }
}
class GlassChai {
    prepare() {
        return "Preparing Glass Chai";
    }
}
function prepare(chai: KulhadCHai | GlassChai){
    if(chai instanceof KulahadCHai){
        return chai.prepare()
    }else if(chai instanceof GlassChai){
        return chai.prepare()
    }else{
        const _exhaustiveCheck: never = chai;
        return _exhaustiveCheck;
    }
}
```
#### Creating Custom Type Guards:
```typescript
type ChaiOrder ={
    type : string,
    sugar : number
}
function isChaiOrder(obj:any):obj is ChaiOrder{
    return (
        typeof obj ==="object" && obj != null && typeof obj.type ==='string' && typeof obj.sugar ==='number'
    )
}

function serveOrder(item:ChaiOrder){
    if(isChaiOrder(item)){
        return `Serving ${item.type} Chai with Sugar ${item.sugar} gm.`
    }
}
```
In this example, the `isChaiOrder` function is a custom type guard that checks if an object conforms to the `ChaiOrder` type.

## Type Assertions:
Type Assertions: Type assertions allow you to override TypeScript's inferred type and specify a more specific type for a variable. This is useful when you have more information about the type than TypeScript can infer.
Example:
```typescript
let someValue: unknown = "Hello, TypeScript!";
let strLength: number = (someValue as string).length;
console.log(`String length: ${strLength}`);
```
In this example, we assert that `someValue` is of type `string` before accessing its `length` property. This allows us to safely use string methods on a variable initially typed as `unknown`.

Example:
```typescript
type Book ={
    name:string
}
let bookString = '{"name":"Think and Win Like MS Dhoni"}'
let bookObject = JSON.parse(bookString) as Book

console.log(bookObject.name);
```
In this example, we parse a JSON string and assert that the resulting object conforms to the `Book` type, allowing us to access the `name` property safely.

example:
```typescript
const inputElement = document.getElementById("username")as HTMLInputElement
inputElement.value = "NewUser";
console.log(inputElement.value);
```
In this example, we assert that the element retrieved by `getElementById` is an `HTMLInputElement`, allowing us to access the `value` property specific to input elements.

### Unkown vs Any:
```typescript

let value:any
value = 'hello'
value = 1234
value = [1,2,3]
value.toUpperCase() //-----> no error


let newValue:unknown
newValue = 'hello'
newValue = 1234
newValue = [1,2,3]
// newValue.toUpperCase() //-----> error  

if(typeof newValue ==='string'){
    newValue.toUpperCase()
}

```
In this example, using `any` allows for any operation without type checking, which can lead to runtime errors. In contrast, `unknown` requires type checks before performing operations, enhancing type safety.

Example:
```typescript
type Role = 'admin' | 'user' | 'superadmin'

function redirectTo(role:Role):void{
    if(role==='admin'){
        console.log(`redirect to ${role} page`);
        return;
    }
    if(role==='user'){
        console.log(`redirect to ${role} page`);
        return;
    }
    role;
}
redirectTo('admin');
```
In this example, the `redirectTo` function uses exhaustive checks to ensure all possible `Role` values are handled. If a new role is added in the future, TypeScript will raise an error if it's not accounted for in the function, helping to maintain code correctness.

Here third role 'superadmin' is not handled in the function. So, TypeScript will raise an error at the line `role;` indicating that not all cases are covered. This helps in maintaining code correctness and ensures that all possible values of the `Role` type are handled appropriately.
