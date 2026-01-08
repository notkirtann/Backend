import {MongoClient,ObjectId} from 'mongodb'

const url = 'mongodb://localhost:27017/'
const client = new MongoClient(url)

async function main() {
    await client.connect()
    
    const db = client.db('newDataBase')
    const collection = db.collection('newCollection')
     
    try {
        const data = await collection.insertMany([{a:1},{b:2},{c:3},{d:4}])
        console.log('successfull insertion');
    } catch (error) {
        console.error('error :', error);
    }

    return 'HalaMadrid'
}
async function fetchOne(givenId,givenDatabase,givenCollection) {
    await client.connect()    

    const db = client.db(givenDatabase)
    const collection = db.collection(givenCollection)

    try {
        const objId = new ObjectId.createFromHexString(givenId)
        const data = await collection.findOne({ _id: objId })
        return data   
    } catch (error) {
        return ('errorrrr :',error)
    }
}
async function fetch(condition,gDatabase,gCollection) {
    await client.connect()
    const db = client.db(gDatabase)    
    const collection = db.collection(gCollection)

    try {
        const data = await collection.find(condition).toArray()
        return data
    } catch (error) {
        return ('error :',error)
    }
}
async function changeFunc(givenId,replaceWith,givenDatabase,givenCollection) {
    await client.connect()
    const db = client.db(givenDatabase)
    const collection = db.collection(givenCollection)


    try {
        const objId = ObjectId.createFromHexString(givenId)
        const data = await collection.updateOne
        ({_id:objId},
        {$set:replaceWith}
    )
        return (data.acknowledged,data.matchedCount,data.modifiedCount)
    } catch (error) {
        return ('error :',error.message)
    }

}
async function updateManyFunc(replaceWith,givenDatabase,givenCollection) {
    await client.connect()
    const db = client.db(givenDatabase)
    const collection = db.collection(givenCollection)

    try {
        collection.updateMany({},{ 
        $set: replaceWith
        
    })
        return 'successfull'
    } catch (error) {
        return ('error',error)
    }
}

async function delAll(toDel,givenDatabase,givenCollection){
    await  client.connect()
    const db = client.db(givenDatabase)
    const collection = db.collection(givenCollection)

    try {
        const objId = ObjectId.createFromHexString(toDel)
        const res = await collection.deleteOne({_id:objId})
        console.log(res.deletedCount);
        
        return 'success'
    } catch (error) {
        return('errorrr :',error)
    }
}
const id ='690456b30f54f5f5bbaac1e0'
const db ='myFootballDB'
const coll = 'Players' 
const find = {name:'kirtan'}

// fetch(find,db,'Players')
//     .then(console.log)
//     .catch(console.error)
    // .finally(()=>client.close())

// fetchOne(id,db,'Players')
//     .then(console.log)
//     .catch(console.error)
    // .finally(()=>client.close())

// changeFunc('6904563b0f54f5f5bbaac1dd',{name:'Arda Guler',club:'real Madrid'},db,'Players')
//     .then(console.log)
//     .catch(console.error)
//     .finally(()=>client.close())

// updateManyFunc({club: 'real Madrid'},db,coll)
//     .then(console.log)
//     .catch(console.error)
    // .finally(()=>client.close())

delAll('6904562c0f54f5f5bbaac1dc',db,coll)
    .then(console.log)
    .catch(console.error)
    // .finally(()=>client.close())