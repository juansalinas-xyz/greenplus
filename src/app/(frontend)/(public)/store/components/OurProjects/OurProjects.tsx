"use client"

import React, { useState } from 'react'
import Project from '../Project/Project'
import SlideButtons from '../SlideButtons/SlideButtons';
import Filters from '../Filters/Filters';

const projects = [
  {
    title: 'Bosques de Brasil',
    desc: 'Se ubica en la región centro oeste de Brasil, en predios con pasturas degradadas que solían utilizarse para ganadería extensiva.',
    ubication: 'Rio, Brasil',
    responsible: 'Gobierno de Brasil',
    price: 150,
    image: '/store/projects/1.jpg',
    size: '60000',
    timescale: 20,
    mitigation: 28900
  },
  {
    title: 'Parque Nahuel Huapi',
    desc: 'Proyecto de conservación de bosques nativos en la ecorregión de los 7 lagos.',
    ubication: 'Bariloche, Argentina',
    responsible: 'Martinez SA',
    price: 75,
    image: '/store/projects/2.jpg',
    size: '28000',
    timescale: 100,
    mitigation: 23500
  },
  {
    title: 'Selva de Matavén',
    desc: 'Este proyecto busca mitigar el cambio climático, proteger la rica biodiversidad y generar fuentes de ingresos para las comunidades locales.',
    ubication: 'Medellin, Colombia',
    responsible: 'Gobierno de Medellin',
    price: 50,
    image: '/store/projects/5.jpg',
    size: '12000',
    timescale: 15,
    mitigation: 350200
  },
  {
    title: 'Chaco Paraguayo',
    desc: 'Este programa altamente escalable consiste en tierras agrícolas en todo el Chaco paraguayo que aplicarán una crianza racional de ganado.',
    ubication: 'Chaco Boreal, Paraguay',
    responsible: 'Gobierno de Paraguay',
    price: 200,
    image: '/store/projects/4.jpg',
    size: '40000',
    timescale: 10,
    mitigation: 13500
  },
  {
    title: 'Carbon azul - Mexico',
    desc: 'Las actividades de conservación incluyen la rehabilitación de canales de marea, la vigilancia comunitaria de las amenazas a los manglares y la biodiversidad.',
    ubication: 'Veracrux, Mexico',
    responsible: 'BlueMX',
    price: 220,
    image: '/store/projects/3.jpg',
    size: '450000',
    timescale: 50,
    mitigation: 1240000
  },
  {
    title: 'The Maísa',
    desc: 'El proyecto promueve la conservación y valorización del bosque ubicado en el centro endémico de Pará, en Brasil.',
    ubication: 'Moju, Brasil',
    responsible: 'Biofilica SA',
    price: 30,
    image: '/store/projects/6.jpg',
    size: '6000',
    timescale: 8,
    mitigation: 4700
  },
  {
    title: 'Energía hidráulica, Virunga',
    desc: 'Proyecto exclusivo de compensación de emisiones de carbono en el Parque Nacional de Virunga en la República Democrática del Congo.',
    ubication: 'Virunga, República Democrática del Congo.',
    responsible: 'TÜV NORD CERT GMBH',
    price: 95,
    image: '/store/projects/7.jpg',
    size: '18000',
    timescale: 20,
    mitigation: 46.000
  },
  {
    title: 'Reforestación de la Amazonia',
    desc: 'Proyecto para reforestar áreas deforestadas en la región amazónica.',
    ubication: 'Amazonas, Brasil',
    responsible: 'Green Amazon Initiative',
    price: 180,
    image: '/store/projects/8.jpg',
    size: '100000',
    timescale: 25,
    mitigation: 60000
  },
  {
    title: 'Parque Eólico Patagonia',
    desc: 'Desarrollo de un parque eólico en la región patagónica para generar energía renovable.',
    ubication: 'Chubut, Argentina',
    responsible: 'Energía Sustentable SA',
    price: 250,
    image: '/store/projects/9.jpg',
    size: '70000',
    timescale: 15,
    mitigation: 75000
  },
  {
    title: 'Bosque de Coníferas',
    desc: 'Conservación de bosques de coníferas en Canadá para proteger hábitats de vida silvestre.',
    ubication: 'British Columbia, Canadá',
    responsible: 'Canadian Forest Conservation Society',
    price: 120,
    image: '/store/projects/10.jpg',
    size: '50000',
    timescale: 30,
    mitigation: 40000
  },
  {
    title: 'Proyecto Solar Sahara',
    desc: 'Construcción de una granja solar en el desierto del Sahara para aprovechar la energía solar.',
    ubication: 'Sahara, África',
    responsible: 'SolarAfrica Ltd.',
    price: 300,
    image: '/store/projects/11.jpg',
    size: '150000',
    timescale: 20,
    mitigation: 85000
  },
  {
    title: 'Reforestación de los Andes',
    desc: 'Iniciativa para reforestar áreas degradadas en la cordillera de los Andes.',
    ubication: 'Cusco, Perú',
    responsible: 'Andes Reforestation Foundation',
    price: 200,
    image: '/store/projects/12.jpg',
    size: '80000',
    timescale: 18,
    mitigation: 55000
  },
  {
    title: 'Granja Solar Gobi',
    desc: 'Construcción de una granja solar en el desierto de Gobi para proporcionar energía limpia.',
    ubication: 'Gobi, Mongolia',
    responsible: 'Sunshine Energy Solutions',
    price: 280,
    image: '/store/projects/13.jpg',
    size: '120000',
    timescale: 25,
    mitigation: 70000
  },
  {
    title: 'Conservación del Arrecife de Coral',
    desc: 'Proyecto para proteger y restaurar arrecifes de coral en peligro.',
    ubication: 'Gran Barrera de Coral, Australia',
    responsible: 'Coral Conservation Alliance',
    price: 150,
    image: '/store/projects/14.jpg',
    size: '35000',
    timescale: 10,
    mitigation: 48000
  },
  {
    title: 'Parque Nacional de Yellowstone',
    desc: 'Programa de conservación y restauración del ecosistema en el Parque Nacional de Yellowstone.',
    ubication: 'Wyoming, Estados Unidos',
    responsible: 'Yellowstone Conservation Trust',
    price: 220,
    image: '/store/projects/15.jpg',
    size: '90000',
    timescale: 15,
    mitigation: 60000
  },
];

function OurProjects() {
  const [filters, setFilters] = useState({
    maxPrice: Math.max(...projects.map(project => project.price)),
    country: '',
    minTimescale: 0
  });

  const [currentPage, setCurrentPage] = useState(1);

  const filteredProjects = projects.filter(project => {
    const [city, country] = project.ubication.split(',').map(str => str.trim());
    return (
      project.price <= filters.maxPrice &&
      (filters.country === '' || country.toLowerCase() === filters.country.toLowerCase()) &&
      project.timescale >= filters.minTimescale
    );
  });

  const projectsPerPage = 6;
  const totalPages = Math.ceil(filteredProjects.length / projectsPerPage);

  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = filteredProjects.slice(indexOfFirstProject, indexOfLastProject);

  const handleFilterChange = (filterName, value) => {
    setFilters(prevFilters => ({
      ...prevFilters,
      [filterName]: value
    }));
  };

  const clearFilters = () => {
    setFilters({
      maxPrice: Math.max(...projects.map(project => project.price)),
      country: '',
      minTimescale: 0
    });
  };

  const nextPage = () => {
    const proyectos = document.getElementById('proyectos');
    proyectos.scrollIntoView({ behavior: 'smooth' });
    setCurrentPage(currentPage + 1);
  };

  const prevPage = () => {
    const proyectos = document.getElementById('proyectos');
    proyectos.scrollIntoView({ behavior: 'smooth' });
    setCurrentPage(currentPage - 1);
  };

  return (
    <div className='w-full h-full flex flex-col justify-center items-center mt-10'>
      <div className='flex flex-col justify-center'>
        <span id='proyectos' className='text-xl md:text-3xl text-black font-black mt-10 flex justify-center'>Proyectos de compensación</span>
        <Filters
          filters={filters}
          handleFilterChange={handleFilterChange}
          clearFilters={clearFilters}
          projects={projects}
        />
      </div>
      <div className='w-[90%] rounded-2xl mt-6 bg-white flex justify-center py-9 pl-5 pr-7'>
        <div className='w-full flex justify-center flex-row'>
          <div className='h-full w-full flex flex-col md:grid grid-cols-2 grid-rows-3 gap-8'>
            {currentProjects.map((project, index) => (
              <Project
                key={index}
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
            ))}
          </div>
        </div>
      </div>
      {totalPages > 1 && (
        <div className="mt-4 flex flex-col justify-center gap-3">
          <p className='text-black'>Página {currentPage} de {totalPages}</p>
          <SlideButtons clickPrev={prevPage} clickNext={nextPage} />
        </div>
      )}
    </div>
  );
}

export default OurProjects;