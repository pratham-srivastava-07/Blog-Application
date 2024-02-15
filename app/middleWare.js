import { NextRequest, NextResponse } from "next/server";

export default async function middleWare(NextRequest) {
   if(NextRequest.url.pathname === '/') {
    try {
        console.log("middle me hai");
    } catch (err) {
        console.log(err);
    }
   }
   return NextResponse.next()
}

export const matcher = {
    matcher: ['/'],
}