import 'dotenv/config';
import { drizzle } from 'drizzle-orm/node-postgres';

//@ postgres://<username>:<password>@host:<port>/<db_name>
const db = drizzle(process.env.DATABASE_URL!);

console.log("My Database URL is:", process.env.DATABASE_URL); 

export default db;