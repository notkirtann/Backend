import http from 'http'
import fs from 'fs'

const server = http.createServer((req,res)=>{
    console.log('Recived server requsest');

    const method = req.method
    const path = req.url
    const log =`Time : ${Date.now().toLocaleString()} Method: ${method} Path : ${path} \n `
    fs.appendFileSync('log.txt',log,'utf-8')

    switch (method) {
        case 'GET': {
            switch(path){
                case '/':
                    return res.writeHead(200).end('Hello from the home page');
                case '/about':    
                    return res.writeHead(200).end('Hello from the About page');
                case '/tweet':
                    return res.writeHead(200).end('Tweet loaded sucessfully')
                default:
                    return res.writeHead(404).end('Error 404')                
            }
        }
        case 'POST':{
            switch (path) {
                case '/tweet':
                    return res.writeHead(201).end('Tweet uploaded successfully')
            
                default:
                    return res.writeHead(401).end('unauthorized thing to do')
            }
        }
    }
})

server.listen(8000,()=>{
    console.log('http server start listening');
})