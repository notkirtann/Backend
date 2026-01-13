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

## Types and Interfaces:
Types and Interfaces: Both types and interfaces in TypeScript are used to define the shape of objects, but they have some differences in usage and capabilities.
### Types
Types: Types are more flexible and can represent primitive types, union types, intersection types, and more.

Need of creating Type:
```typescript
function serveChai(order:{type : string, sugar : number}){
    console.log(order);
}
function makeChai(order:{type : string, sugar : number}){
    console.log(order);
}
// better way
type ChaiOrder = {
    type : string, 
    sugar : number
}
function serveChaii(order:ChaiOrder){
    console.log(order);
}
function makeChaii(order:ChaiOrder){
    console.log(order);
}

```
Problem with Type:
```typescript
//problem-1:
 type CupSize = 'xs' | 'sm' | 'md' | 'lg'
 class GingerChai implements CupSize{}
//problem-2:
type Response = {res: true} | {res: false}
 class ResponseAPI implements Response{}
```
In above example, we cannot implement a type using a class. This is where interfaces come into play.
### Interfaces
Interfaces: Interfaces are specifically designed to define the shape of objects and can be implemented by classes. They support declaration merging, allowing multiple declarations with the same name to be combined.
```typescript
// eg solution-1:
interface CupSizee {
    size: 'xs' | 'sm' | 'md' | 'lg' 
 } 
 class GingerChai implements CupSizee{
    size: "xs" | "sm" | "md" | "lg" = "sm"
 }
// eg solution-2:
interface Responsee {
    res: true | false
}
class ApiResponse implements Responsee {
    res: boolean = true;
}
```
## Union vs Intersection Types:
Union Types: A union type allows a variable to hold values of multiple types. It is defined using the `|` operator.
```typescript
type teaType = 'lemon' | 'masala' | 'ginger' //@these are called literal types as we are defining the types
function orderChai(tea:teaType) {
    console.log(tea);
}
```
Intersection Types: An intersection type combines multiple types into one. It is defined using the `&` operator.
```typescript
type BaseChai = {teaLeaves:number}
type Extra = {masalaLevel: number}

type SpecialChai = BaseChai & Extra
const Tea:SpecialChai={
    masalaLevel:1,
    teaLeaves:2
}
```
#### Optional in Types:
```typescript
type User = {
    username:string
    bio?:string
}

const u1:User ={
    username:"notkirtann"
}
const u2:User={
    username:"maikirtanhoon",
    bio:'Hala Madrid Y nada Mas'
}
console.log(u1,'and',u2);
```
In this example, the `bio` property in the `User` type is optional, allowing objects of type `User` to either include or omit the `bio` property.
#### Readonly in Types:
```typescript
type Config ={
    readonly name:string
    age:number
}
const Cfg:Config={
    name:"notkirtann",
    age:22
}
Cfg.name="MaiKirtanHoon" //---> Error: Cannot assign to 'name' because it is a read-only property.
```

##Objects in TypeScript:
Objects in TypeScript: Objects in TypeScript can be defined using types or interfaces, allowing for structured data representation with type safety.

Example using Type:
```typescript
let Tea: {
    name:string;
    cost:number;
    isHot:boolean;
    indegredient:string[]
}
Tea ={
    name:"Adrak CHai",
    cost:50,
    isHot:true,
    indegredient:["mai","kya","khud","pr"]
}

type club ={
    name:string;
    rank:number;
    UclQualified:boolean;
    Captains:string[]
}
const RealMadrid:club={
    name:"Real Madrid",
    rank:1,
    UclQualified:true,
    Captains:["Dani","Fede","Vini","Courtois"]
}
```

```typescript
type Club ={
    name:string
}
let fcb:Club ={name:"FC Barca"}
let rm ={name:"Real Madrid",champs:true}
fcb=rm;
```
In above example, TypeScript allows assignment of `rm` to `fcb` because `rm` has at least the properties defined in the `Club` type. This is an example of structural typing, where compatibility is based on the shape of the objects rather than their explicit types.

one more example:
```typescript
type Player ={
    name:string
}
const messi={name:"Messi",alsoCalled:"Robberito"}
const ronaldo:Player= messi;
```
In this example, the `messi` object has an additional property `alsoCalled` that is not defined in the `Player` type. However, TypeScript allows the assignment of `messi` to `ronaldo` because `messi` has at least the properties defined in the `Player` type. This demonstrates TypeScript's structural typing, where compatibility is determined by the presence of required properties rather than exact type matches.

## OBJECT IN TypeScript
How to define object type in TypeScript:
```typescript
let Tea: {
    name:string;
    cost:number;
    isHot:boolean;
    indegredient:string[]
}
Tea ={
    name:"Adrak CHai",
    cost:50,
    isHot:true,
    indegredient:["mai","kya","khud","pr"]
}

type club ={
    name:string;
    rank:number;
    UclQualified:boolean;
    Captains:string[]
}
const RealMadrid:club={
    name:"Real Madrid",
    rank:1,
    UclQualified:true,
    Captains:["Dani","Fede","Vini","Courtois"]
}
```
In this example, we define the structure of the `Tea` object directly and use a `club` type to define the structure of the `RealMadrid` object. This ensures that both objects adhere to the specified types, providing type safety and clarity in the code.
### Structural Typing in TypeScript:
Structural Typing: TypeScript uses structural typing, meaning that compatibility between types is determined by their structure (i.e., the properties they have) rather than their explicit declarations.

Example:
```typescript
type Club ={
    name:string
}
let fcb:Club ={name:"FC Barca"}
let rm ={name:"Real Madrid",champs:true}
fcb=rm;
```
In above example, TypeScript allows assignment of `rm` to `fcb` because `rm` has at least the properties defined in the `Club` type. This is an example of structural typing, where compatibility is based on the shape of the objects rather than their explicit types.

Good Practice:
```typescript
type Item={name:string,quantity:number}
type Address={street:string,pincode:number}

type Order = {
    id:string
    item:Item[]
    address:Address
}
```
In this example, we define separate types for `Item` and `Address`, and then use them to create a more complex `Order` type. This modular approach enhances code readability and maintainability by clearly defining the structure of each component.

## Utility Types in TypeScript:
```typescript
// eg-1
type League ={
    name:string
    nation:string
    teams:number
}
const updateLeague = (updates:Partial<League>)=>{
        console.log("updating chai with",updates);
}
updateLeague({name:"La Liga"})
updateLeague({nation:"Spain"})
updateLeague({})

// eg-2
type Manchester ={
    name?:string
    found?:number
}
const Utd = (club:Required<Manchester>)=>{
    console.log(club);
    
} 
Utd({name:"Manchester",found:1905}) //---> with required even optional data becomes mandatory.

// eg-3
type Player ={
    name:string
    price:number
    available:boolean
}

type BasicBuyOption = Pick<Player,"name"|"price">

const PlayerInfo:BasicBuyOption ={
    name:"Valverde",
    price:220
}
// eg-4
// ! in this you use--->
 type PublicPlayer = Omit<Player,"price"> 
// will omit price from new publicPlayer you will create
```
In this example, we demonstrate the use of utility types `Partial`, `Required`, `Pick`, and `Omit` to manipulate types in TypeScript. These utilities help create more flexible and reusable type definitions, enhancing code maintainability and readability.

## Functions in TypeScript:
Functions in TypeScript: Functions in TypeScript can have typed parameters and return types, providing type safety and clarity in function definitions.

Example:
```typescript
function buyPlayer(club:string,value:number):string{
    return `The Market value of ${club} is ${value}`
}
function buyClub(available:string):string|null{
    if(!available) return null
    else return available
}

function match(day?:number){
    return day
}
function matchDay(date:string="Unavailable"){
    return date
}

function printing(toPrint:string): void {
    console.log(toPrint);
    
}
```
In this example, the `buyPlayer` function takes a `string` and a `number` as parameters and returns a `string`. The `buyClub` function returns either a `string` or `null`. The `match` function has an optional parameter, while the `matchDay` function has a default parameter value. The `printing` function has a return type of `void`, indicating it does not return any value. This demonstrates how TypeScript enhances function definitions with type annotations for better type safety and code clarity.

## Array, Enum and Tuple in TypeScript:
### Arrays
Arrays in TypeScript: Arrays in TypeScript can be defined with specific element types, ensuring type safety for array operations.

Example:
```typescript
const players:string[] = ["Cristiano","Sergio"]
const jersey:number[] = [1,2,3,4,5,6,7]

const rating:Array<number> = [1.4,5.2]

type PlayerDetail ={
    name:string,
    jerseyNo:number
}
const playerD:PlayerDetail[]=[
    {name:"fede",jerseyNo:8},
    {name:"goat",jerseyNo:7}
]
    //! readonly array
const clubs:readonly string[] =['RMCF','FCB','AC Milan']
// clubs.push('Varca') //@ readonly dont allow push

const city:number[][] =[
    [1,2,3],
    [4,5,6]
]
```
In this example, we define arrays with specific element types, such as `string[]` for player names and `number[]` for jersey numbers. We also demonstrate the use of a generic array type `Array<number>` and an array of objects `PlayerDetail[]`. Additionally, we show how to create a readonly array using the `readonly` modifier, which prevents modifications to the array.

### Enums
Enums in TypeScript: Enums in TypeScript are a way to define a set of named constants, making code more readable and maintainable.

Examples:
```typescript
enum bestClub{
    RealMadrid,
    BayernMunich,
    AC_Milan
}
const clubSelect = bestClub.RealMadrid

enum Status{ //code Not good practise
    POLICE = 100,
    AMBULANCE, //@automatic got 101
    OTHER //@automatic got 102
}

enum MadridCaptain{
    FEDE="Fede Valverde",
    DANI="Dani Carjaval",
    VINIJR="Vinicis Jr."
}

function clubCaptain(who:MadridCaptain){
    console.log(`Current Match Captain is ${who}`);
}
clubCaptain(MadridCaptain.VINIJR)

//! Hetrogenous Values in ENUM

enum playerData { //@ not a good practise to create a hetrogenous value enums
    jerseyNo=1,
    name="Courtois"
}

//@ with tuple  dont use push it gives unexpected behaviour and difficult to debug
```

### Tuples
Tuples in TypeScript: Tuples in TypeScript are a way to define an array with a fixed number of elements, where each element can have a different type.

Examples:
```typescript
let playerTuple:[string,number] =["a",1]
// playerTuple=[20,"a"] //@ wont work because seq matter

    //!readonly tuple
const locationTuple:readonly[number,number] =[28.744,75.17824]

    //!named tuple
const clubTuple:[name:string,found:number] =["Read-Madrid",1902 ]
```

In this example, we define a tuple `playerTuple` with a `string` and a `number`, demonstrating that the order of types matters. We also show a readonly tuple `locationTuple`, which prevents modifications to its elements. Additionally, we illustrate a named tuple `clubTuple`, where each element is given a descriptive name for better readability.

## OOPS in TypeScript:
Object-Oriented Programming (OOP) in TypeScript: TypeScript supports OOP principles such as classes, inheritance, encapsulation, and polymorphism, allowing for structured and reusable code.
### Classes
Classes in TypeScript: Classes in TypeScript are blueprints for creating objects, encapsulating data and behavior.

Example:
```typescript
class Club {
    name:string;
    found:number;

    constructor(name:string,found:number){
        this.name = name;
        this.found = found;
    }
}
const RealMadrid = new Club("Real Madrid",1902)

RealMadrid.found = 1902;
RealMadrid.name = "Los Blancos"
```
In this example, we define a `Club` class with properties `name` and `found`, along with a constructor to initialize these properties. We then create an instance of the `Club` class for "Real Madrid" and set its properties.

### Excess Modifiers
Access Modifiers in TypeScript: Access modifiers in TypeScript control the visibility of class members (properties and methods) to enforce encapsulation.

Example:
```typescript
class Player{  
    private name:string; //@excessable only within class
    private num:number;
    private salary="10M";

    public constructor(name:string,num:number){
        this.name = name;
        this.num = num;
    }
    reveal(){
        return `Salary of Jersey Num. ${this.num} aka ${this.name} is ${this.salary}`
    }

    protected Agent = "Jorge Mendes" //@excess by extended class and class
    #agentContract = "2-years" //@ another way of declarinng private

    agentContract(){
        return `Agent's ${this.#agentContract} of contract is left`
    }
}

class PlayerPersonal extends Player{
    getAgent(){
        return`Agent name is${this.Agent}` //@ only excess by class and the extended class only.
    }
    
}

const sal = new Player("Fede",8)
```
Explanation of all access modifiers used:
- `public`: Members are accessible from anywhere. By default, all class members are public if no access modifier is specified.
- `private`: Members are accessible only within the class they are defined in. They cannot be accessed from outside the class or by derived classes.
- `protected`: Members are accessible within the class they are defined in and by derived classes.
- `#` (private field): This is a newer syntax for declaring private fields in TypeScript (and JavaScript). Fields declared with `#` are truly private and cannot be accessed outside the class, even by derived classes.

In this example, we define a `Player` class with private properties `name`, `num`, and `salary`, which are only accessible within the class. The `reveal` method is public and can be called from outside the class. The `Agent` property is protected, allowing access from derived classes like `PlayerPersonal`. The `#agentContract` is a private field that cannot be accessed outside the class, even by derived classes. This demonstrates how access modifiers enforce encapsulation in TypeScript classes.

#### read only properties in class
```typescript
class Stadium{
    private readonly capacity:number ; //@can be assigned once than can only be read 

    constructor(capacity:number){
        this.capacity = capacity
        console.log(`Stadium total capacity is ${capacity}`);    
    }
}

class Coach{
    private _coachSalary = 10
    
    get coachSalary(){
        return this._coachSalary
    }

    set coachSalary(value:number){
        if(value<5){
            throw new Error("Deal Cancel")
        }else{
            this._coachSalary=value
        }
    }
}
const deal = new Coach()
deal.coachSalary=10;
```
In this example, the `Stadium` class has a `capacity` property that is marked as `readonly`, meaning it can only be assigned a value once during initialization and cannot be modified afterward. The `Coach` class demonstrates the use of getter and setter methods for the `_coachSalary` property. The getter method allows reading the salary, while the setter method includes validation logic to ensure that the salary cannot be set below a certain threshold. This encapsulation helps maintain the integrity of the class's data.

### Static Members
Static Members in TypeScript: Static members in TypeScript are properties or methods that belong to the class itself rather than to instances of the class.

Example:
```typescript
class PSG{
    static name = "Paris Saint Germain"
    constructor(public found:number){

    }
}
console.log(PSG.name); //@accessed by dot on class name directly
```
In this example, the `PSG` class has a static property `name` that holds the name of the club. Since it is declared as static, it can be accessed directly on the class itself using `PSG.name`, without needing to create an instance of the class. This is useful for properties or methods that are shared across all instances of the class or that do not pertain to any specific instance.

### Abstract Class
Abstract Classes in TypeScript: Abstract classes in TypeScript are classes that cannot be instantiated directly and are meant to be extended by other classes. They can contain abstract methods that must be implemented by derived classes.

Example:
```typescript
abstract class Drink{
    abstract make():void 
}

class Chai extends Drink{
    make(){
        console.log('level dekh kr baat kiya kr laala');
        
    }
}
```
In this example, the `Drink` class is declared as abstract and contains an abstract method `make()`. The `Chai` class extends the `Drink` class and provides an implementation for the `make()` method. Since `Drink` is abstract, it cannot be instantiated directly; instead, it serves as a blueprint for other classes that extend it. This allows for a common interface while enforcing that derived classes implement specific functionality.

### Composition Cocept
Composition in TypeScript: Composition is a design principle where classes are built by combining simpler, reusable components rather than relying solely on inheritance. This promotes flexibility and code reuse.

Example:
```typescript
class Engine{
    start(){
        console.log("Engine started");
        
    }
}
class Car{
    private engine:Engine;

    constructor(engine:Engine){
        this.engine = engine;
    }

    drive(){
        this.engine.start();
        console.log("Car is driving");
    }
}
```
In this example, the `Engine` class represents a simple component with a `start()` method. The `Car` class composes an instance of the `Engine` class, allowing it to use the engine's functionality through the `drive()` method. This approach promotes code reuse and flexibility, as different types of engines can be used with the `Car` class without needing to create a complex inheritance hierarchy.

## Interfaces and Generics in TypeScript:

### Interfaces
Interfaces in TypeScript: Interfaces in TypeScript define the shape of objects and can be implemented by classes to enforce a contract.

Example: 1
```typescript
interface Chai{
    flavour:string
    price:number
    milk?:boolean
}

const chai:Chai={
    flavour:"choclate",
    price:20
}
console.log(chai);
```
Example: 2
```typescript
interface Shop{
    readonly id:number
    name: string
}
const s:Shop={
    id:1,
    name:"siuuuuu"
}
// s.id = 2 //@readonly interface
```

Example: 3
```typescript
interface DiscountCalculator{
    (price:number):number
}
const apply50:DiscountCalculator= (p)=>p*0.5
```
Example: 4
```typescript
interface TeaMachine{
    start(price:number):void
    stop():void
}
const machine:TeaMachine={
    start(price:number){
        console.log("siuuuu");
    },
    stop() {
        console.log("le bhai system");
    },
}
```
In this example, we define an interface `Chai` that specifies the properties of a chai object, including an optional `milk` property. We then create an object `chai` that adheres to this interface. The second example demonstrates a `Shop` interface with a readonly `id` property, preventing modifications after initialization. The third example shows a function interface `DiscountCalculator`, which defines the signature for functions that calculate discounts based on price. The fourth example illustrates a `TeaMachine` interface with methods `start` and `stop`, and we create an object `machine` that implements this interface. These examples showcase how interfaces in TypeScript help define contracts for objects and functions, promoting type safety and code clarity.

#### Index Signatures
Index Signatures in TypeScript: Index signatures in TypeScript allow you to define the types of properties that are not known at compile time, enabling dynamic property names in objects.

Example: 
```typescript
interface PlayerName{
    [name:string]:number
}
const playerNumber:PlayerName={
    valverde:8,
    modric:10,
    cr7:7,
    ramos:4
}
```
In this example, the `PlayerName` interface uses an index signature to indicate that any property with a `string` key will have a `number` value. The `playerNumber` object adheres to this interface, allowing dynamic property names for player names and their corresponding jersey numbers. This feature is useful when dealing with objects that may have varying property names while still enforcing type safety for the values associated with those properties.

#### Multiple interface with same name
Example: 
```typescript
interface User{
    name:string
}
interface User{
    age:number
}

const u:User={
    name:"kirtan",
    age:23
}
```
In this example, we define two interfaces with the same name `User`. TypeScript automatically merges these interfaces, resulting in a single `User` interface that includes both the `name` and `age` properties. The object `u` adheres to this merged interface, demonstrating how TypeScript supports declaration merging for interfaces. This feature allows for more flexible and modular code, as different parts of the codebase can contribute to the same interface definition.

#### Merging vs Extending Interfaces
Merging vs Extending Interfaces in TypeScript: Merging interfaces combines multiple declarations of the same interface into one, while extending interfaces creates a new interface that inherits properties from one or more existing interfaces.

Example of Merging:
```typescript
interface Team{
    name:string
}
interface Team{
    rank:number
}
const rm:Team={
    name:"Real Madrid",
    rank:1
}
```
In this example, we define two interfaces with the same name `Team`. TypeScript merges these interfaces into a single `Team` interface that includes both the `name` and `rank` properties. The object `rm` adheres to this merged interface.

Example of Extending:
```typescript
interface Club{
    name:string
}
interface FootballClub extends Club{
    league:string
}
const fcb:FootballClub={
    name:"FC Barcelona",
    league:"La Liga"
}
```
In this example, the `FootballClub` interface extends the `Club` interface, inheriting its `name` property and adding a new `league` property. The object `fcb` adheres to the `FootballClub` interface, demonstrating how extending interfaces allows for the creation of more specialized types based on existing ones.
##### Merging two interface into the third
```typescript
interface A{a:string}
interface B{b:string}

interface C extends A,B{
    c:string
}
const c:C={
    a:"hola",
    b:"Danke",
    c:"hello"
}
```
In this example, we define two interfaces `A` and `B`, each with a single property. The `C` interface extends both `A` and `B`, inheriting their properties and adding its own property `c`. The object `c` adheres to the `C` interface, demonstrating how interfaces can be merged through extension to create more complex types.

### Generics
Generics in TypeScript: Generics in TypeScript allow you to create reusable components that can work with different data types while maintaining type safety.

Example: 1
```typescript
function WrapIn<T>(item:T):T[]{
    return [item]
}
```
In this example, the `WrapIn` function is a generic function that takes a parameter of type `T` and returns an array of type `T[]`. This allows the function to work with any data type while ensuring that the returned array contains elements of the same type as the input.

Example: 2
```typescript
function pair<A,B>(a:A,b:B):[A,B]{
    return[a,b]
}
pair("hello","hola")
pair("hello",20)
pair(20,"hello")
pair(12,{name:"kirtan"})
```
In this example, the `pair` function is a generic function that takes two parameters of different types, `A` and `B`, and returns a tuple containing both values. This allows the function to create pairs of any two types while maintaining type safety.

#### Interface with Generrics

Example: 1
```typescript
interface Box<T>{
    contents:T
}
const numberBox:Box<string>={
    contents:"kirtan the typescript learner"
}
const numberBoxCup:Box<number>={
    contents:10
}
```
Example: 2
```typescript
// @real world example
interface ApiResponse<T>{
    status:number,
    data:T
}
const res:ApiResponse<{player:string}> = {
    status:200,
    data : {player:"Fede Valverde"}
}
```
In this example, we define a generic interface `Box<T>` that has a property `contents` of type `T`. We then create two instances of `Box`: one for `string` contents and another for `number` contents. This demonstrates how generics allow for the creation of flexible and reusable interfaces that can work with different data types while maintaining type safety.

In the second example, we define a generic interface `ApiResponse<T>` that represents the structure of an API response, with a `status` property and a `data` property of type `T`. We then create an instance of `ApiResponse` where the `data` property is an object containing a `player` string. This showcases how generics can be used in real-world scenarios to create type-safe data structures for various use cases.

## Axios with TypeScript:
Using Axios with TypeScript: Axios is a popular HTTP client library that can be used with TypeScript to make type-safe API requests.
