"use client"

import React from 'react'
import Sponsor from '../Sponsor/Sponsor'
import { Reveal } from '../Reveal/Reveal'

function Sponsors() {
  return (
    <Reveal>
        <div className='w-screen flex justify-center px-20 my-12'>
            <Sponsor />
            <Sponsor />
            <Sponsor />
            <Sponsor />
            <Sponsor />
            <Sponsor />
        </div>
    </Reveal>
  )
}

export default Sponsors