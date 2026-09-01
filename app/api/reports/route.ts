import { NextResponse } from "next/server";
import { prisma } from "../../../db/client";

export async function POST(req: Request) {
  const body = await req.json();
  const report = await prisma.report.create({ data: body });
  return NextResponse.json({ report }, { status: 201 });
}

