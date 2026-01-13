import fs from 'fs';

// 1. Define the interface for your data structure
interface Book {
    title: string;
    author: string;
}

// 2. Read the file (returns a Buffer)
const dataBuffer: Buffer = fs.readFileSync('1-json.json');
console.log(dataBuffer); // Raw binary data

// 3. Convert Buffer to String
const dataJSON: string = dataBuffer.toString();
console.log(dataJSON); // JSON string

// 4. Parse JSON string into a Typed Object
const data = JSON.parse(dataJSON) as Book;
console.log(data.author);

// 5. Modify the object properties
data.title = 'Cristiano Ronaldo';
data.author = 'Leo Messi';
console.log(data);

// 6. Convert back to JSON and Save
const dataToJSON: string = JSON.stringify(data);
fs.writeFileSync('1-json.json', dataToJSON);