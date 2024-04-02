import React from 'react'
import Headboard from './components/Headboard/Headboard'
import OurProjects from './components/OurProjects/OurProjects'
import Footer from './components/Footer/Footer'

function Store() {
  return (
    <div className='h-screen w-screen'>
        <Headboard />
        <OurProjects />
        <Footer />
    </div>
  )
}

export default Store