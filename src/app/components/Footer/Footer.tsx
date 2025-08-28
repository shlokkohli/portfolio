import { Github, Instagram, Linkedin, Twitter } from 'lucide-react';
import Link from 'next/link';
import React from 'react'

const Footer = () => {

    const currentYear = new Date().getFullYear();

  return (
    <div className='w-full p-6 px-14 border-t border-gray-600 mt-12 flex flex-col md:flex-row items-center md:justify-between justify-center text-gray-400 gap-2'>

        {/* left side */}
        <div className=''>
            © {currentYear}. Shlok Kohli. All right reserved.
        </div>

        {/* right side */}
        <div className='flex gap-3'>

            <Link href={"https://github.com/shlokkohli"} target='_blank'>
                <Github className='h-5 w-5 text-gray-300' />
            </Link>

            <Link href={"https://www.linkedin.com/in/shlok-kohli-1b902025b/"} target='_blank'>
                <Linkedin className='h-5 w-5 text-gray-300' />
            </Link>

            <Link href={"https://x.com/ShlokKohli4"} target='_blank'>
                <Twitter className='h-5 w-5 text-gray-300' />
            </Link>

            <Link href={"https://www.instagram.com/shlok_kohli"} target='_blank'>
                <Instagram className='h-5 w-5 text-gray-300' />
            </Link>

        </div>

    </div>
  )
}

export default Footer
