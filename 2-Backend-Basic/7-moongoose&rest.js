import validator from 'validator'

import mongoose from "mongoose";
const url = 'mongodb://localhost:27017/task-manager-app';
await mongoose.connect(url)

const User = mongoose.model('Users',{
    name : {
        type : String,
        required : true,
        trim : true
    },
    age :{
        type: Number,
        default: 0
    },
    email :{
        type : String,
        required : true,
        trim : true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error ('write valid email')
            }
        }
    },
    password :{
        type : String,
        required : true,
        trim : true,
        validate(value){
            if(!validator.isStrongPassword(value)){
                throw new Error('you dont satisfy password criteria')
            }
        }
    }
})

const Task = mongoose.model('Tasks',{
    description : {
        type: String,
        required : true
    },
    completed : {
        type:Boolean,
        validate(value){
            if(typeof value!=='boolean')
                throw new Error('please type bool expression') 
        }
    }
}) 

const me = new User({
    name : 'Luka Modric   ',
    password : 'LukaModric@142',
    email : 'modric14@acmilan.co',
})

me.save()
    .then(()=>console.log('success',me))
    .catch((error)=>console.log('error :',error))
    .finally(()=>mongoose.connection.close())

// const task = new Task({
//     description : 'mongo',
//     completed : true
// })

// task.save()
//     .then()
//     .catch()
//     .finally(()=>mongoose.connection.close())