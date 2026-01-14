import express, { Application, NextFunction, Request,Response } from 'express'
import { loggerMiddleware } from './middleware/logger.js';
import bookRoutes from './routes/book.routes.js'

const app:Application = express()
const PORT:number = 8000

app.use(express.json());
app.use(loggerMiddleware)

//APP ROUTES
app.use('/',(req:Request,res:Response,next:NextFunction)=>{
    res.send("go to routes of name /books")
})
app.use('/books',bookRoutes)

app.listen(PORT,()=>{
    console.log(`server is working on PORT ${PORT}`); 
})