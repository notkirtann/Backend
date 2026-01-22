import 'dotenv/config'
import express, {type Request,type Response} from 'express'
import userRoutes from './routes/user.routes.js'
import adminRoutes from './routes/admin.routes.js'
import './db/index.js'
import chalk from 'chalk'
import { authenticationMiddleware } from './middlewares/auth.middleware.js'

const app = express()
const PORT = process.env.PORT

app.use(express.json())
app.use(authenticationMiddleware)

app.get('/',(req:Request,res:Response)=>{
    res.json([{mainRoute:['/user','/admin']},{subRoutes:["/user/signup","/user/login","/admin/users"]}])
})

app.use('/user',userRoutes)
app.use('/admin',adminRoutes)

app.listen(PORT,()=>{
    console.log(chalk.bgBlue(`Server is listening on port no: ${PORT}`));
})