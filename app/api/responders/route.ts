import { NextResponse } from "next/server";

export async function GET() {
  const responders = [
    {
      id: "r1",
      name: "Unit Alpha",
      distanceKm: 1.2,
      etaMinutes: 4,
    },
    {
      id: "r2",
      name: "Medic Bravo",
      distanceKm: 3.8,
      etaMinutes: 9,
    },
    {
      id: "r3",
      name: "Responder Charlie",
      distanceKm: 6.1,
      etaMinutes: 14,
    },
  ];

  return NextResponse.json({
    responders,
    timestamp: new Date().toISOString(),
  });
}
