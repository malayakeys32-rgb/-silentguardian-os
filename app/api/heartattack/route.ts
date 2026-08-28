import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { heartRate, symptoms, userId } = body;

    if (!userId) {
      return NextResponse.json(
        { error: "Missing userId" },
        { status: 400 }
      );
    }

    const danger =
      heartRate < 40 ||
      heartRate > 160 ||
      (symptoms && symptoms.includes("chest_pain"));

    console.log("Heart Attack Check:", {
      userId,
      heartRate,
      symptoms,
      danger,
    });

    return NextResponse.json({
      status: "ok",
      danger,
      message: danger
        ? "Possible cardiac emergency detected"
        : "Vitals within safe range",
    });
  } catch (err) {
    console.error("Heart Attack Module Error:", err);
    return NextResponse.json(
      { error: "Server error" },
      { status: 500 }
    );
  }
}
