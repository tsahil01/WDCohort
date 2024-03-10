import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";
const client = new PrismaClient();


export async function GET() {
    const user = await client.user.findMany({});
    return Response.json({ user })
}

export async function POST(req: NextRequest){
    try {
        const body = await req.json();
        const newUser = await client.user.create({
            data: {
                username: body.username,
                password: body.password
            }
        }); 
        return NextResponse.json({
            newUser,
            msg: "created"
        })
    } catch(e) {
        return NextResponse.json({
            msg: "Err"
        })
    }
}