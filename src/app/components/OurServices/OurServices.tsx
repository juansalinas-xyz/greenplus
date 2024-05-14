"use client"

import React from 'react'

import { Reveal } from '../Reveal/Reveal';
import { loraItalic } from "src/app/fonts";
import OurServicesCards from '../OurServicesCards/OurServicesCards';

function OurServices() {
  const cards = [
    {
      icon: "/landing/ourservices/medicion.png",
      title: "Medimos tu huella de carbono",
      desc: "Con agentes automatizados, generamos un inventario de tus emisiones y aplicamos algoritmos de machine learning para identificar patrones, tendencias y oportunidades de mejora para reducir tu impacto ambiental.",
    },
    {
      icon: "/landing/ourservices/barato.png",
      title: "Compensar con créditos de carbono más económicos",
      desc: "Te aseguramos los precios más económicos de nuestra red de productores para compensar tu huella.",
    },
    {
      icon: "/landing/ourservices/trazabilidad.png",
      title: "Trazabilidad ampliada de la huella de carbono corporativa",
      desc: "Demuestra a tus clientes un real compromiso con una economía garantizando la transparencia con datos auditables para cualquier persona.",
    },
    {
      icon: "/landing/ourservices/qr.png",
      title: "Servicios y Productos carbono neutral",
      desc: "Demuestra a tus clientes tu compromiso con una economía sostenible lanzando al mercado servicios y productos carbono neutral con trazabilidad ampliada verificable desde un QR.",
    },
  ];

  return (
    <div id='servicios' className='flex w-screen justify-center mt-2 md:mb-10'>
      <div className='flex flex-col justify-center' style={{width: '80%'}}>
        <div className='w-full flex justify-center md:justify-start mt-12'>
          <div className={`w-full flex justify-center md:justify-start flex-col text-xl font-semibold`}>
            <Reveal>
              <div className={`${loraItalic.className} w-full font-black flex justify-center md:justify-start items-center flex-row gap-1.5 bg-white p-5 md:pl-11 rounded-xl`}>
                <p className='flex text-black'>¿CÓMO </p>
                <p className='text-green_greenplus'>LO HACEMOS?</p>
              </div>
            </Reveal>
          </div>
        </div>
        <div className='mt-8'>
          <Reveal>
            <OurServicesCards items={cards} />
          </Reveal>
        </div>
      </div>
    </div>
  )
}

export default OurServices