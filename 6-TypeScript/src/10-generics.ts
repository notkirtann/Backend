// ? Generics

//! syntax
function WrapIn<T>(item:T):T[]{
    return [item]
}

WrapIn("hello")
WrapIn(47)
WrapIn({name:"Fede"})

function pair<A,B>(a:A,b:B):[A,B]{
    return[a,b]
}
pair("hello","hola")
pair("hello",20)
pair(20,"hello")
pair(12,{name:"kirtan"})

// ! interface generics
interface Box<T>{
    contents:T
}
const numberBox:Box<string>={
    contents:"kirtan the typescript learner"
}
const numberBoxCup:Box<number>={
    contents:10
}

// @real world example
interface ApiResponse<T>{
    status:number,
    data:T
}
const res:ApiResponse<{player:string}> = {
    status:200,
    data : {player:"Fede Valverde"}
}
