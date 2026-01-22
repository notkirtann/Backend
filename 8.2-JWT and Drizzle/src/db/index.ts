import 'dotenv/config';
import chalk from 'chalk';
import { drizzle } from 'drizzle-orm/node-postgres';

//@ postgres://<username>:<password>@host:<port>/<db_name>
const db = drizzle(process.env.DATABASE_URL!);

console.log(chalk.green("My Database URL is: WORKING FINEE KID")); 

export default db;