import 'dotenv/config';
import mongoose from 'mongoose';
import chalk from 'chalk';
import { dbName } from '../constant.js';

const url = process.env.MONGO_URL;

const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(`${url}/${dbName}`);
        console.log(chalk.bgGreen.black(`MongoDB Connected: ${connectionInstance.connection.host}/${dbName}`));
    } catch (error) {
        console.error(chalk.bgRed.white('MongoDB Connection Failed:'));
        console.error(chalk.red(error.message));
        process.exit(1); 
    }
};

export default connectDB;
