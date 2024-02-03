// Function to create a users table =>

import { Client } from 'pg'
 
const client = new Client({
  connectionString: "postgres://drhqmydq:ilFd0wzGMdQpeI_9U3Co9LdN7w0Aho2f@kesavan.db.elephantsql.com/drhqmydq"
})


async function createUser() {
    client.connect()
    const result = await client.query(`
    CREATE TABLE users (
        id SERIAL PRIMARY KEY,
        username VARCHAR(50) UNIQUE NOT NULL,
        email VARCHAR(255) UNIQUE NOT NULL,
        password VARCHAR(255) NOT NULL,
        created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
        );`)
        
        console.log(result)
    }
    // createUser()
    
    async function insertUser(){
    client.connect()
    const result = await client.query(`
    INSERT INTO users (username, email, password)
    VALUES ($1, $2, $3);
    `, ['sahiltiwaskar', 'sahil@gmail.com', 'random'])
    console.log(result)
}

// insertUser()

async function getusers() {
    client.connect()
    const result = await client.query(`
    SELECT * FROM users;
    `)
    console.log(result);
}

// getusers();