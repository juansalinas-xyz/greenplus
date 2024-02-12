import { generateOTP } from "@service/OtpService";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const email = req.nextUrl.searchParams.get("email");

  await generateOTP(email);

  return NextResponse.json({ msg: 'Email sent' });
}
