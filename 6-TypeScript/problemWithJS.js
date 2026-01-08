function greet (name) {
    return "Hello, ", name ;
}

console.log(greet("world")); // Output: Hello, WORLD!
console.log(greet(42));      // Runs without error, but unexpected output
// Output: Hello, 42
// The above code has a problem because JavaScript is dynamically typed.
// for this reason, TS would catch the error at compile time if we defined the type of 'name' as string.
// In TypeScript, we can define the type of 'name' to be a string to avoid such issues.

//  When you give superpower to JS, you get TS!
// Example in TypeScript:

/*  
-- TypeScript Version:
    function greet(name: string): string {
        return "Hello, " + name.toUpperCase();
    }
*/
// Now, if you try to pass a number to the greet function, TypeScript will throw a compile-time error,
// preventing potential runtime errors and ensuring that the function is used correctly.