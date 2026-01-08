function foo() {
    return
    {
        message: "Hello World"
    };
}
console.log(foo()); //Undefined
//      It doesn't see it as the single statement you intended. Instead, the ASI mechanism automatically inserts a semicolon after the return keyword, effectively turning it into two separate statements:

function foo() {
    return{
        message: "Hello World"
    };
}
console.log(foo()); //works