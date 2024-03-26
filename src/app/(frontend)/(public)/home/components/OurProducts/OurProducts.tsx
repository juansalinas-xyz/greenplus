import React from 'react';
import ProductsCarousel from '../ProductsCarousel/ProductsCarousel';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import localFont from 'next/font/local';
const insaniburger = localFont({src: '../../assets/fonts/Insaniburger.woff2'});

function OurProducts() {
  const products = [
    {
      title: "Peru",
      price: 100,
      image: "/landing/products/producto_1.jpg",
    },
    {
      title: "Argentina",
      price: 50,
      image: "/landing/products/producto_2.jpg",
    },
    {
      title: "Chile",
      price: 125,
      image: "/landing/products/producto_3.jpg",
    },
    {
      title: "Paraguay",
      price: 50,
      image: "/landing/products/producto_4.jpg",
    },
    {
      title: "Brasil",
      price: 200,
      image: "/landing/products/producto_5.jpg",
    },
  ];

  return (
    <div id='productos' className='w-screen flex justify-center my-12'>
      <div className='mb-12 flex flex-col justify-center' style={{width: '75%'}}>
        <div className='flex justify-center flex-col'> 
          <div className='w-full flex justify-center'>
            <h4 className={`${insaniburger.className} text-xl font-light mb-6`}>NUESTROS PRODUCTOS</h4>
          </div>
          <div>
            <ProductsCarousel items={products} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default OurProducts