'use client'
import React from 'react'
import Skills from '../Skills'

const AboutSection = () => {

  const mySkills = ["TypeScript", "MongoDB", "Node.js", "Github", "Express", "Javascript", "Git", "C++", "Next.js", "React.js", "WebSockets", "PostgreSQL", "Zod", "TailwindCSS", "Problem Solving"]

  return (
    <div id='About' className='flex flex-col items-center justify-center w-full md:pr-30 2xl:max-w-6xl md:justify-start md:items-start'>

      <h1 className='text-3xl font-black bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 text-transparent bg-clip-text lg:text-5xl md:text-4xl mb-8'>
        About Me
      </h1>

      <p className='md:text-lg text-gray-300 mb-6'>
        I'm a passionate full-stack developer with over 3 years of experience in creating innovative web solutions. My journey in technology began with a curiosity about how things work, which evolved into a deep love for coding and problem-solving.
      </p>

      <p className='md:text-lg text-gray-300 mb-8'>
        I specialize in building scalable web applications using modern technologies like React, Next.js, and Node.js. My approach combines technical expertise with creative design thinking to deliver user-centric solutions that make a real impact.
      </p>

      <h3 className='text-emerald-600 text-2xl font-bold mb-4 text-center'>
        Skills
      </h3>

      <Skills skills = {mySkills} />

    </div>
  )
}

export default AboutSection