import { OtpData } from "@model/otp.interface";
import { verifyOTP } from "@service/otp.service";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const data: OtpData = await req.json();

  const isValid = await verifyOTP(data);

  if (isValid) {
    return NextResponse.json({ otp: isValid });
  } else {
    return NextResponse.json({ otp: isValid });
  }
}
