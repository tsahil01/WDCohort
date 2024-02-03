"use strict";
// Function to create a users table =>
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const pg_1 = require("pg");
const client = new pg_1.Client({
    connectionString: "postgres://drhqmydq:ilFd0wzGMdQpeI_9U3Co9LdN7w0Aho2f@kesavan.db.elephantsql.com/drhqmydq"
});
function createUser() {
    return __awaiter(this, void 0, void 0, function* () {
        client.connect();
        const result = yield client.query(`
    CREATE TABLE users (
        id SERIAL PRIMARY KEY,
        username VARCHAR(50) UNIQUE NOT NULL,
        email VARCHAR(255) UNIQUE NOT NULL,
        password VARCHAR(255) NOT NULL,
        created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
        );`);
        console.log(result);
    });
}
// createUser()
function insertUser() {
    return __awaiter(this, void 0, void 0, function* () {
        client.connect();
        const result = yield client.query(`
    INSERT INTO users (username, email, password)
    VALUES ($1, $2, $3);
    `, ['sahiltiwaskar', 'sahil@gmail.com', 'random']);
        console.log(result);
    });
}
// insertUser()
function getusers() {
    return __awaiter(this, void 0, void 0, function* () {
        client.connect();
        const result = yield client.query(`
    SELECT * FROM users;
    `);
        console.log(result);
    });
}
// getusers();
