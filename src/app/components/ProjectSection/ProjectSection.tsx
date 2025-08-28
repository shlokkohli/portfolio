import React from 'react'
import Projects from './Projects'

const ProjectSection = () => {
  return (
    <div id='Projects' className='mt-20'>

      <div>
          <h1 className='text-center md:text-start text-3xl font-black bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 text-transparent bg-clip-text lg:text-5xl md:text-4xl mb-3'>
              Checkout my recent projects
          </h1>
          <p className='text-gray-300 text-center md:text-start'>
              I&apos;ve worked on a variety of projects, from simple websites to complex web applications. Here are a few of my favorites.
          </p>
      </div>

      <Projects />

    </div>
  )
}

export default ProjectSection
