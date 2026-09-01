import { NextResponse } from "next/server";
import { prisma } from "../../../db/client";

export async function GET() {
  try {
    const alerts = await prisma.alert.findMany({ orderBy: { createdAt: "desc" } });
    return NextResponse.json({ alerts });
  } catch (error) {
    return NextResponse.json({ alerts: [], error: "Database unavailable" }, { status: 503 });
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const alert = await prisma.alert.create({ data: body });
    return NextResponse.json({ alert }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: "Database unavailable" }, { status: 503 });
  }
}

