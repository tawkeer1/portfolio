import React from 'react'
import { Button } from './ui/button'
import Link from 'next/link'

const ContactDetail = () => {
  return (
    <div className="flex items-center gap-5 ml-4">
       <Link href="#" >
      <Button className="hover:bg-red-200">
        Contact me
      </Button>
       </Link>
       <Link href="#">
      <Button className="hover:bg-red-200">
        Social links
      </Button>
       </Link>
    </div>
  )
}

export default ContactDetail
