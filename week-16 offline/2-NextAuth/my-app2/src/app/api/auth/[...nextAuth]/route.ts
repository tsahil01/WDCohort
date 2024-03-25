import NextAuth from "next-auth/next";
import { NextRequest, NextResponse } from "next/server";
import CredentialsProvider from 'next-auth/providers/credentials';

// export function GET(req: NextRequest, { params }: { params: { nextAuth: string[] } }){
//     return NextResponse.json({
//         msg: "Next Auth Handler it is.",
//         params
//     })
// }

const handler = NextAuth({
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                username: { label:"Username", type: "text", placeholder: "John" },
                password: { label:"password", type: "text", placeholder: "password" },
            },

            async authorize(credentials: any) {
                
                return {
                    id: "User1"
                };
            },
        })
    ],
    secret: process.env.NEXTAUTH_SECRET
})


export { handler as GET, handler as POST }