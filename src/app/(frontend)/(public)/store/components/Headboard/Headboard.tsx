import React from 'react'
import NavBar from '../NavBar/NavBar'
import WaveEffect from '../WaveEffect/WaveEffect'
import OurProjects from '../OurProjects/OurProjects'

function Headboard() {
  return (
    <div className='h-[70%] w-screen'>
        <div className='flex flex-col bg-cover bg-bottom h-full w-screen bg-fixed' style={{backgroundImage: 'url(/store/fondo-cabecera-store.png)'}}>
          <NavBar />
          <div className='h-full w-full flex justify-center items-center'>
            <p className='text-8xl text-white font-black mt-32 mb-20'>Tienda</p>
          </div>
          <WaveEffect />
        </div>
        
    </div>
  )
}

export default Headboard