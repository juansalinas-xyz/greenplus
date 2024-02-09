import { NextRequest, NextResponse } from "next/server";
import { StatusCodes } from "http-status-codes";
import bcrypt from "bcrypt";

export async function GET() {
    // Example password
    const plainTextPassword = "TestPassWord";
    try {
        // Hash the password
        const hashedPassword = await bcrypt.hash(plainTextPassword, 10);
        console.log("Hashed Password:", hashedPassword);

        // Compare the hashed password with the plain text password
        const isMatch = await bcrypt.compare(plainTextPassword, hashedPassword);
        console.log("Password Match:", isMatch);

        return NextResponse.json(isMatch,
            {
                status: StatusCodes.OK
            })

    } catch (error) {
        console.error("Error:", error);
    }
}