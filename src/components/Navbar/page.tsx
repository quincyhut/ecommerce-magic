"use client";

import React from 'react';

import MidNavMenu from './MidNavMenu';
import { usePage } from './hooks/usePage';
import RightNavMenu from './RightNavMenu';
import VerticalNavMenu from './VerticalNavMenu';


const Navbar = () => {
  const { showMenu } = usePage();
  
  return (
    <div className='flex-between px-5 md:px-20 py-4'>
      <h1 className='brandLogoText'>11VERSE</h1>
      <div className='flex justify-center items-center'>
        {!showMenu && <MidNavMenu />}
        <RightNavMenu />
        {showMenu && <VerticalNavMenu />}
      </div>
    </div>
  )
}

export default Navbar;