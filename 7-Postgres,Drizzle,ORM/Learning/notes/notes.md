# ORM (Object-Relational Mapping)
ORM (Object-Relational Mapping) is a programming technique used to convert data between incompatible type systems in object-oriented programming languages. It allows developers to interact with a database using the programming language's native objects, rather than writing raw SQL queries.

#### Example of popular ORM Libraries:
- **Prisma**: A next-generation ORM that consists of a query engine, a type-safe database client, and a migration system. Designed to work with TypeScript and JavaScript. 
- **Drizzle ORM**: A lightweight and type-safe ORM for TypeScript and JavaScript, designed to work with SQL databases.
- **Mongoose**: An ODM (Object Data Modeling) library for MongoDB and Node.js.
- **Hibernate**: A Java-based ORM that provides a framework for mapping an object-oriented domain model to a relational database.
- **Sequelize**: A promise-based Node.js ORM for Postgres, MySQL, MariaDB, SQLite, and Microsoft SQL Server.
- **TypeORM**: An ORM that can run in Node.js, Browser, Cordova, PhoneGap, Ionic, React Native, NativeScript, Expo, and Electron platforms and can be used with TypeScript and JavaScript.

### Working of ORM
![alt text](orm-working.png)

### Installing Postgress on Docker
To install PostgreSQL using Docker, you can use the following command:
-create a new file named `docker-compose.yml` and add the following content:
```yml
services:
  postgres:
    image: postgres:17.4
    ports:
      - 5432:5432
    environment:
      POSTGRES_DB: MyDb
      POSTGRES_USER: notkirtann
      POSTGRES_PASSWORD: notkirtann
```
- Run the following command in the terminal to start the PostgreSQL container:
```bash
docker-compose up -d
```
### Connecting to PostgreSQL using Drizzle ORM
To connect to PostgreSQL using Drizzle ORM, follow these steps:
1. Create a folder name `drizzle` in project directory.
2. Create a drizzle.confi.ts file in root directory.
3. Now install the required packages using npm:
```bash
npm i drizzle-orm pg dotenv
npm i -D drizzle-kit tsx @types/pg
```
4. Run the docker container. `docker-compose up -d`
5. Create a `.env` file in the root directory and add the environment var.
```env
DATABASE_URL = postgres://<username>:<password>@host:<port>/<db_name>
```
6. Now Inside `src/db` folder create a file name `index.ts` and add the this:
```ts
import 'dotenv/config';
import { drizzle } from 'drizzle-orm/node-postgres';
import { connect } from 'node:http2';

const db = drizzle(process.env.DATABASE_URL!);

export default db;
```
7. Now you can use the `db` object to interact with your PostgreSQL database using Drizzle ORM.
8. Now create a schema file inside `drizzle` folder name `schema.ts` and define your tables.
```ts
import { PgTable, integer, pgTable, varchar } from 'drizzle-orm/pg-core'

const UserTable = pgTable('Users',{
    id: integer().primaryKey().generatedAlwaysAsIdentity(),
    name: varchar({length:255}).notNull(),
    age:integer().notNull(),
    email:varchar({length:255}).notNull().unique()
    
})

export default UserTable
```
9. Now inside `drizzle.config.ts` file add the following code:
```ts
import 'dotenv/config';
import { defineConfig } from 'drizzle-kit';

export default defineConfig({
  out: './drizzle',
  schema: './drizzle/schema.ts',
  dialect: 'postgresql',
  dbCredentials: {
    url: process.env.DATABASE_URL!,
  },
});
```
10. Now that you have created a schema using drizzle-kit , you can run the following command to push the schema to your PostgreSQL database:
```bash
npx drizzle-kit push
```
### Diff. b/w Drizzle-orm and drizzle-kit
| Drizzle-orm                                | Drizzle-kit                           |
|-------------------------------------       |-------------------------------------- |
| It is an ORM library used to interact with | It is a migration tool used to manage database schema changes. | 
  databases using TypeScript/JavaScript.     
| It provides a type-safe API for querying   | It helps in creating, applying, and reverting database migrations. |
  and manipulating data.                     
| It focuses on data modeling and querying.  | It focuses on database schema management. |
| It is used during application runtime.     | It is used during development and deployment. |


