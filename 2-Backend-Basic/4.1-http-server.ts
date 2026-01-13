import http, { IncomingMessage, ServerResponse } from 'http';

const server = http.createServer((req: IncomingMessage, res: ServerResponse) => {
    console.log('I got the incoming request');
    
    const url = req.url || '/';
    console.log(url);

    switch (url) {
        case '/':
            res.writeHead(200, { 'Content-Type': 'text/plain' });
            return res.end('Successful! Thanks for visiting.\nLanguage: ' + req.headers['accept-language']);
            
        case '/contact-us':
            res.writeHead(200); 
            return res.end('Contact me at insta @notkirtann');
            
        case '/project':
            res.writeHead(200);
            return res.end('Project page is under construction');
            
        default:
            res.writeHead(404);
            return res.end('Try finding what is already available.\nHala Madrid Y nada mas');
    }
});

const PORT: number = 8000;
server.listen(PORT, () => {
    console.log(`HTTP server is setup and running on port ${PORT}`);
});