import { NextResponse } from "next/server";
import { db } from "../../../db/client";

export async function GET() {
  const alerts = await db.fentanylAlert.findMany({ orderBy: { createdAt: "desc" } });
  return NextResponse.json({ alerts });
}

export async function POST(req: Request) {
  const body = await req.json();
  const alert = await db.fentanylAlert.create({ data: body });
  return NextResponse.json({ alert }, { status: 201 });
}

