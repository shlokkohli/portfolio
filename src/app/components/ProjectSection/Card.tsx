import React from 'react'
import TechStackPill from '../TechStackPill'
import { Github, Globe } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

interface CardDetail {
  imageURL: string,
  title: string,
  description: string,
  TechStack: string[],
  GithubLink: string,
  WebsiteLink: string
}

const Card = ({imageURL, title, description, TechStack, GithubLink, WebsiteLink} : CardDetail) => {
  return (
    <div className='rounded-lg bg-gray-800 max-w-sm'>

        {/* upper part */}
        <div>
          <img
            className='rounded-t-lg h-auto hover:scale-95 duration-300 hover:rounded-lg'
            src={imageURL}
            alt="WiseUp"
          />
        </div>

        {/* lower part */}
        <div className='p-2 px-3 flex flex-col gap-3'>

          {/* heading */}
          <div className='space-y-0.5'>
            <h3 className='font-bold text md:text-lg bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent'>
              {title}
            </h3>

            <div className='flex gap-2 flex-wrap'>
              {TechStack.map((eachTech, key) => (
                <TechStackPill key={key} tech={eachTech} />
              ))}
            </div>

          </div>

          {/* description */}
          <p className='text-sm font-sans'>
            {description}
          </p>

          {/* buttons */}
          <div className='flex justify-end items-center gap-2'>

            <button className='text-xs cursor-pointer bg-black p-1 px-2 rounded-sm flex'>
              <Link href={GithubLink} target='_blank' className='flex justify-center items-center gap-1'>
                <Github className='h-4 w-4' />
                Source
              </Link>
            </button>

            <button className='text-xs cursor-pointer bg-black p-1 px-2 rounded-sm'>
              <Link href={WebsiteLink} target='_blank ' className='flex justify-center items-center gap-1'>
                <Globe className='h-4 w-4' />
                Website
              </Link>
            </button>

          </div>

        </div>

    </div>
  )
}

export default Card