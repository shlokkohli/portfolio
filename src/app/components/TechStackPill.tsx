import React from 'react'

interface TechStackPillProps {
  tech: string
}

const TechStackPill = ({tech} : TechStackPillProps) => {
  return (
    <div className='md:text-[13px] text-xs font-semibold bg-black rounded-sm px-2'>
      {tech}
    </div>
  )
}

export default TechStackPill