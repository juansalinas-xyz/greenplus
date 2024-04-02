import React from 'react'
import Filters from '../Filters/Filters'
import Project from '../Project/Project'

function OurProjects() {
  return (
    <div className='w-full h-full flex flex-col justify-center items-center mt-96'>
        <span className='text-3xl text-black font-black'>Proyectos de compensación</span>
        <div className='w-[90%] rounded-2xl mt-12 bg-white flex justify-center py-9 px-5'>
            <div className='w-full flex justify-center flex-row'>
                <div className='h-full w-full grid grid-cols-2 grid-rows-3 gap-8'>
                    <Project title={'Bosques de Brasil'} desc={'Se ubica en la región centro oeste de Brasil, en predios con pasturas degradadas que solían utilizarse para ganadería extensiva.'} ubication={'Rio, Brasil'} responsible={'Gobierno de Brasil'} price={150} image={'/store/projects/1.jpg'} size={'60000'} timescale={'20'} mitigation={28900} />
                    <Project title={'Parque Nahuel Huapi'} desc={'Proyecto de conservación de bosques nativos en la ecorregión de los 7 lagos.'} ubication={'Bariloche, Argentina'} responsible={'Martinez SA'} price={75} image={'/store/projects/2.jpg'} size={'28000'} timescale={'100'} mitigation={23500} />
                    <Project title={'Selva de Matavén'} desc={'Este proyecto busca mitigar el cambio climático, proteger la rica biodiversidad y generar fuentes de ingresos para las comunidades locales.'} ubication={'Medellin, Colombia'} responsible={'Gobierno de Medellin'} price={50} image={'/store/projects/5.jpg'} size={'12000'} timescale={'15'} mitigation={350200} />
                    <Project title={'Chaco Paraguayo'} desc={'Este programa altamente escalable consiste en tierras agrícolas en todo el Chaco paraguayo que aplicarán una crianza racional de ganado.'} ubication={'Chaco Boreal, Paraguay'} responsible={'Gobierno de Paraguay'} price={200} image={'/store/projects/4.jpg'} size={'40000'} timescale={'10'} mitigation={13500} />
                    <Project title={'Carbon azul - Mexico'} desc={'Las actividades de conservación incluyen la rehabilitación de canales de marea, la vigilancia comunitaria de las amenazas a los manglares y la biodiversidad.'} ubication={'Veracrux, Mexico'} responsible={'BlueMX'} price={220} image={'/store/projects/3.jpg'} size={'450000'} timescale={'50'} mitigation={1240000} />
                    <Project title={'The Maísa'} desc={'El proyecto promueve la conservación y valorización del bosque ubicado en el centro endémico de Pará, en Brasil.'} ubication={'Moju, Brasil.'} responsible={'Biofilica SA'} price={30} image={'/store/projects/6.jpg'} size={'6000'} timescale={'8'} mitigation={4700} />
                </div>
            </div>
        </div>
    </div>
  )
}

export default OurProjects