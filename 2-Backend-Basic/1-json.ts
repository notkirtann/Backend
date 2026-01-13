import fs from 'fs';

// 1. Define the structure of your data
interface Book {
    title: string;
    author: string;
}

const book: Book = {
    title: 'Cristiano',
    author: 'Kirtan'
};

// 2. Convert to JSON string
const bookJson: string = JSON.stringify(book);
console.log("JSON String:", bookJson);

// 3. Convert back to Object
// We use 'as Book' because JSON.parse returns 'any' by default
const bookNoJson = JSON.parse(bookJson) as Book;
console.log("Object:", bookNoJson);
console.log("Author:", bookNoJson.author);

// 4. Write to file
fs.writeFileSync('1-json.json', bookJson);

// 5. Read from file
// Adding 'utf8' here automatically returns a string instead of a Buffer
const dataJSON: string = fs.readFileSync('1-json.json', 'utf8');

// 6. Parse the file content back into an object
const data = JSON.parse(dataJSON) as Book;
console.log("Final Author from File:", data.author);