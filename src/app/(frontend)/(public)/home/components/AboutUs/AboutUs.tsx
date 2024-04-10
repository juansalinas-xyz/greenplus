import React from "react";
import Profile from "../Profile/Profile";

function AboutUs() {
  const profiles = [
    {
      img: "/landing/profiles/juan.jpeg",
      name: "Juan Salinas",
      position: "CEO",
      desc: "Experto en blockchain, con más de 10 años de experiencia en Ingeniería de Software.",
      linkedin: "https://www.linkedin.com/in/juansalinas-xyz/",
    },
    {
      img: "/landing/profiles/jorge.jpeg",
      name: "Jorge Agurto",
      position: "CTO",
      desc: "Más de 10 años de experiencia en Ingeniería de Software.",
      linkedin: "https://www.linkedin.com/in/jorge-esteban-agurto-9a612732/",
    },
  ];

  return (
    <div className="flex justify-center w-screen">
      <div className="w-full flex flex-col justify-center text-black font-bold">
        <h3 className="text-center text-4xl">¿Quienes somos?</h3>
        <p className="ml-1 text-lg text-center px-40 mb-14 mt-10 font-light text-gray-500">
          Nuestro equipo está compuesto de un plantel multidisciplinario con una
          extensa experiencia en la aplicación de tecnologías de vanguardia y el
          desarrollo de productos.
        </p>
        <div className="flex justify-center gap-24">
          {profiles.map((profile, index) => (
            <Profile key={index} img={profile.img} name={profile.name} position={profile.position} desc={profile.desc} linkedin={profile.linkedin} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
