import { NextResponse } from "next/server";

export default async function middleWare(req) {
    if(req.url.pathname === '/') {
        try {
            console.log("Middle me hai");
        } catch (err) {
            console.log(err);
        }
    }
    return NextResponse.next()
}

export const matcher = {
    matcher: ['/'],
}