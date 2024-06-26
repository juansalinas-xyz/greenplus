import Link from "next/link";
import React from "react";

interface Props {
  title: string;
  desc: string;
  ubication: string;
  responsible: string;
  size: string;
  timescale: number;
  mitigation: number;
  price: number;
  image: string;
}

function Project({ title, desc, ubication, responsible, size, timescale, mitigation, price, image }: Props) {
  return (
    <div className="group w-[95%] h-80 rounded-md bg-white flex flex-col ml-2 cursor-pointer hover:shadow-lg transition-transform">
      <div
        className="w-full h-3/5 md:h-2/4 flex justify-center items-end bg-cover bg-center rounded-t-md px-0 lg:px-0 md:px-2"
        style={{ backgroundImage: `url(${image})` }}
      >
        <p className="text-white text-xl font-bold pb-3 text-center">{title}</p>
      </div>
      <div className="w-full h-2/5 md:h-2/4 flex justify-center flex-col px-5 pb-5 pt-5">
        <div className="hidden md:block text-black text-center text-xs mb-2 hover:scale-105 transition-transform">{desc}</div>
        <div className="flex flex-row gap-1 text-black text-xs mt-auto hover:text-green_greenplus hover:scale-105 transition-transform "><p className="font-black">Ubicación:</p> {ubication}</div>
        <div className="flex flex-row gap-1 text-black text-xs hover:text-green_greenplus hover:scale-105 transition-transform"><p className="font-black">Responsable:</p> {responsible}</div>
        <div className="flex flex-row gap-1 text-black text-xs hover:text-green_greenplus hover:scale-105 transition-transform"><p className="font-black">Mitigación:</p> {mitigation} CO2/año</div>
      </div>
    </div>
  );
}

export default Project;