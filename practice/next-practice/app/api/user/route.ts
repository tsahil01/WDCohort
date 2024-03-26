import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
    return NextResponse.json({
        msg: "Helllooooo"
    })
}

export async function POST(req: NextRequest) {
    const body = await req.json();
    console.log(body);
    return NextResponse.json({
        body
    })
}