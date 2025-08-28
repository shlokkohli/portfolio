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
        Hey there! I&apos;m a passionate Full Stack Developer focused on building modern, user-friendly web applications. I enjoy taking on challenges that push me to think critically and improve my craft with every project.
      </p>

      <p className='md:text-lg text-gray-300 mb-8'>
        I&apos;m driven by a constant desire to learn and grow, while creating applications that are practical, efficient, and impactful. My approach combines curiosity and problem-solving, allowing me to turn ideas into meaningful products that deliver value and lasting impact.
      </p>

      <h3 className='text-emerald-600 text-2xl font-bold mb-4 text-center'>
        Skills
      </h3>

      <Skills skills = {mySkills} />

    </div>
  )
}

export default AboutSection