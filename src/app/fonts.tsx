import { Montserrat } from "next/font/google";
import { Ubuntu } from "next/font/google";

export const montserrat = Montserrat({subsets: ['latin']});
export const lora = Ubuntu({weight: ["400", "500", "700"], subsets: ['latin']}); 
export const loraItalic = Ubuntu({weight: ["700"], subsets: ['latin'], style: ['italic']}); 