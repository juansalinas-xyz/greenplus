"use client"

import React, { useState } from 'react'
import Image from 'next/image'

function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  
  function scrollToElement(destino: string) {
    const elementoDestino = document.getElementById(destino);
    elementoDestino.scrollIntoView({ behavior: 'smooth' });
  }

  function handleNosotrosClick() {
    scrollToElement("nosotros");
  }

  function handleProductosClick() {
    scrollToElement("productos");
  }

  function handleContactoClick() {
    scrollToElement("contacto");
  }

  return (
    <div className='flex sticky'>
      <div className='w-screen block md:flex justify-center'>
        <div className='md:hidden flex flex-row items-center justify-between p-6 w-screen h-16 bg-gray-100'>
          <p className='text-black text-2xl font-black'>Greenplus</p>
          <button onClick={() => setMenuOpen(!menuOpen)}>
            <Image src={'/landing/menu.png'} alt={''} height={35} width={35} />
          </button>
        </div>
        <div 
          className={`${
            menuOpen ? 'flex' : 'hidden'
          } md:flex flex-col items-end absolute z-10 pr-7 pb-7 pt-3 gap-8 w-screen text-base font-semibold md:gap-0 md:p-0 md:flex-row md:justify-between md:w-2/4 md:h-10 bg-gray-100 md:font-bold md:rounded-b-2xl md:text-sm`}
        >
          <div onClick={handleNosotrosClick} className='md:h-full md:w-1/5 md:flex justify-center items-center cursor-pointer hover:scale-110'>
            <p>Nosotros</p>
          </div>
          <div onClick={handleProductosClick} className='md:h-full md:w-1/5 md:flex justify-center items-center cursor-pointer hover:scale-110'>
            <p>Productos</p>
          </div>
          <div className='hidden md:h-full md:w-1/12 md:flex justify-center items-center text-lg text-green_greenplus'>
            <Image src={'/landing/logos/logoSolo.png'} alt={''} height={30} width={30}/>
          </div>
          <div className='md:h-full md:w-1/5 md:flex justify-center items-center cursor-pointer hover:scale-110'>
            <p>Tienda</p>
          </div>
          <div onClick={handleContactoClick} className='md:h-full md:w-1/5 md:flex justify-center items-center cursor-pointer hover:scale-110'>
            <p>Contácto</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NavBar