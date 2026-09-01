import { NextResponse } from "next/server";
import { prisma } from "../../../db/client";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const report = await prisma.report.create({ data: body });
    return NextResponse.json({ report }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: "Database unavailable" }, { status: 503 });
  }
}

