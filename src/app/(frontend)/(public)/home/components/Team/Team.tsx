import React from 'react'

import localFont from 'next/font/local';
const insaniburger = localFont({src: '../../assets/fonts/Insaniburger.woff2'});

function Team() {
  return (
    <div className='w-screen flex justify-center my-12'>
      <div style={{width: '75%'}}>
        <div className='w-full flex justify-center'>
          <h4 className={`${insaniburger.className} text-xl font-light text-green_greenplus mb-6`}>NUESTRO EQUIPO</h4>
        </div>
        <div className='flex justify-end w-full h-80 mb-12 rounded-lg bg-cover bg-center shadow-xl' style={{backgroundImage: 'url(/landing/team/fondo_team.jpg)'}}>
          
        </div>
      </div>
    </div>
  )
}

export default Team