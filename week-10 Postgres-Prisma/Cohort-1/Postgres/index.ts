//Elephent PSQL Url =  postgres://drhqmydq:ilFd0wzGMdQpeI_9U3Co9LdN7w0Aho2f@kesavan.db.elephantsql.com/drhqmydq
import { Client } from 'pg';

async function getClient() {
    const client = new Client('postgres://drhqmydq:ilFd0wzGMdQpeI_9U3Co9LdN7w0Aho2f@kesavan.db.elephantsql.com/drhqmydq');
    await client.connect();
    return client;
}

let client = getClient()


console.log(getClient())


async function createTable() {
    const createUserQuety = `CREATE TABLE users(
        id SERIAL PRIMARY KEY,
        email VARCHAR(255) UNIQUE NOT NULL,
        password VARCHAR(255) NOT NULL
    )`
}
