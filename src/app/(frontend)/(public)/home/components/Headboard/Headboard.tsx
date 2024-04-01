"use client"

import React from 'react'
import NavBar from '../NavBar/NavBar'
import { Reveal } from '../Reveal/Reveal';
import WaveEffect from '../WaveEffect/WaveEffect';
import CarbonDataCarousel from '../CarbonDataCarousel/CarbonDataCarousel';

import localFont from 'next/font/local';
const insaniburger = localFont({src: '../../assets/fonts/Insaniburger.woff2'});

import Link from 'next/link';


function Headboard() {
  return (
    <div>
      <div className='h-[122vh] w-screen'>
        <div className='flex flex-col bg-cover bg-center h-full w-screen bg-fixed' style={{backgroundImage: 'url(/landing/fondo-cabecera-landing.png)'}}>
          <NavBar />
          <div className='w-screen flex justify-center flex-grow mt-10 md:mt-32'>
            <div className='flex flex-col gap-5 text-white md:flex-row md:justify-start' style={{width: '75%'}}>
              <div className='w-full flex flex-col gap-1 mt-0 md:w-1/2'>
                <Reveal>
                  <div className='w-full flex justify-center flex-col gap-10 mt-0 md:block md:justify-start md:flex-row md:w-auto md:gap-0'>
                    <h1 className={`hidden font-black text-5xl mb-20 md:block md:text-8xl md:mb-4`}>Greenplus</h1>
                    <h4 className='flex justify-center text-center text-2xl font-bold md:text-sm mb-4 md:mb-0 md:mt-4 md:block md:font-normal md:text-justify'>Nos destacamos como el puente que conecta a individuos con un estilo de vida sustentable y a empresas con operaciones respetuosas con el medio ambiente. Estamos comprometidos con descarbonizar el futuro y contribuir a la construcción de una economía sostenible.</h4>
                    <Link href={'http://localhost:3000/tienda'} className='w-full flex justify-center md:w-auto md:block'>
                      <button className='w-28 rounded-lg p-2 bg-gray-300 text-black font-bold hover:bg-gray-400 md:mt-9'>
                        TIENDA
                      </button>
                    </Link>
                  </div>
                </Reveal>
              </div>
              <div className='w-full mt-36 mb-12 hidden md:mt-56 md:w-1/2 md:block'>
                <Reveal>
                  <CarbonDataCarousel />
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
