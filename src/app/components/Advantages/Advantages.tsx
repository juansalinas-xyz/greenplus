"use client";

import React from "react";

import { Reveal } from "../Reveal/Reveal";
import { loraItalic } from "src/app/fonts";
import AdvantagesCards from "../AdvantagesCards/AdvantagesCards";

function Advantages() {
  const cards = [
    {
      icon: "/landing/advantages/gestion.png",
      title: "Gestión de huella de carbono eficiente y transparente",
      img: "/landing/advantages/1.jpg",
      img_responsive: "/landing/advantages/4.jpg",
    },
    {
      icon: "/landing/advantages/rapido.png",
      title: "Rápida acción positiva sobre el medio ambiente con servicios y productos carbono neutral",
      img: "/landing/advantages/2.jpg",
      img_responsive: "/landing/advantages/5.jpg",
    },
    {
      icon: "/landing/advantages/barato.png",
      title: "Compensación de huella de carbono con precios más económicos",
      img: "/landing/advantages/3.jpg",
      img_responsive: "/landing/advantages/6.jpg",
    },
  ];

  return (
    <div id="" className="flex w-screen justify-center mt-2">
      <div
        className="md:mb-12 flex flex-col justify-center"
        style={{ width: "80%" }}
      >
        <div className="w-full flex justify-end mt-10">
          <div
            className={`w-full flex justify-center flex-col text-[16px] md:text-xl font-semibold`}
          >
            <Reveal>
              <div
                className={`${loraItalic.className} font-black flex justify-center md:justify-end md:pr-12 flex-row gap-1.5 bg-white py-5 px-2 md:p-5 rounded-xl w-full`}
              >
                <p className="flex text-green_greenplus">LAS VENTAJAS </p>
                <p className="text-black">QUE OFRECEMOS</p>
              </div>
            </Reveal>
          </div>
        </div>
        <div className="mt-8">
          <Reveal>
            <AdvantagesCards items={cards} />
          </Reveal>
        </div>
      </div>
    </div>
  );
}

export default Advantages;
