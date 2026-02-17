import express, { json, urlencoded } from "express";
import connectDB from "./revision.db.js";
import cors from 'cors'
import cookieParser from "cookie-parser";

const app = express();

app.use(cors({
    origin:"http://localhost:8000/",
    credentials:true,
}))
app.use(json({limit:"16kb"}));
app.use(urlencoded({extended:true,limit:"16kb"}))
app.use(express.static('/public'))
app.use(cookieParser())
// app of cookie parser is to use cookie from browser and set 
connectDB()
    .then(()=>{
        app.listen(8000,()=>{
            console.log('server connected');
        })
    })
    .catch((error)=>{console.log('Connection Failed')})
    .finally(()=>{console.log('Here we Go!')});

export{app} 