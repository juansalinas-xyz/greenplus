"use client"

import React, { useState, useRef } from 'react'

import SlideButtons from '../SlideButtons/SlideButtons'
import WithUsCarrousel from '../WithUsCarrousel/WithUsCarrousel'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function WithUs() {
  const cards = [
    {
      logo: "/landing/carousel/captura.png",
      title: "Captura de carbono",
      desc: "Iniciativas ecológicas dedicadas a la captura de carbono desempeñan un papel crucial. Estos proyectos implementan tecnologías y prácticas sostenibles para reducir las emisiones de carbono y absorber el carbono existente en la atmósfera.",
    },
    {
      logo: "/landing/carousel/token.png",
      title: "Tokenización",
      desc: "Los proyectos ecosistémicos utilizan Greenplus para tokenizar el carbono capturado. Esta innovadora acción convierte las reducciones de carbono en activos digitales, haciéndolos fácilmente intercambiables y accesibles en nuestra plataforma.",
    },
    {
      logo: "/landing/carousel/personas.png",
      title: "Compensación de huella de carbono",
      desc: "Los individuos pueden comprar créditos de carbono en Greenplus para compensar su huella de carbono personal. Nuestra plataforma proporciona una experiencia fácil y directa para que las personas contribuyan activamente a la sostenibilidad.",
    },
    {
      logo: "/landing/carousel/empresa.png",
      title: "Compensación empresarial",
      desc: "Las empresas pueden adquirir créditos de carbono en Greenplus para compensar su huella de carbono corporativa. Este proceso contribuye significativamente a la responsabilidad social y ambiental de las empresas.",
    },
    {
      logo: "/landing/carousel/etiqueta.png",
      title: "Etiquetado de productos",
      desc: "Las empresas pueden obtener etiquetas de productos de carbono neutro. Esto permite a las compañías destacar sus productos como ambientalmente responsables, satisfaciendo la creciente demanda de consumidores conscientes de la sostenibilidad.",
    },
  ];

  const sliderRef = useRef(null);

  const nextSlide = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  const prevSlide = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };

  return (
    <div className='flex w-screen justify-center'>
      <div className='mb-12 flex flex-col justify-center' style={{width: '70%'}}>
        <div className='w-full flex justify-center mb-12'>
          <div className='flex justify-between flex-col text-xl font-black'>
            <p className='flex w-48 text-green_greenplus'>CON NOSOTROS</p>
            <p className='text-black'>PODRAS</p>
          </div>      
          <SlideButtons clickPrev={prevSlide} clickNext={nextSlide} />
        </div>
        <div>
          <WithUsCarrousel items={cards} sliderRef={sliderRef} />
        </div>
      </div>
    </div>
  )
}

export default WithUs