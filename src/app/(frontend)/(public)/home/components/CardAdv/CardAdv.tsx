import Image from "next/image";
import React from "react";

interface Props {
  icon: string;
  title: string;
  img: string;
  img_responsive: string;
}

function Card({ icon, title, img, img_responsive }: Props) {
  return (
    <div className={`md:w-1/3 w-full bg-cover bg-center h-72 flex items-center md:mx-2 rounded-md shadow-md hover:shadow-gray-400 bg-white hover:shadow-2xl transition-all duration-300`}
      style={{
        backgroundImage: `url(${
          window.innerWidth < 768
            ? `${img_responsive}`
            : `${img}`
        })`,
      }}
    >
      <div className="h-full flex items-center flex-col gap-2 pt-10">
        <div className="w-full flex justify-center items-end h-1/3 rounded-t-md">
          <Image src={icon} alt={""} height={50} width={50} />
        </div>
        <div className="w-full h-1/3 rounded-b-md text-white flex">
          <div className="w-full flex justify-center items-start py-2 px-8">
            <p className="text-center font-black text-base">{title}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
