import { NextRequest, NextResponse } from "next/server";

// let reqCount = 0;

// export default function middlware(req: NextRequest){
//     reqCount++;
//     console.log(`Request Count: ${reqCount}`);
//     const res = NextResponse.next();
//     return res;
// }
// The above code runs on every request to the Next.js app.



// To run the middleware on a specific route - Selectively running middlewares
// Make a config.
// export const config = {
//     matcher: "/api/*"
// }

// What if I want to run two or more middlewares?
// Here is how you do it:


 
export function middleware(request: NextRequest) {
  console.log(request.nextUrl.pathname)
  if (request.nextUrl.pathname.startsWith('/admin')) {
    return NextResponse.redirect(new URL('/signin', request.url))
  }
 
  if (request.nextUrl.pathname.startsWith('/dashboard')) {
    return NextResponse.next()
  }
}
