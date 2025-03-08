import React from 'react'

const SkillCard = ({title}) => {
  return (
    <div className='border rounded-md border-gray-300 p-3 mt-4 hover:bg-gray-200 dark:hover:bg-white dark:hover:text-gray-800 cursor-pointer'>
      <h1>{title}</h1>
    </div>
  )
}

export default SkillCard
