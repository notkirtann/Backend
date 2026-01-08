const explanCallback =()=>{
    setTimeout(()=>{
        const data = {
            lat:0,
            long:20
        }
        return data //cant use retun async code
    },2000)
}
const data = explanCallback()
console.log(data); //will return undefined
//callback function cant return value as it will execute when main is empty
//upar waale code function se kuch retun hii nhii aa rahaa hai kyuki wo settimeout k andar retun ho raha pr jo explanCallback turnat data constant ko value de raha so wo undefined de raha aur jab callstack khaali hogi tabhi callback event loop se bahar aayega 

//HOW YOU DO IT
// |
// |
// V

//use callback
const geoCode = (address,callback)=>{
    setTimeout(()=>{
        const data = {
            lat:0,
            long:20
        }
        callback(data)
    },2000)
}

geoCode('Bhopal',(data)=>{
    console.log(data)
})
console.log('Hello Node');
//callback helped

//another example

function sum(v1,v2,callback){
    setTimeout(()=>{
        callback(v1+v2)
    },2000)
}


sum(1,2,(ans)=>{
    console.log(ans);
})



