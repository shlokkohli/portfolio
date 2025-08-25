import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className='border border-gray-600 sm:text-lg rounded-full sm:p-4 sm:min-w-md p-4'>

      <ul className='flex justify-center sm:gap-10 gap-6'>
        {/* home */}
        <li>
          <Link href={"#home"} className='hover:text-blue-300 active:text-blue-400'>
            Home
          </Link>
        </li>

        {/* about */}
        <li>
          <Link href={"#About"} className='hover:text-blue-300 active:text-blue-400'>
            About
          </Link>
        </li>

        {/* projects */}
        <li>
          <Link href={"#Projects"} className='hover:text-blue-300 active:text-blue-400'>
            Projects
          </Link>
        </li>

        {/* contacts */}
        <li>
          <Link href={"#Contact"} className='hover:text-blue-300 active:text-blue-400'>
            Contact
          </Link>
        </li>

      </ul>

    </div>
  )
}

export default Navbar