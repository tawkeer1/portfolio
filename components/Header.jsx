"use client"
import React from "react";
import {
  ClerkProvider,
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import { ModeToggle } from "./toggle-theme";
import { useTheme } from "next-themes";
import { Link } from "lucide-react";
const Header = () => {
    const {theme} = useTheme();
  return (
    <div className={`${theme==="dark"?"bg-gray-900 text-white":"bg-white text-black"} flex items-center justify-between h-13 border  border-b-2 p-1`}>
      <h1 className="font-semibold">
      Tawkeer
      </h1>
    <div className="flex justify-center items-center ">
      <header className="flex justify-end items-center p-4 gap-4 h-16">
        <a href="https://bloggingapp-one.vercel.app/">
        <p className="cursor-pointer">My Blogs</p>
        </a>
        <SignedOut>
          <SignInButton className="cursor-pointer"/>
          <SignUpButton className="cursor-pointer"/>
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      <ModeToggle />
      </header>
    </div>
    </div>
  );
};

export default Header;
