import 'dotenv/config'
import express, {type Request,type Response} from 'express'
import userRoutes from './routes/user.routes.js'
import './db/index.js'
import chalk from 'chalk'

const app = express()
const PORT = process.env.PORT

app.use(express.json())

app.get('/',(req:Request,res:Response)=>{
    res.json([{mainRoute:'/user'},{subRoutes:["/user/signup","/user/login"]}])
})

app.use('/user',userRoutes)

app.listen(PORT,()=>{
    console.log(chalk.bgBlue(`Server is listening on port no: ${PORT}`));
})