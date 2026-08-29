import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);

  console.log("Fentanyl alert payload:", body);

  const level = body?.detectedLevel ?? 0;
  const isHigh = level >= 0.7;

  return NextResponse.json({
    status: isHigh ? "OVERDOSE_RISK_DISPATCH" : "LOW_RISK_MONITOR",
    received: body,
    timestamp: new Date().toISOString(),
  });
}

