import React from 'react'
import SendMessageBox from './SendMessageBox'

const ContactSection = () => {
  return (
    <div id='Contact' className='mt-20 w-full p-10 md:p-0'>

        {/* upper section */}
        <div className='mb-8 flex flex-col justify-center items-center md:justify-start md:items-start'>
            <h1 className='text-3xl font-black lg:text-5xl md:text-4xl'>
                Get In{" "}
                <span className='bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 text-transparent bg-clip-text'>
                    Touch
                </span>
            </h1>
            <p>
                Feel free to reach out — I'd love to hear from you.
            </p>
        </div>

        {/* lower section */}
        <div className='flex flex-col justify-center items-center md:justify-start md:items-start'>
            <SendMessageBox />
        </div>

    </div>
  )
}

export default ContactSection