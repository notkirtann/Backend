import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url'
import hbs from 'hbs'

//getting file directory
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const publicDirectoryPath = path.join(__dirname,'../public')
//creating directory for path and views by default views comes under src file where are main app.js is inside that views folder
const viewsPath = path.join(__dirname,'../templates/views')
const partialsPath = path.join(__dirname,'../templates/partials')

//initialize express
const app = express()

//init handlers
app.set('view engine','hbs')
app.set('views',viewsPath)
hbs.registerPartials(partialsPath)

//can we used to chage path directory also

//intialize public folder for root
app.use(express.static(publicDirectoryPath))

//root page
app.get('',(req,res)=>{
    res.render('index',{
        websiteName : 'Madridistas'
    })
})

app.get('/random',(req,res)=>{
    res.send('<h1>Random page</h1>')
}) //automatic understand html tag make heading

app.get('/help',(req,res)=>{
   res.render('help',{
        websiteName : 'Madridistas Help'
    })
})

app.get('/about',(req,res)=>{
    res.render('about',{
        websiteName : 'About Madridistas'
    })
})

app.get('/weather',(req,res)=>{
    if(!req.query.location){
        return res.send('cant access location please type')
    } 
    res.send({
        location : req.query.location
    })
    

})//automatic stringify to JSON
//can be array or object

app.get('/products',(req,res)=>{
    if(!req.query.search){
        res.send('invalid query search')
    } else{
       console.log(req.query.search);
        res.send({
            name:'kirtan',
            role: 'backend'
        })
    }
})

app.get(/.*/, (req, res) => {
    res.status(404).render('404', {
        websiteName: 'Page Not Found'
    })
})

app.listen(3000,()=>{
    console.log('server started on port 3000');
    console.log('Serving static files from:', publicDirectoryPath);
}) 
//to start server on specific port
//optional argument callback function
//async process 

/*
when someone tries to get something at a specific route?
We set that up using a method on app.
It is, app.get.
This lets us configure what the server should do
when someone tries to get the resource at a specific URL.
Maybe we should be sending back HTML,
or maybe we should be sending back JSON.
takes two argurment 'website location', (fucntion)

funtion itself take two argument(request, response)

The first is an object containing information
about the incoming request to the server.
This is commonly called REQ, which is short for request.

So this contains a bunch of methods allowing us
to customize what we're gonna send back to the requester.
This is commonly called RES, which is short for response.
*/

