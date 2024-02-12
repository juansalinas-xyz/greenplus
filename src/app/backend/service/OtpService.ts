import { dbConnect } from "@lib/dbConnect";
import { OtpRepository } from "@repository/OtpRepository";
import bcrypt from "bcrypt";
import { sendOtpEmail } from "./EmailNotificationsService";
import { OtpData } from "@model/otp.interface";

export const generateOTP = async (email: string): Promise<void> => {
  try {
    await dbConnect();

    const otp = `${Math.floor(1000 * Math.random() * 9000)}`;

    const hashedOtp = await bcrypt.hash(otp, 10);

    const existingOtp: OtpData = await OtpRepository.findOne({ email });

    if (existingOtp) {
      await OtpRepository.findOneAndUpdate({ email }, { otp: hashedOtp });
    } else {
      await OtpRepository.create({ email, otp: hashedOtp });
    }

    await sendOtpEmail(existingOtp.email);
  } catch (error) {}
};

export const verifyOTP = async ({ email, otp }): Promise<boolean> => {
  try {
    await dbConnect();

    const otpRecord = await OtpRepository.findOne({ email });

    const validOtp = await bcrypt.compare(otp, otpRecord.otp);

    clearExpired();

    return validOtp;
  } catch (error) {}
};

export async function clearExpired() {
  try {
    await OtpRepository.deleteMany({
      createdAt: { $lt: new Date(Date.now() - 15 * 60 * 1000) },
    });
  } catch (error) {
    console.log(error);
  }
}
