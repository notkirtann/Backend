//$ Types and Interface

// $  ----------------- need of creating type---------------
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

//$ ------------- Problem with Type----------------

type TeaRecipe = {
    water:number,
    milk:number
}

class MasalaChai implements TeaRecipe{
    water = 100;
    milk= 50;
}
//! now problem begins
 type CupSize = 'xs' | 'sm' | 'md' | 'lg'
//# class GingerChai implements CupSize{}

type Response = {res: true} | {res: false}
//# class ResponseAPI implements Response{}

// creates problem due to change in type because A class can only implement an object type or intersection of object types with statically known members.

//? to tackle this : interface was introduced.

//$ INTERFACES

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

//  @ its is prefarable to use interface in class rather than type

// $ Union and Intersection

//! UNION ---- here means option can only be from lemon ginger and masala
type teaType = 'lemon' | 'masala' | 'ginger' //@these are called literal types as we are defining the types
function orderChai(tea:teaType) {
    console.log(tea);
}
//! INTERSECTION ----
type BaseChai = {teaLeaves:number}
type Extra = {masalaLevel: number}

type SpecialChai = BaseChai & Extra
const Tea:SpecialChai={
    masalaLevel:1,
    teaLeaves:2
}
// OPTIONAL DATA OPTION    
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

// READ ONLY DATA
type Config ={
    readonly name:string
    age:number
}
const Cfg:Config={
    name:"notkirtann",
    age:22
}
/*# Cfg.name="MaiKirtanHoon" */ //@ above will give error as it is readonly


// console.log(1426-(354+423+310)); --> aligarh house bill (10 Jan 26)
