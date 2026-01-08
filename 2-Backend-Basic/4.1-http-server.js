import http from 'http'
const server = http.createServer((req,res)=>{
    console.log('i got the incoming request');
    console.log(req.url);
    
    
    //for req db cmds and all
    
    switch (req.url) {
        case '/':
            res.writeHead(200);
            return res.end('Successfull thanks for visting\n'+req.headers['accept-language'] )
        case '/contact-us':
            res.writeHead(300);
            return res.end('contact me at insta @notkirtann')
        case '/project':
            res.writeHead(200);
            return res.end('project page in under construction')
        default:
            res.writeHead(404);
            return res.end('try finding which alredy available\n Hala Madrid Y nada mas')
    } 
})
server.listen(8000,()=>{
    console.log('http server is setup and running on port 8000');
        
});