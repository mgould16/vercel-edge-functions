import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const country = req.geo?.country || "Unknown";
  console.log(`Visitor Country: ${country}`);

  if (country === "GB") {
    return NextResponse.redirect("https://google.co.uk");
  }
  if (country === "US") {
    return NextResponse.redirect("https://google.com");
  }

  return NextResponse.redirect("https://wikipedia.org");
}

// ✅ Apply only to `/geo-test`
export const config = {
  matcher: "/geo-test",
};
