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
    <div className="w-[95%] h-[360px] md:h-80 rounded-md bg-white shadow-md md:shadow-none flex flex-col mx-4 hover:scale-110 hover:shadow-2xl transition-transform">
      <div
        className="w-full h-2/5 flex justify-center items-end bg-cover bg-center rounded-t-md"
        style={{ backgroundImage: `url(${image})` }}
      >
        <p className="text-white text-xl font-bold pb-3 text-center">{title}</p>
      </div>
      <div className="w-full h-3/5 flex justify-center flex-col px-5 pb-5 pt-5">
        <div className="text-black text-center text-xs mb-2 hover:scale-105 transition-transform">{desc}</div>
        <div className="flex flex-row gap-1 text-black text-xs mt-auto hover:text-green_greenplus hover:scale-105 transition-transform "><p className="font-black">Ubicación:</p> {ubication}</div>
        <div className="flex flex-row gap-1 text-black text-xs hover:text-green_greenplus hover:scale-105 transition-transform"><p className="font-black">Responsable:</p> {responsible}</div>
        <div className="flex flex-row gap-1 text-black text-xs hover:text-green_greenplus hover:scale-105 transition-transform"><p className="font-black">Tamaño:</p> {size} HA</div>
        <div className="flex flex-row gap-1 text-black text-xs hover:text-green_greenplus hover:scale-105 transition-transform"><p className="font-black">Duracion:</p> {timescale} años</div>
        <div className="flex flex-row gap-1 text-black text-xs hover:text-green_greenplus hover:scale-105 transition-transform"><p className="font-black">Mitigación:</p> {mitigation} CO2/año</div>
        <div className="w-full flex justify-end mt-auto">
          <div className="flex justify-center items-center bg-green_greenplus rounded-full mt-2 mb-1 py-1.5 px-3 hover:scale-105 hover:shadow-lg transition-transform">
            <p className="text-white text-sm font-black">${price} USD</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;
