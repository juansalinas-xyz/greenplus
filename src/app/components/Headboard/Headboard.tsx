"use client"

import React, { useEffect, useState } from 'react'
import NavBar from '../NavBar/NavBar'
import { Reveal } from '../Reveal/Reveal';
import WaveEffect from '../WaveEffect/WaveEffect';
import Link from 'next/link';

function Headboard() {
  //Iphone/Ipad da un error en telefonos con la imagen de fondo del principio
  const [isIPhone, setIsIPhone] = useState(false);

  function scrollToContact() {
    const elementoDestino = document.getElementById("contacto");
    elementoDestino.scrollIntoView({ behavior: 'smooth' });
  }

  useEffect(() => {
    // Función para detectar si el dispositivo es un iPhone
    const isIPhoneDevice = () => {
      const userAgent = window.navigator.userAgent.toLowerCase();
      return /iphone/i.test(userAgent);
    };

    setIsIPhone(isIPhoneDevice());
  }, []);

  return (
    <div id='home'>
      <div className='h-[95vh] w-screen'>
        <div className={`flex flex-col bg-cover bg-center h-full w-screen ${isIPhone ? 'bg-scroll lg:bg-fixed' : 'bg-fixed'}`} style={{backgroundImage: 'url(/landing/headboard/fondo_headboard.jpg)'}}>
          <NavBar />
          <div className='w-screen h-full md:h-auto flex items-center justify-center flex-grow mt-28 md:mt-32'>
            <div className='flex flex-col gap-5 text-white md:flex-row md:justify-start' style={{width: '90%'}}>
              <div className='w-full flex justify-center gap-1 mt-0'>
                <Reveal>
                  <div className='w-full flex justify-center flex-col gap-10 mt-0 text-center md:block md:justify-start md:flex-row md:w-auto md:gap-0 '>
                    <h1 className={`flex font-black text-6xl mb-8 md:block md:text-5xl md:mb-5`}>Construye un futuro sostenible con Green Plus</h1>
                    <h4 className='hidden justify-center text-center text-2xl font-bold md:text-lg mb-7 md:mb-0 md:mt-4 md:block md:font-normal md:text-center'>Green Plus es una solución innovadora que combina tecnología de punta como blockchain y machine learning para gestionar la huella de carbono corporativa de forma eficiente y transparente.</h4>
                    <Link href={''} className='w-full flex justify-center md:w-auto md:block'>
                      <button onClick={scrollToContact} className='z-40 w-28 rounded-full p-2 bg-white text-black font-bold hover:bg-green_greenplus hover:text-white transition-all duration-500 md:mt-9 hover:scale-105'>
                        Contáctanos
                      </button>
                    </Link>
                  </div>
                </Reveal>
              </div>
            </div>
          </div>
          <WaveEffect />
        </div>
      </div>
    </div>
  )
}

export default Headboard
