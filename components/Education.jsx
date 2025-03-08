"use client"
import { Link } from 'lucide-react'
import { redirect } from 'next/navigation'
import React from 'react'
const onSubmit=(e)=>{
  redirect("https://nitsri.ac.in/")
}
const Education = () => {
  return (
      <>
      <h1 className='font-bold text-xl mb-2'>Education</h1>
    <div className="card bg-base-100 w-96 shadow-sm border border-gray-700 ">
  <figure>
    <img
      src="/nit.jpg"
      alt="nit" />
  </figure>
  <div className="card-body p-3 text-center">
    <h2 className="card-title font-semibold">Nit Srinagar</h2>
    <p>I am currently persuing my btech from NIT Srinagar in Information technology</p>
    <div className="card-actions justify-end">
      
      <button onClick={onSubmit} className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded cursor-pointer mt-3">Visit
      </button>
    </div>
  </div>
</div>

      </>
  )
}

export default Education
