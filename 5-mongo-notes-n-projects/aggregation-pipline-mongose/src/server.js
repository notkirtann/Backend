import 'dotenv/config'
import express from "express";
import connectDB from './db/db.js';
import chalk from 'chalk';
import shopRoutes from './routes/shop.js'


const app = express();
const PORT = process.env.ENV==='dev'?8000:process.env.PORT; 

app.use(express.json({limit:"16kb"}));
app.use(express.urlencoded({limit:"16kb"}));

app.use('/api',shopRoutes)

connectDB()
    .then(()=>{
        app.listen(PORT,()=>{
            console.log(chalk.bgBlue(`Server is running on PORT ${PORT}`));
        })
    })
    .catch((error)=>{
        console.log(`There is and error connecting PORT`,error);
    })
    .finally(()=>{
        console.log(chalk.black.bgWhite(`Both Database and PORT connection are succesfull`));
    })