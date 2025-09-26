import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const token = request.nextUrl.searchParams.get("token");

  if (!token) {
    return NextResponse.json({ error: "No token provided" }, { status: 400 });
  }

  try {
    // Call Work.ink API
    const res = await fetch(`https://work.ink/_api/v2/token/isValid/${encodeURIComponent(token)}`, {
      method: "GET",
      headers: { "Accept": "application/json" },
    });

    const data = await res.json();

    // Return simplified response to Roblox
    return NextResponse.json({ valid: data.isValid });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Failed to validate token" }, { status: 500 });
  }
}
