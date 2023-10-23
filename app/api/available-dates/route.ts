import { NextResponse } from "next/server";

export async function GET(req:any) {
    const response = await fetch("http://localhost:5000/available-dates", {headers: {
        "Content-Type": "application/json"
    }, cache: "no-cache"})
    const data = await response.json()
    return NextResponse.json(data)
}