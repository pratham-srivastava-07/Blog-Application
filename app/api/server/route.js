import { NextResponse } from "next/server";

export function GET() {
    return NextResponse.json({
        name: "Pratham",
        id:  7
    })
}
export async function POST(req) {
   const body = await req.json()

   return new NextResponse({username: req.body,email: req.body, password: req.body})
}

