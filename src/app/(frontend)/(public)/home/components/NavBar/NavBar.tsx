import React from 'react'

function NavBar() {
  return (
    <div>
      <div className='w-screen flex justify-center'>
        <div className='flex flex-row w-2/4 h-10 bg-gray-100 font-bold rounded-b-2xl text-sm'>
          <div className='h-full w-1/5 flex justify-center items-center cursor-pointer hover:scale-110'>
            <p>Inicio</p>
          </div>
          <div className='h-full w-1/5 flex justify-center items-center cursor-pointer hover:scale-110'>
            <p>Nosotros</p>
          </div>
          <div className='h-full w-1/5 flex justify-center items-center text-lg text-green_greenplus'>
            <p>Bienvenido</p>
          </div>
          <div className='h-full w-1/5 flex justify-center items-center cursor-pointer hover:scale-110'>
            <p>Tienda</p>
          </div>
          <div className='h-full w-1/5 flex justify-center items-center cursor-pointer hover:scale-110'>
            <p>Contácto</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NavBar