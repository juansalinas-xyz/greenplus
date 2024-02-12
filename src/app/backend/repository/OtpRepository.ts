import mongoose, { Schema } from "mongoose";
import { IOtpSchema } from "@model/otp.interface";
const OtpSchema = new Schema<IOtpSchema>(
  {
    email: {
      type: String,
      required: true,
    },
    otp: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const OtpRepository =
  mongoose.models.Otp || mongoose.model<IOtpSchema>("Otp", OtpSchema);

export { OtpRepository };
