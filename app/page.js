import Aboutme from '@/components/Aboutme'
import Education from '@/components/Education'
import Footer from '@/components/Footer'
import Projects from '@/components/Projects'
import Skills from '@/components/Skills'
import React from 'react'

const page = () => {
  return (
    <div className="flex justify-center items-center flex-col">
      <Aboutme/>
      <Projects/>
      <Skills/>
      <Education/>
      <Footer/>
    </div>
  )
}

export default page
