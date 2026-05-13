import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, request, subscribe } = body;

    if (!email || !request) {
      return NextResponse.json({ error: "Email and request are required." }, { status: 400 });
    }

    // Log for now; wire Resend here when API key is available
    console.log("Prayer request received:", { name, email, request, subscribe });

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "Internal server error." }, { status: 500 });
  }
}
