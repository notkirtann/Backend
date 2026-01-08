
// TYPE ASSERATION 

// eg-1
let someValue: any = "Hello, TypeScript!";
let strLength: number = (someValue as string).length;
console.log(`String length: ${strLength}`);

// eg-2
type Book ={
    name:string
}
let bookString = '{"name":"Think and Win Like MS Dhoni"}'
let bookObject = JSON.parse(bookString) as Book

console.log(bookObject.name);

// eg-3
const inputElement = document.getElementById("username")as HTMLInputElement

// --------------unkown vs anyy


// anyyyy
let value:any

value = 'hello'
value = 1234
value = [1,2,3]
value.toUpperCase() //-----> no error

// unkownn
let newValue:unknown

newValue = 'hello'
newValue = 1234
newValue = [1,2,3]
// newValue.toUpperCase() //-----> error  
// for this you need to

if(typeof newValue ==='string'){
    newValue.toUpperCase()
}

// eg
let data:unknown = "chai with kirtan"
let strData:string = data as string // idhar phele unkown tha isile usko bolna pda ki maanlo string hi rahega


// eg
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

