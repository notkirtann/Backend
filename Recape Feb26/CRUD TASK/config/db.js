import mongoose from 'mongoose';
import 'dotenv/config'
import chalk from 'chalk';

const url = process.env.MONGO_URL;

const connectDB = async () => {
  try {
    await mongoose.connect(url);
    console.log(chalk.bgWhite.black(`Database connected is connected to POrrt ${url}`));
  } catch (errir) {
    console.error(errir.message);
  }
};

export default connectDB;
