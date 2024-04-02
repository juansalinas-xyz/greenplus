import React from 'react'
import Image from 'next/image'

function Project() {
  return (
    <div className='w-1/2 h-full rounded-md bg-white flex flex-col mx-4 hover:scale-110 hover:shadow-2xl transition-transform'>
        <div className='w-full h-1/2 flex justify-center items-end bg-cover bg-center rounded-t-md' style={{backgroundImage: 'url(/store/fondo-cabecera-store.png)'}}>
            <p className='text-white text-lg font-bold pb-2'>Bosques de Brasil</p>
        </div>
        <div className='w-full h-1/2 flex justify-center flex-col p-3'>
            <p className='text-black text-center text-xs mb-2'>
                Se ubica en la región centro oeste del Uruguay, en predios con pasturas degradadas que solían utilizarse para ganadería extensiva.
            </p>
            <p className='text-black text-xs'>Ubicación: Rio, Brasil</p>
            <p className='text-black text-xs'>Responsable: Gobierno de Brasil</p>
            <div className='w-full flex justify-end'>
                <div className='w-1/5 h-5 flex justify-center items-center bg-green_greenplus rounded-lg mt-2 mb-1'>
                    <p className='text-white text-xs'>$100 USD</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Project