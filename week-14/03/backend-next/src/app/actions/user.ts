"use server";

import { PrismaClient } from "@prisma/client";
const client = new PrismaClient();

export async function signup(username: string, password: string){
    try {
        const newUser = await client.user.create({
            data: {
                username,
                password
            }
        }); 
        return true;
    } catch(e) {
        return false;
    }
}