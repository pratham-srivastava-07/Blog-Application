import { NextResponse } from "next/server";

export function GET() {
    return NextResponse.json({
        name: "Pratham",
        id:  7
    })
}
export async function POST(req) {
    return NextResponse.json({
            name: "Movie",
            desc: "Love"
    })
}

