import React from 'react'
import Herotext from '../components/Herotext'
import ParallxBackground from '../components/ParallxBackground'

const Hero = () => {
  return (
    <section className='flex items-start justify-center md:items-start md:justify-start min-h-screen overflow-hidden c-space'>
        <Herotext/>
        <ParallxBackground/>
    </section>
  )
}

export default Hero
