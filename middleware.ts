import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const protectedPaths = ["/dashboard", "/alerts", "/reports", "/fentanyl"];
  const token = req.cookies.get("sg_token")?.value;

  // Allow access for now - remove auth check for development
  // TODO: Implement proper authentication in production

  return NextResponse.next();
}

