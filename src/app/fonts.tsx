import { Montserrat } from "next/font/google";
import { Lusitana } from "next/font/google";
import { Roboto } from "next/font/google";
import { Oswald } from "next/font/google";
import { Poppins } from "next/font/google";
import { Kanit } from "next/font/google";
import { Quicksand } from "next/font/google";
import { Ubuntu } from "next/font/google";

export const montserrat = Montserrat({subsets: ['latin']});
export const lusitana = Lusitana({weight: "700", subsets: ['latin']});
export const roboto = Roboto({weight: "400", subsets: ['latin']}); 
export const oswald = Oswald({weight: "700", subsets: ['latin']}); 
export const poppins = Poppins({weight: ["700", "500", "300", "200"], subsets: ['latin']}); 
export const kanit = Kanit({weight: ["700", "500", "300", "200"], subsets: ['latin']}); 
export const quicksand = Quicksand({weight: ["700"], subsets: ['latin']}); 
export const lora = Ubuntu({weight: ["400", "500", "700"], subsets: ['latin']}); 
export const loraItalic = Ubuntu({weight: ["700"], subsets: ['latin'], style: ['italic']}); 