import { MongoClient, ObjectId } from 'mongodb'

const url = 'mongodb://localhost:27017';
const client = new MongoClient(url); //creating client
const id = new ObjectId()

const dbName = 'basicOfMongo';

console.log(id);
console.log(id.getTimestamp());

async function main() {
  // Use connect method to connect to the server
  await client.connect();
  console.log('Connected successfully to server');

  const db = client.db(dbName); //database trying to connect

  const collection = db.collection('documents'); //which collection we are trying to get

  try {
      const insertResult = await collection.insertMany([{ a: 1 }, { a: 2 }, { a: 3 }]); //collection loaded than using insert many inserting data in collections 
      console.log('Successfully insertion of :', insertResult.insertedIds);
      
  } catch (error) {
    console.error('Error Occured :',error)
  }
  return 'done.';
}

main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());