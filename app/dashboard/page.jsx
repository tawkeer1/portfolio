import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <>
      <h1 className='flex justify-center'>Dashboard</h1>
    <div className='flex flex-col justify-center items-center relative mt-4'>
        <div className='flex flex-row justify-center items-center w-full h-screen'>
          <Link href='project/create-project' className=' p-3 flex flex-1 h-full'>
            Create project
          </Link>
        </div>
    </div>
    </>
  )
}

export default page
