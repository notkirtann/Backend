// ? Interface and Generics

// $ Interface

// eg-1
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

// eg-2
interface Shop{
    readonly id:number
    name: string
}
const s:Shop={
    id:1,
    name:"siuuuuu"
}
// s.id = 2 //@readonly interface

// eg-3
interface DiscountCalculator{
    (price:number):number
}
const apply50:DiscountCalculator= (p)=>p*0.5

// eg-4
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
// ! INDEX SIGNATURE

// eg-1
interface PlayerName{
    [name:string]:number
}
const playerNumber:PlayerName={
    valverde:8,
    modric:10,
    cr7:7,
    ramos:4
}

// ! multiple interface with same name
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

// !merging two interface into the third
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
