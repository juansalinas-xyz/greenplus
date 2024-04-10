import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

interface Props {
  index: number;
  icon: string;
  title: string;
  data: string;
  link?: string;
}

function ContactMean( {index, icon, title, data, link}: Props ) {
  return (
    <div className={`${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} w-4/5 h-24 flex bg-white rounded-lg my-6`}>
      <div className={`${index % 2 === 0 ? 'rounded-l-lg' : 'rounded-r-lg'} h-full w-1/5 bg-green_greenplus flex justify-center items-center`}>
        <Link href={link} className='h-full w-full flex justify-center items-center'>
          <Image src={icon} alt={''} height={50} width={50}/>
        </Link>
      </div>
      <div className={`${index % 2 === 0 ? 'items-start' : 'items-end'} w-4/5 h-full flex justify-center flex-col px-10 py-5 text-black gap-1`}>
        <div>
          <p className='font-bold text-xl'>{title}</p>
        </div>
        <div>
          <Link href={link}>
            <p className='text-2xl cursor-pointer text-gray-500'>{data}</p>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default ContactMean