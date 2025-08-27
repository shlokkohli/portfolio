import React from 'react'
import Card from './Card'
import { MyProjects } from '@/app/helpers/MyProject'

const Projects = () => {
  return (
    <div className='mt-10 grid md:grid-cols-2 grid-cols-1 gap-4 justify-items-center md:justify-items-start'>

      {MyProjects.map((eachCard, key) => (
        <Card
          imageURL={eachCard.imageURL}
          title={eachCard.title}
          description={eachCard.description}
          TechStack={eachCard.TechStack}
          GithubLink={eachCard.GithubLink}
          WebsiteLink={eachCard.WebsiteLink}
          key={key}
        />
      ))}

    </div>
  )
}

export default Projects