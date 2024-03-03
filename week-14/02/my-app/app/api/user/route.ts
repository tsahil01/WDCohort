import { NextRequest, NextResponse } from "next/server"
import { PrismaClient } from "@prisma/client";
const client = new PrismaClient();

export async function GET() {
    return Response.json({
        email: "S@S.C",
        name: "Sahil"
    })
}

export async function POST(req: NextRequest) {
    const body = await req.json();

    const user = await client.user.create({
        data:{
            username: body.username,
            password: body.password
        }
    });
    console.log(user.id);

    return NextResponse.json({
        msg: "Signed Up"
    }) 
}