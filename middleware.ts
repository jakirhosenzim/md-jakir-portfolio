import { NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest) {
  if (!req.nextUrl.pathname.startsWith("/dashboard")) {
    return NextResponse.next();
  }

  const token = req.cookies.get("token")?.value;

  if (token !== "admin") {
    return NextResponse.redirect(
      new URL("/admin", req.url)
    );
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*"],
};