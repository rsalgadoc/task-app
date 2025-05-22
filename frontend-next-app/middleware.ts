import { NextResponse } from "next/server";
import type { NextFetchEvent, NextRequest } from "next/server";
// import { verifyToken } from "./auth"; // Assuming you have an authentication function

export function middleware(req: NextRequest, event: NextFetchEvent) {
  try {
    const token = req.cookies.get("next-auth.session-token");
    if (!token?.value) {
      // Authentication failed
      return NextResponse.redirect(new URL("/auth/signin", req.url)); // Redirect to login
    }
    // Authentication successful, continue to the requested page
    return NextResponse.next();
  } catch (error) {
    // Handle authentication errors
    console.error("Authentication error:", error);
    return NextResponse.json(
      { success: false, message: "An error occurred during authentication." },
      { status: 401 }
    );
  }
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico, sitemap.xml, robots.txt (metadata files)
     */
    '/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt|auth/signin).*)',
  ],
}
