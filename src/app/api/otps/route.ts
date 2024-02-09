import { generateOTP } from "@service/otp.service";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    const email = req.nextUrl.searchParams.get("email");

    const otp = await generateOTP(email);

    return NextResponse.json({ otp });
}


