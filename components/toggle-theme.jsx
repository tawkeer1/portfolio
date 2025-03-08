"use client"

import {useState,useEffect} from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function ModeToggle() {
  const { theme,setTheme } = useTheme()
  const [mount,setMount] = useState(false)
  useEffect(()=>{
    setMount(true)
  },[])
  if(!mount) return null;
  return (
    <div>
      <button className="cursor-pointer " onClick={()=>setTheme(theme==="dark"?"light":"dark")}>
        {theme==="light"?<Moon/>:<Sun/>}
      </button>
    </div>
  )
}
