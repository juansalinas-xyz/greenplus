import Image from 'next/image';
import React from 'react'

interface Props {
    icon: string;
    title: string;
    desc: string;
}

function Card( {icon, title, desc}: Props ) {
  return (
    <div className='md:w-1/4 md:h-96 w-full h-64 md:mx-2 hover:shadow-xl hover:scale-105 transition-transform'>
        <div className='bg-green_greenplus w-full flex justify-center items-center h-1/3 md:h-1/4 rounded-t-md'>
            <Image src={icon} alt={''} height={50} width={50}/>
        </div>
        <div className='bg-white w-full h-2/3 md:h-3/4 rounded-b-md text-black'>
            <div className='w-full h-auto flex justify-center pt-2 md:py-2 px-4'>
                <p className='text-center font-black text-base'>{title}</p>
            </div>
            <div className='w-full flex justify-center py-1 px-4'>
                <p className='text-center text-sm my-auto'>{desc}</p>
            </div>
        </div>
    </div>
  )
}

export default Card