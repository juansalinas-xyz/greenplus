"use client"

import React from 'react'
import { Reveal } from '../Reveal/Reveal';

import localFont from 'next/font/local';
const insaniburger = localFont({src: '../../assets/fonts/Insaniburger.woff2'});

function Team() {
  return (
    <div className='w-screen flex justify-center my-12'>
      <div style={{width: '75%'}}>
        <Reveal>
          <div>
            <div className='w-full flex justify-center'>
              <h4 className={` text-xl font-semibold text-green_greenplus mb-6`}>NUESTRO EQUIPO</h4>
            </div>
            <div className='flex justify-end w-full h-80 mb-12 rounded-lg bg-cover bg-center shadow-xl' style={{backgroundImage: 'url(/landing/team/fondo_team.jpg)'}}>
          
            </div>
          </div>
        </Reveal>
      </div>
    </div>
  )
}

export default Team