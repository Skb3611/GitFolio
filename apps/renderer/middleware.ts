// middleware.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const SKIP_PATH_PREFIXES = [
  "/_next",
  "/api",
  "/static",
  "/favicon.ico",
  "/robots.txt",
  "/_next/image",
];

export function middleware(req: NextRequest) {
    const hostHeader = req.headers.get("host") || "";
    const hostname = hostHeader.split(":")[0]; // strip port if present
    const pathname = req.nextUrl.pathname;

  // 1) skip internal requests (assets, api, next internals)
  if (SKIP_PATH_PREFIXES.some((p) => pathname.startsWith(p))) {
    return NextResponse.next();
  }

  // 2) determine if there is a subdomain (first label)
  const parts = hostname?.split(".");
  // e.g. ["shubham","lvh","me"] or ["shubham","gitfolio","test"]
  if (parts && parts.length <= 2) {
    // no subdomain (e.g. gitfolio.test, localhost)
    return NextResponse.next();
  }

  const subdomain = parts?.[0];

  // 3) ignore service subdomains like 'www', 'portfolio', etc.
  if (!subdomain || ["www", "portfolio", "gitfolio", "localhost"].includes(subdomain)) {
    return NextResponse.next();
  }

  // 4) prevent double-rewrite: if path already points inside /portfolio, do nothing
  if (pathname.startsWith("/portfolio")) {
    return NextResponse.next();
  }

  // 5) perform rewrite and preserve existing path if any (e.g. /about)
  const url = req.nextUrl.clone();
  url.pathname = pathname === "/" ? `/portfolio/${subdomain}` : `/portfolio/${subdomain}${pathname}`;
  return NextResponse.rewrite(url);
}
