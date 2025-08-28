'use client'
import React from 'react'
import { MessageCircle, Download } from 'lucide-react';
import TypeAnimate from '../TypingAnimation';
import Image from 'next/image';

const HomeSection = () => {

  const handleButtonClick = () => {
    window.open('Resume_.pdf', '_blank');
  };

  const handleScrollToFeedback = () => {
    const section = document.getElementById("Contact");
    if(section){
      section.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div className='flex items-center justify-start gap-29 w-full min-h-screen'>

      {/* left side */}
      <div className='flex flex-col gap-8 max-w-2xl'>

        {/* upper div */}
        <div className='flex flex-col gap-6'>

          <div className='flex flex-col md:items-start items-center'>
            <h3 className='text-xl lg:text-2xl text-gray-400 font-bold'>
              Hii, I&apos;m
            </h3>

            <h1 className='text-4xl font-black bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 text-transparent bg-clip-text lg:text-7xl md:text-5xl'>
              Shlok Kohli
            </h1>
            <h2 className='font-bold text-lg sm:text-3xl'>
              I am{" "}
              <span className='text-emerald-600'>
                <TypeAnimate />
              </span>
            </h2>
          </div>

          <p className='text-center md:text-start text-gray-300 font-bold text-lg'>
            Welcome to my portfolio! I&apos;m a dedicated full-stack developer with a strong expertise in web development. I specialize in building dynamic and intuitive web applications.
          </p>

        </div>

        {/* lower div */}
        <div className='flex flex-col md:flex-row gap-3 md:gap-5 lg:gap-7'>

          <button
            className='bg-gradient-to-r from-blue-500 to-cyan-500 flex justify-center items-center p-2.5 rounded-full text-sm sm:font-semibold font-semibold gap-2 cursor-pointer px-4 sm:px-5 md:px-7 w-full md:w-auto hover:from-blue-600 hover:to-cyan-600  hover:scale-105 transition-all duration-200'
            onClick={handleScrollToFeedback}
          >
            Get in Touch
            <MessageCircle className='sm:h-5 sm:w-5 h-4 w-4' />
          </button>

          <button
            className='bg-gray-400 flex justify-center items-center p-2.5 rounded-full text-sm sm:font-semibold font-semibold gap-2 cursor-pointer px-4 sm:px-5 md:px-7 w-full md:w-auto hover:bg-gray-500 hover:scale-105 transition-all duration-200'
            onClick={handleButtonClick}
          >
            Downlod CV
            <Download className='sm:h-5 sm:w-5 h-4 w-4' />
          </button>

        </div>

      </div>

      {/* right side */}
      <div className='hidden md:block'>

        <div className='bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 rounded-full md:h-55 md:w-55 lg:h-60 lg:w-60 flex items-center justify-center overflow-hidden transition-all duration-500'>
          <Image height={200} width={200} className='md:h-50 md:w-42 lg:h-55 lg:w-46' src="/profileImage.png" alt="ProfilePhoto" />
        </div>

      </div>

    </div>
  )
}

export default HomeSection