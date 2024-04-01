import React from "react";
import Slider from "react-slick";
import Image from "next/image";

const Arrow = () => (
  <div></div>
);

const WithUsCarrousel = ({ items, sliderRef }) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        prevArrow: <Arrow />, 
        nextArrow: <Arrow />,
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
    <Slider {...settings} ref={sliderRef} >
      {items.map((item, index) => (
        <div key={index} className={`h-72 w-60 bg-green_greenplus p-5 flex flex-col gap-3 rounded-lg text-white`}>
          <div className="flex flex-row gap-3 mb-3">
            <Image
              src={item.logo}
              alt={""}
              height={40}
              width={40}
              className="object-contain"
            />
            <h3 className="text-base font-black">{item.title}</h3>
          </div>
          <p className="text-sm">{item.desc}</p>
        </div>
      ))}
    </Slider>
  );
};

export default WithUsCarrousel;
