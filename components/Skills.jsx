import React from 'react'
import SkillCard from './SkillCard'
const skills = ["HTML","CSS","Javascript","Reactjs","Nextjs","Typescript","Mongodb","TailwindCss"]
const Skills = () => {
  return (
    <div className='text-center mt-4 p-3'>
      <h1 className="text-xl font-bold">Skills</h1>
      <div className="flex gap-4 flex-wrap items-center justify-center">
        {skills.map((skill,index)=>(
          <SkillCard key={index} title={skill}/>
        ))
      }
      </div>
    </div>
  )
}

export default Skills
