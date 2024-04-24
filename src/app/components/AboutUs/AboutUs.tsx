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
    {
      img: "/landing/profiles/santiago.jpeg",
      name: "Santiago Iannello",
      position: "Design Lead",
      desc: "Mas de 2 años de experiencia en desarrollo de software.",
      linkedin: "https://www.linkedin.com/in/santiago-iannello/",
    },
    {
      img: "/landing/profiles/lautaro.jpeg",
      name: "Lautaro Carreño",
      position: "Frontend Developer",
      desc: "Mas de 2 años de experiencia en desarrollo de software.",
      linkedin: "https://www.linkedin.com/in/lautaro-carreño-9b9248b1/",
    },
  ];

  return (
    <div className="flex justify-center w-screen">
      <div className="w-full flex flex-col justify-center text-black font-bold">
        <h3 className="text-center text-4xl">¿Quienes somos?</h3>
        <p className="ml-1 text-lg text-center px-8 md:px-40 mb-14 mt-10 font-light text-gray-500">
          Nuestro equipo está compuesto de un plantel multidisciplinario con una
          extensa experiencia en la aplicación de tecnologías de vanguardia y el
          desarrollo de productos.
        </p>
        <div>
          <div className="flex justify-center">
            {/* Contenedor de la primera fila */}
            <div className="grid grid-cols-1 md:grid-cols-2 grid-rows-2 gap-10 md:gap-x-24">
              {profiles.slice(0, 2).map((profile, index) => (
                <Profile key={index} img={profile.img} name={profile.name} position={profile.position} desc={profile.desc} linkedin={profile.linkedin} />
              ))}
            </div>
          </div>
          <div className="flex justify-center mt-10 md:-mt-[280px] md:-mb-96">
            {/* Contenedor de la segunda fila */}
            <div className="grid grid-cols-1 md:grid-cols-2 grid-rows-2 gap-10 md:gap-x-24">
              {profiles.slice(2).map((profile, index) => (
                <Profile key={index} img={profile.img} name={profile.name} position={profile.position} desc={profile.desc} linkedin={profile.linkedin} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
