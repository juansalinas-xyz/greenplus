import { set } from "mongoose";
import React, { useRef } from "react";
import Slider from "react-slick";
import SlideButtons from "../SlideButtons/SlideButtons";

const Arrow = () => <div></div>;

function CarbonDataCarousel() {
  const data = [
    {
      numbers: "70 - 80%",
      data: "de la contaminación del aire en Ulán Bator es causada por el uso doméstico de carbón",
    },
    {
      numbers: "3,5X",
      data: "La muerte fetal es 3,5 veces más común en invierno que en verano.",
    },
    {
      numbers: "99%",
      data: "de la población mundial, en 2019, vivía en lugares donde no se logra cumplir con el nivel guía de calidad del aire de la OMS.",
    },
    {
      numbers: "+250",
      data: "millones de personas en América Latina viven ciudades sin información de calidad del aire.",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    prevArrow: <Arrow />,
    nextArrow: <Arrow />,
  };

  const sliderRef = useRef(null);

  const nextSlide = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  const prevSlide = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };

  return (
    <div>
      <p className="mb-5 ml-4 font-extrabold text-sm md:text-lg">
        La contaminación del aire y su impacto en la salud
      </p>
      <Slider {...settings} ref={sliderRef} >
        {data.map((item, index) => (
          <div>
            <div key={index} className="flex flex-row gap-7">
              <div className="w-auto">
                <p className="font-black text-lg md:text-2xl">{item.numbers}</p>
                <p className="text-xs font-light">{item.data}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
      <div className="mt-5">
        <SlideButtons clickPrev={prevSlide} clickNext={nextSlide} />
      </div>
    </div>
  );
}

export default CarbonDataCarousel;
