import { useRouter } from "next/router";
import { NextRequest, NextResponse } from "next/server";

export function GET(req: NextRequest,  { params: { authRoutes } } : {
    params: {
        authRoutes: string[]
    }
}){
    return NextResponse.json({
        msg: "Hello",
        authRoutes
    })
}

