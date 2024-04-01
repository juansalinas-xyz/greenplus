import React from 'react'
import Image from 'next/image'

interface SlideButtonsProps {
  clickPrev?: () => void;
  clickNext?: () => void;
}

function SlideButtons({clickPrev, clickNext}:SlideButtonsProps) {
  return (
    <div className='w-full flex justify-end gap-5'>
        <button onClick={clickPrev} className='md:h-8 md:w-8 h-7 w-7 bg-gray-300 rounded-full flex justify-center items-center cursor-pointer hover:bg-gray-400'>
            <Image src={'/landing/slidebuttons/flecha.png'} alt={''} height={20} width={20} />
        </button>
        <button onClick={clickNext} className='md:h-8 md:w-8 h-7 w-7 bg-gray-300 rounded-full flex justify-center items-center cursor-pointer hover:bg-gray-400'>
            <Image src={'/landing/slidebuttons/flecha.png'} alt={''} height={20} width={20} className='rotate-180' />
        </button>
    </div>
  )
}

export default SlideButtons