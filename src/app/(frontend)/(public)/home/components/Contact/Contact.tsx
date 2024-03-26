import React from 'react'

import localFont from 'next/font/local';
const insaniburger = localFont({src: '../../assets/fonts/Insaniburger.woff2'});

function Contact() {
  return (
    <div id='contacto' className='w-screen flex justify-center my-12'>
      <div style={{width: '75%'}}>
        <div className='flex justify-end w-full h-96 mb-12 rounded-l-lg rounded-r-3xl bg-cover bg-center shadow-xl' style={{backgroundImage: 'url(/landing/contact/fondo_contacto.jpg)'}}>
          <div className='h-full w-96 flex justify-center items-start pb-7 flex-col rounded-3xl bg-white shadow-xl'>
            <h4 className={`${insaniburger.className} my-5 text-xl font-light w-full flex justify-center`}>CONTÁCTANOS</h4>
            <div className='w-full flex flex-col justify-center gap-4'>
              <div className='w-full flex justify-center'>
                <input type="email" name="email" id="email" placeholder='Correo' className='w-4/5 h-8 p-4 rounded-full shadow-xl border border-zinc-500' />
              </div>
              <div className='w-full flex justify-center'>
                <textarea name="mensaje" id="mensaje" placeholder='Mensaje' className='w-4/5 h-32 resize-none p-4 rounded-3xl shadow-xl border border-zinc-500' />
              </div>
              <div className='ml-10 flex gap-2'>
                <input type="checkbox" name='politicas' id='politicas' className='h-3 w-3 mt-1' />
                <label htmlFor="politicas" className='text-sm'>Acepto las politicas de privacidad.</label>
              </div>
              <div className='w-full flex justify-center'>
                <button className='bg-black px-5 py-2 rounded-full text-white'>
                  ENVIAR
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact