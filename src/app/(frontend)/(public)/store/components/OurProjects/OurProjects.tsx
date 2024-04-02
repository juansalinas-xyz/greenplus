import React from 'react'
import Filters from '../Filters/Filters'
import Project from '../Project/Project'

function OurProjects() {
  return (
    <div className='w-full h-full flex justify-center items-center'>
        <div className='w-[90%] h-full rounded-2xl mt-36 bg-white p-8'>
            <div className='w-full h-full flex flex-row pb-8'>
                <div className='h-full w-full mr-8'>
                    <div className='h-1/2 w-full flex mb-8'>
                        <Project />
                        <Project />
                    </div>
                    <div className='h-1/2 w-full flex'>
                        <Project />
                        <Project />
                    </div>
                </div>
                <div className='h-full'>
                    <Filters />
                </div>
            </div>
        </div>
    </div>
  )
}

export default OurProjects