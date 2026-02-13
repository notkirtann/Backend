import 'dotenv/config'
import express from 'express';
import chalk from 'chalk';
import taskRoutes from './routes/routes.js'
import connectDB from './config/db.js';

const app = express();
const PORT = process.env.ENV==='dev'?3000:process.env.PORT;

if (PORT === 3000) {
  connectDB();
  console.log(chalk.green('DB Connected (dev mode)'));
} else {
  console.log(chalk.yellow('DB connection skipped'));
}

app.use(express.json());
app.use('/tasks',taskRoutes);

app.listen(PORT,()=>{
    console.log(chalk.bgBlue(`Port is working on port num:${PORT}`));
})
