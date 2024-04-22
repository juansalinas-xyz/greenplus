"use client"

import React, { useEffect, useState } from 'react'
import Image from 'next/image'

function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const shouldChangeWidth = scrollPosition > 50; // Ajusta este valor según tu preferencia
      setIsScrolled(shouldChangeWidth);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  function scrollToElement(destino: string) {
    const elementoDestino = document.getElementById(destino);
    elementoDestino.scrollIntoView({ behavior: 'smooth' });
  }

  function handleHomeClick() {
    scrollToElement("home");
  }
  
  function handleServicioClick() {
    scrollToElement("servicios");
  }

  function handleNosotrosClick() {
    scrollToElement("nosotros");
  }

  function handleProyectosClick() {
    scrollToElement("proyectos");
  }

  function handleContactoClick() {
    scrollToElement("contacto");
  }

  return (
    <div className={`flex fixed z-50`}>
      <div className='w-screen block md:flex justify-center'>
        <div className='md:hidden z-50 flex flex-row items-center justify-between p-6 w-screen h-16 bg-white'>
          <p className='text-black text-2xl font-black'>Green Plus</p>
          <button onClick={() => setMenuOpen(!menuOpen)}>
            <Image src={'/landing/menu.png'} alt={''} height={35} width={35} />
          </button>
        </div>
        <div 
          className={`${
            menuOpen ? 'flex' : 'hidden'
          } ${isScrolled ? 'md:mt-5 mt-0 md:rounded-xl rounded-b-3xl shadow-2xl transition-all duration-500' : 'mt-0 rounded-b-2xl transition-all duration-500'} md:flex flex-col items-end absolute pr-7 pb-7 pt-3 gap-8 w-screen text-base md:text-sm lg:text-base font-semibold md:static md:gap-0 md:p-0 md:flex-row md:justify- md:w-2/4 md:h-10 bg-white text-black md:font-bold`}
        >
          <div onClick={handleHomeClick} className='md:h-full md:w-1/5 md:flex justify-center items-center cursor-pointer hover:text-green_greenplus hover:rounded-l-xl transition-colors duration-300'>
            <p>Home</p>
          </div>
          <div onClick={handleServicioClick} className='md:h-full md:w-1/5 md:flex justify-center items-center cursor-pointer hover:text-green_greenplus transition-colors duration-300'>
            <p>Servicios</p>
          </div>
          <div onClick={handleNosotrosClick} className='md:h-full md:w-1/5 md:flex justify-center items-center cursor-pointer text-black hover:text-green_greenplus transition-colors duration-300'>
            <p>Nosotros</p>
          </div>
          <div onClick={handleProyectosClick} className='md:h-full md:w-1/5 md:flex justify-center items-center cursor-pointer hover:text-green_greenplus transition-colors duration-300 '>
            <p>Proyectos</p>
          </div>
          <div onClick={handleContactoClick} className='md:h-full md:w-1/5 md:flex justify-center items-center cursor-pointer hover:text-green_greenplus hover:rounded-r-xl transition-colors duration-300'>
            <p>Contacto</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NavBar