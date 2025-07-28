/* eslint-disable @typescript-eslint/no-explicit-any */
import { type NextRequest, NextResponse } from "next/server";

export async function middleware(request: NextRequest): Promise<Response | void> {
  return NextResponse.next()
}

export const config = {
  runtime: "nodejs",
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico, sitemap.xml, robots.txt (metadata files)
     * - /img, /js, /fonts, /data (r&s website specific folders that do not need authentication)
     */
    "/((?!_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt|img|js|fonts|data).*)",
  ],
};
