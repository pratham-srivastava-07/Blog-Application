import { NextResponse } from "next/server";

export function GET() {
    return NextResponse.json({
        name: "Pratham",
        id:  7
    })
}