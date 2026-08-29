import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);

  console.log("Heart-attack alert payload:", body);

  const isCritical =
    body?.heartRate && body.heartRate > 150 && body?.symptoms?.includes("chest_pain");

  return NextResponse.json({
    status: isCritical ? "CRITICAL_DISPATCH" : "NON_CRITICAL_LOG",
    received: body,
    timestamp: new Date().toISOString(),
  });
}
