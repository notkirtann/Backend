import express from 'express'
import userRoutes from './routes/user.routes.js'
const app = express()

app.use(express.json())
app.use('/user',userRoutes)

app.listen(8000,()=>{
    console.log('server is running on PORT 8000');
})