import React from 'react'
import NavBar from '../NavBar/NavBar'
import SlideButtons from '../SlideButtons/SlideButtons'

import localFont from 'next/font/local';
const insaniburger = localFont({src: '../../assets/fonts/Insaniburger.woff2'});

function Headboard() {
  return (
    <div>
      <div className='h-screen'>
        <div className='flex flex-col bg-cover bg-center h-screen w-screen' style={{backgroundImage: 'url(/landing/fondo-cabecera-landing.png)'}}>
          <NavBar />
          <div className='w-screen flex justify-center flex-grow mt-28'>
            <div className=' flex flex-row gap-5 text-white' style={{width: '75%'}}>
              <div className='w-1/2 flex flex-col gap-1'>
                <h1 className={`${insaniburger.className} text-8xl`}>Greenplus</h1>
                <h4 className='text-sm font-medium'>Nos destacamos como el puente que conecta a individuos con un estilo de vida sustentable y a empresas con operaciones respetuosas con el medio ambiente. Estamos comprometidos con descarbonizar el futuro y contribuir a la construcción de una economía sostenible.</h4>
                <button className='w-28 rounded-lg p-2 mt-12 bg-gray-300 text-black font-bold hover:bg-gray-400'>
                  TIENDA
                </button>
              </div>
              <div className='w-1/2 mt-auto mb-12'>
                <p className='mb-5 font-extrabold text-lg'>La contaminación del aire y su impacto en la salud.</p>
                <div className='flex flex-row gap-7'>
                  <div className='w-1/2'>
                    <p className='font-black text-2xl'>70 - 80%</p>
                    <p className='text-xs font-light'>de la contaminación del aire en Ulán Bator es causada por el uso doméstico de carbón</p>
                  </div>
                  <div className='w-1/2'>
                    <p className='font-black text-2xl'>3,5X</p>
                    <p className='text-xs font-light'>La muerte fetal es 3,5 veces más común en invierno que en verano.</p>
                  </div>
                </div>
                <div className='mt-5'>
                  <SlideButtons />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Headboard
