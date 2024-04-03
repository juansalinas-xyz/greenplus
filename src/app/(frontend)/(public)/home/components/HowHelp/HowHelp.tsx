"use client"

import React from "react";

import localFont from 'next/font/local';
import { Reveal } from "../Reveal/Reveal";
const insaniburger = localFont({src: '../../assets/fonts/Insaniburger.woff2'});

import { loraItalic } from "src/app/fonts";

function HowHelp() {
  return (
    <div className="my-12 w-screen flex justify-center">
      <div style={{width: '75%'}}>
        <Reveal>
          <div className={` flex flex-row gap-1 mb-4 text-xl font-semibold`}>
            <p className="text-black">¿CÓMO AYUDA</p>
            <p className={`${loraItalic.className} flex text-green_greenplus`}>GREENPLUS</p>
            <p className="text-black">?</p>
          </div>
        </Reveal>
        <Reveal>
          <div className="h-1 w-full flex mb-6">
            <div className="flex-1 bg-green_greenplus rounded-l-2xl"></div>
            <div className="flex-1 bg-black rounded-r-2xl"></div>
          </div>
        </Reveal>
        <Reveal>
          <div className="flex items-end w-full h-96 mb-12 rounded-lg bg-cover bg-bottom shadow-xl bg-fixed" style={{backgroundImage: 'url(/landing/howhelp/fondo_howhelp.jpg)'}}>
            <div className="w-full h-4/5 py-4 px-4 bg-green_greenplus text-xs bg-opacity-80 rounded-lg md:h-2/5 md:rounded-b-lg md:rounded-t-none md:py-4 md:px-14 md:text-sm">
              <p className="text-white text-justify">
                Greenplus emerge como la solución innovadora y eficaz para el impacto devastador de las emisiones de carbono en nuestro medio ambiente. En nuestra plataforma, los productores pueden dar un paso revolucionario al tokenizar los carbonos capturados, permitiendo así que empresas y personas compensen su huella de carbono de manera más accesible y transparente. 
                Además, brindamos a las empresas la oportunidad de obtener etiquetas de productos de carbono neutro, destacando su compromiso con la sostenibilidad.
                Greenplus está transformando la lucha contra el cambio climático, ofreciendo una vía práctica y efectiva para que todos contribuyamos a la construcción de un futuro más sostenible.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </div>
  );
}

export default HowHelp;
