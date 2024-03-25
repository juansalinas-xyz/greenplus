import React from 'react'

interface Props {
  title: string;
  price: number;
  image: string;
}

function Product( {title, price, image}: Props ) {
  return (
    <div className='flex justify-center flex-col h-80 w-64 bg-cover bg-center rounded-lg relative' style={{backgroundImage: `url(${image})`}}>
      {/* <div className="h-full w-full flex justify-center flex-col rounded-b-lg absolute inset-0 bg-gradient-to-t from-green_greenplus to-transparent"> */}
        <div className='w-full flex justify-center py-2'>
          <p className='text-white text-xl font-black'>{title}</p>
        </div>
        <div className='flex flex-col justify-center w-full mt-auto'>
          <div className='w-full flex justify-center'>
            <div className='flex justify-center w-1/3 items-center py-1 bg-green_greenplus rounded-t-lg'>
              <p className='text-white font-black text-md'>${price} USD</p>
            </div>
          </div>
          <div className='flex justify-center items-center bg-black rounded-lg'>
            <p className='text-white font-black text-md py-1'>MAS INFORMACIÓN</p>
          </div>
        </div>
      {/* </div> */}
    </div>
  )
}

export default Product