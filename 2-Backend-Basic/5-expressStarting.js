import express from 'express'
const server = express()
server.get('',(req,res)=>{
    res.send('hello first express server')
    // res.end('hello forst express server') // diretly imported from http module .send is smarter version of end
    //prefer send over end
})
server.post('/about',(req,res)=>{
    res.status(201).send('post method called on about page')
    //can manually add status code but by default it provide 200
    //automatic controll error wrong page request.
})
server.get('/help',(req,res)=>{
    res.send([{
        name: 'kirtan',
        topic: 'express.js'
    },{name : 'crisinao',
        topic: 'puta barca'
    }])
})//automatic stringify to JSON
//can be array or object
server.listen(8000,()=>{
    console.log('port 8000 ready for listening');  
})
