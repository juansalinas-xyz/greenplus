import React from 'react';
import Image from 'next/image';


function Footer() {
  return (
    <div className='w-screen h-52 bg-cover bg-left mt-96' style={{backgroundImage: 'url(/store/fondo-cabecera-store.png)'}}>
      <div className='flex flex-row w-full h-full bg-gren_footer bg-opacity-90'>
        <div className='w-full h-full p-6 flex flex-col justify-evenly items-center text-center md:text-start md:flex-row md:p-0 md:justify-evenly'>
          <div className='w-full flex flex-col gap-1 md:w-1/4'>
            <div className={`flex flex-row gap-0.5 text-lg font-black justify-center md:text-xl md:justify-start`}>
              <p className='text-green_greenplus'>GREEN</p>
              <p className='text-white'>PLUS © 2024</p>
            </div>
            <div className='w-full flex justify-center mb-2 md:mb-0 md:justify-start'>
              <p className='text-white text-xs md:text-xs'>
                En Greenplus, nuestra visión se centra en construir un futuro donde la sostenibilidad sea accesible para todos, respaldada por la transparencia, rapidez y seguridad en todas las operaciones.
              </p>
            </div>
          </div>
          <div className='w-full flex flex-col gap-3 md:w-1/4'>
            <div className='w-full flex justify-center mb-3 md:justify-start'>
              <p className='text-white text-xs'>Transformando la Sostenibilidad con Accesibilidad, Transparencia, Rapidez y Seguridad.</p>
            </div>
            <div className='w-full flex flex-row gap-4 justify-center md:justify-start'>
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