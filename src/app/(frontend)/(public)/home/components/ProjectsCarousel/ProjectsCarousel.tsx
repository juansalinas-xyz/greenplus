"use client";

import React from "react";
import Project from "../Project/Project";
import Slider from "react-slick";

function ProductsCarousel({ items }) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 768, 
        settings: {
          dots: false,
          infinite: true,
          speed: 2000,
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 3000,
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      {items.map((project, index) => (
        <div key={index}>
          <Project
            title={project.title}
            desc={project.desc}
            ubication={project.ubication}
            responsible={project.responsible}
            price={project.price}
            image={project.image}
            size={project.size}
            timescale={project.timescale}
            mitigation={project.mitigation}
          />
        </div>
      ))}
    </Slider>
  );
}

export default ProductsCarousel;
