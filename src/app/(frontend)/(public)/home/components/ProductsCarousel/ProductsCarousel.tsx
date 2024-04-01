"use client"

import React, { Suspense } from 'react';
import Image from 'next/image';
import Product from '../Product/Product';
import Slider from "react-slick";

const PrevArrow  = () => (
    <button className='h-8 w-8 bg-gray-300 rounded-full flex justify-center items-center cursor-pointer hover:bg-gray-400'>
        <Image src={'/landing/slidebuttons/flecha.png'} alt={''} height={20} width={20} />
    </button>
);

const NextArrow = () => (
    <button className='h-8 w-8 bg-gray-300 rounded-full flex justify-center items-center cursor-pointer hover:bg-gray-400'>
        <Image src={'/landing/slidebuttons/flecha.png'} alt={''} height={20} width={20} className='rotate-180' />
    </button>
);

function ProductsCarousel({items}) {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,

        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              infinite: true,
              dots: true,
            },
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              initialSlide: 1,
            },
          },
        ],
      };

  return (
    <Slider {...settings}>
      {items.map((product, index) => (
        <div key={index}>
          <Product title={product.title} price={product.price} image={product.image} />
        </div>
      ))}
    </Slider>
  );
}

export default ProductsCarousel