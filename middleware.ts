import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const protectedPaths = ["/dashboard", "/alerts", "/reports", "/fentanyl"];
  const token = req.cookies.get("sg_token")?.value;
  const isDevelopment = process.env.NODE_ENV !== "production";

  if (!isDevelopment && protectedPaths.some((p) => req.nextUrl.pathname.startsWith(p))) {
    if (!token) {
      const url = req.nextUrl.clone();
      url.pathname = "/";
      return NextResponse.redirect(url);
    }
  }

  return NextResponse.next();
}

