import React from 'react';
import Image from 'next/image';

function Footer() {
  return (
    <div className='w-screen h-52 bg-cover bg-left' style={{backgroundImage: 'url(/landing/fondo-cabecera-landing.png)'}}>
      <div className='flex flex-row w-full h-full bg-gren_footer bg-opacity-90'>
        <div className='w-full h-full flex justify-evenly items-center'>
          <div className='w-1/4 flex flex-col gap-1'>
            <div className='flex flex-row gap-1 text-xl font-black'>
              <p className='text-green_greenplus'>GREEN</p>
              <p className='text-white'>PLUS © 2024</p>
            </div>
            <div className='w-full'>
              <p className='text-white text-xs'>
                En Greenplus, nuestra visión se centra en construir un futuro donde la sostenibilidad sea accesible para todos, respaldada por la transparencia, rapidez y seguridad en todas las operaciones.
              </p>
            </div>
          </div>
          <div className='w-1/4 flex flex-col gap-3'>
            <div>
              <p className='text-white text-xs'>Transformando la Sostenibilidad con Accesibilidad, Transparencia, Rapidez y Seguridad.</p>
            </div>
            <div className='flex flex-row gap-4'>
              <Image src={'/landing/footer/redes_sociales/footer_instagram.png'} alt={''} width={25} height={25} className='cursor-pointer'/>
              <Image src={'/landing/footer/redes_sociales/footer_x.png'} alt={''} width={25} height={25} className='cursor-pointer'/>
              <Image src={'/landing/footer/redes_sociales/footer_facebook.png'} alt={''} width={25} height={25} className='cursor-pointer'/>
              <Image src={'/landing/footer/redes_sociales/footer_github.png'} alt={''} width={25} height={25} className='cursor-pointer'/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer