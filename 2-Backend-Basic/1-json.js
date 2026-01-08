import fs from 'fs'

const book ={
    title: 'Cristiano',
    author: 'Kirtan'
}
// convert it to json
const bookJson =JSON.stringify(book);//converting to json
console.log(bookJson);//json

const bookNoJson = JSON.parse(bookJson);//json to object 
console.log(bookNoJson);
console.log(bookNoJson.author);

fs.writeFileSync('1-json.json',bookJson)

const dataBuffer = fs.readFileSync('1-json.json')
console.log(dataBuffer); //gets binary data not directly content of it
console.log(dataBuffer.toString()); //gets content of file in json format
const dataJSON = dataBuffer.toString(); //storing in variable
const data = JSON.parse(dataJSON); // converting json data into object
console.log(data.author);








