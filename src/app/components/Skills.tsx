import React from 'react'

interface SkillsProps {
    skills : string[]
}

const Skills : React.FC<SkillsProps> = ({ skills }) => {
  return (
    <div className='flex gap-2 md:gap-3 flex-wrap'>
        {skills.map((eachSkill, key) => (
            <div key={key} className='bg-gray-500 rounded-full p-1 px-3 text-sm text-white hover:bg-gray-400'>
                {eachSkill}
            </div>
        ))}
    </div>
  )
}

export default Skills