import sendgrid from "@sendgrid/mail";
import { NextResponse } from "next/server";

sendgrid.setApiKey(process.env.SENDGRID_KEY);

export const sendOtpEmail = async (userEmail: string) => {
  const msg = {
    to: userEmail,
    from: {
      name: "greenplus",
      email: process.env.GREENPLUS_EMAIL,
    },
    templateId: process.env.SENDGRID_TEMPLATE_ID,
    dynamicTemplateData: {
      name: 'Didi'
    }
  };

  try {
    await sendgrid.send(msg);
  } catch (error) {}
};
