// Type Narrowing and Type Guards
// ------------------------- Type Narrowing ------------------

function getChai(kind: string | number){
    if(typeof kind ==='string'){
    return `Making tea with ${kind} tea leaves.`;
    } else {
    return `Making tea with ${kind} grams of tea powder.`;
    }
}
console.log(getChai("green")); // Making tea with green tea leaves.`
console.log(getChai(50)); // Making tea with 50 grams of tea powder.

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


// ------------------------Exhaustive Checks:-------------------
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
    if(chai instanceof KulhadCHai){
        return chai.prepare()
    }else if(chai instanceof GlassChai){
        return chai.prepare()
    }else{
        const _exhaustiveCheck: never = chai;
        return _exhaustiveCheck;
    }
}

// --------------- Creating you Own Type

// custom type - example 1
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

// example 2
type MasalaChai = {type:"masala"; spicelvel:number}
type GingerChai = {type:"ginger"; hardleve:number}
type ChoclateChai = {type:"choclate"; flavour:string}

type Chai= MasalaChai | GingerChai | ChoclateChai
