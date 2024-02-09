import { dbConnect } from "@lib/dbConnect";
import { OtpData } from "@model/otp.interface";
import { OtpRepository } from "@repository/otp.repository";
import bcrypt from "bcrypt";

export const generateOTP = async (email: string): Promise<string> => {
  try {
    await dbConnect();

    const otp = `${Math.floor(1000 * Math.random() * 9000)}`;
    const hashedOtp = await bcrypt.hash(otp, 10);

    const existingRecord = await OtpRepository.findOne({ email });

    if (existingRecord) {
      await OtpRepository.findOneAndUpdate({ email }, { otp: hashedOtp });
    } else {
      await OtpRepository.create({ email, otp: hashedOtp });
    }

    return otp;
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
