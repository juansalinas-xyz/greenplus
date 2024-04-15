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

function ContactMean( {index, icon, title, data, link }: Props ) {
  return (
    <div className={`${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} w-full md:w-4/5 h-24 flex bg-white rounded-lg my-6 shadow-xl`}>
      <div className={`${index % 2 === 0 ? 'rounded-l-lg' : 'rounded-r-lg'} h-full w-1/4 md:w-1/4 bg-green_greenplus flex justify-center items-center`}>
        <Link href={link} className='hidden h-full w-full md:flex justify-center items-center'>
          <Image src={icon} alt={''} height={50} width={50}/>
        </Link>
        <Link href={link} className='flex h-full w-full md:hidden justify-center items-center'>
          <Image src={icon} alt={''} height={35} width={35}/>
        </Link>
      </div>
      <div className={`${index % 2 === 0 ? 'items-start' : 'items-end'} w-3/4 md:w-3/4 h-full flex justify-center flex-col px-2 md:px-10 py-5 text-black gap-1`}>
        <div>
          <p className='font-bold text-lg md:text-xl'>{title}</p>
        </div>
        <div>
          <Link href={link}>
            <p className='text-lg md:text-2xl cursor-pointer text-gray-500'>{data}</p>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default ContactMean