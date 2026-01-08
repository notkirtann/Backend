function greet(name:string):string{
    return `Hello Mr. ${name}`
}
const name:string = "Kirtan";
console.log(greet(name));



// -----------------Type Infercencing---------------------------
let chai = "Chai aur code" // type inferncing automatic smjh jaayega
let cups = Math.random()

let ChannelName = "CodeWithKirtan"
// ChannelName = 1234 give red light and tell not assignable


// -----------------Type Annotions------------------------------
let chaiFlavour:string = "Masala Chai"
chaiFlavour = "Choclate Tea" // will work
// chaiFlavour = 2; wont work
console.log(chaiFlavour);


// -----------------Union-And-Any-------------------------------
let subs: number | string = 7  // yaha wo string number dono pr agree kr jaayega

let apiRequestStatus : 'pending' | 'success' | 'error' = "pending";
// yaha khud k types bhi bana skte hai phir bss usme se hi choose krna padega


let airLineSeat : 'window' | 'middle' | 'aisle' 
airLineSeat = "middle";

const orders =["11",'22','33','44']

let currentOrder:string | undefined ;

for(let order of orders){
    if(order === '33')
        currentOrder = order;
        break;
}

console.log(currentOrder)