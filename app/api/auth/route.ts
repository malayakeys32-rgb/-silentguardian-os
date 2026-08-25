import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json();
  if (body.username && body.password) {
    return NextResponse.json({ token: "demo-token" });
  }
  return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
}

