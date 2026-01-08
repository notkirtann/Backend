const http = require('http'); 
//importing global http in js module
//can add a path of our http module also but


//FILE SYSTEM
// CommonJS
const fs = require('fs') //importing file system

// ES Module
import fs from 'fs';

fs.writeFileSync('hello.txt','Hello from node js');
//create new text file in module same as folder as current file.

fs.appendFileSync('hello.txt',' Hello we are trying to append this to main file.')// use to append data not overwrite
//
/*
OTHER CORE MODULES
-https
-http
-fs
-path
-os
 */

//Node.js Server
//Node Core Modules
//Working with Reqs and Response
//Asynchronus Code and Event Loop

//How Web Works

console.log(); //is a part of runtime not javascript

const server = http.createServer(/*rqstListener or*/(req,res)=>{
    console.log(req);
    // process.exit();
    
}); 
//create server takes requestlistener as a arg its a function that will execute for every incoming request
// two argu createServer takes
// rqst(data about we rqst) and response(we send to server in response to it)
function rqstListener(rqst,res){
}
//can use aur create arrow func there in create server itself 

server.listen(3000)//starts a process takes optional arg like ports by default it take port 80in production 
//in our case local host
//3000 local host
//EVENT looping - keeps on running untill unregister
// http://localhost:3000/ if go here some data will reflect in terminal

