"use client";

import React from 'react';
import { RxHamburgerMenu } from "react-icons/rx";

import MidNavMenu from './MidNavMenu';
import { usePage } from './hooks/usePage';



const Navbar = () => {
  const { showMenu } = usePage();
  console.log({ showMenu })
  return (
    <div className='flex-between px-2 sm:px-20 sm:py-4'>
      <h1 className='brandLogoText'>11VERSE</h1>
      {
        !showMenu ? <MidNavMenu /> : <RxHamburgerMenu className="text-3xl" />
      }
    </div>
  )
}

export default Navbar;