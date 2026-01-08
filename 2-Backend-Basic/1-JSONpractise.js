import fs from 'fs';

const dataBuffer = fs.readFileSync('1-json.json')
console.log(dataBuffer);

const dataJSON = dataBuffer.toString();
console.log(dataJSON);

const data = JSON.parse(dataJSON)
console.log(data.author);

data.title = 'Cristiano Ronaldo'
data.author = 'Leo Messi'

console.log(data);

const dataToJSON = JSON.stringify(data)
fs.writeFileSync('1-json.json',dataToJSON)


