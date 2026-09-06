import { NextResponse, type NextRequest } from "next/server";

// Public content-testing mode: no authentication wall.
// Keep this lightweight so login can be re-enabled later without deleting auth code.
export function proxy(_request: NextRequest) {
  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)"],
};
