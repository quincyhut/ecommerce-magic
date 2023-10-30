"use client";

import React from 'react';
import { Avatar, Badge, Dropdown, Navbar } from "flowbite-react";
import { MdFavoriteBorder, MdOutlineLogout, MdOutlineManageAccounts, MdOutlineArrowOutward } from "react-icons/md";
import { BiPurchaseTag, BiRightArrowAlt, BiSearch } from "react-icons/bi";
import { LiaShoppingBagSolid } from "react-icons/lia";
import { RxCross1 } from "react-icons/rx";
import { BsSearch } from "react-icons/bs";


import { usePage } from './hooks/usePage';
import Image from 'next/image';
import Link from 'next/link';
import SearchModal from '../SearchModal/page';


const NavbarComp = () => {
  const { showSearchbar, handleShowSearchbar, handleHideSearchbar } = usePage();
  console.log({ showSearchbar })
  return (
    <Navbar fluid rounded className='py-5'>
      <Navbar.Brand href="https://flowbite-react.com">
        <span className="self-center whitespace-nowrap brandLogoText">11VERSE</span>
      </Navbar.Brand>
      <div className="flex md:order-2 items-center">
        <BsSearch className="ml-4 mr-3 text-2xl text-slate-600 cursor-pointer" onClick={handleShowSearchbar} />
        {showSearchbar && (
          <SearchModal handleHideSearchbar={handleHideSearchbar} />
        )}
        <Badge color='white' className='mx-3 relative cursor-pointer'>
          <LiaShoppingBagSolid className='text-4xl text-slate-700' />
          <span className='absolute right-[42%] top-[43%]'>3</span>
        </Badge>
        <Dropdown
          arrowIcon={false}
          inline
          label={
            <>
              <Avatar alt="User settings" img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" rounded />
            </>
          }
          className='w-[220px]'
        >
          <Dropdown.Header>
            <span className="block text-sm">Parbat Lama</span>
            <span className="block truncate text-sm font-medium">parbatlama70@gmail.com</span>
          </Dropdown.Header>
          <Dropdown.Item><MdOutlineManageAccounts className='text-xl mr-3' /> Manage Account</Dropdown.Item>
          <Dropdown.Item><BiPurchaseTag className='text-xl mr-3' /> My Orders</Dropdown.Item>
          <Dropdown.Item><MdFavoriteBorder className='text-xl mr-3' />My Wishlist</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item><MdOutlineLogout className='text-xl mr-3' /> Sign out</Dropdown.Item>
        </Dropdown>
        <Navbar.Toggle className='ml-3' />
      </div>
      <Navbar.Collapse className='navbar-lg-view sm:navbar-sm-view'>

        <Navbar.Link href="#">
          <Dropdown
            arrowIcon={true}
            inline
            label='NEW'
            className='w-[95vw] sm:w-[700px] absolute -left-[200px] border-0 p-3 mt-2'
          >
            <div className='flex gap-6 flex-wrap'>

              <div className='h-fit w-[150px] text-center transition-all duration-500 transform hover:-translate-y-2 hover:p-1 hover:border hover:border-amber-900 group'>
                <div className='h-[200px] overflow-hidden'>
                  <Image className='group-hover:scale-110 group-hover:opacity-[0.5]' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuC7qVfPwg99T6rpxM7LOoDEsFMTtbpSYxHw&usqp=CAU" height={100} width={100} layout="responsive" objectFit="cover" alt='helo' />
                  <MdOutlineArrowOutward className="text-2xl text-blue-800 absolute top-2 right-2 hidden group-hover:block" />
                </div>
                <h2 className='my-2'>Half Size Tshirt</h2>
              </div>
            </div>
            <Link href="" className='my-3 float-right flex underline underline-offset-4 hover:text-slate-500'>
              Explore More <BiRightArrowAlt className="text-xl mx-2" />
            </Link>
          </Dropdown>
        </Navbar.Link>

        <Navbar.Link href="#">
          <Dropdown
            arrowIcon={true}
            inline
            label='CATEGORIES'
            className='w-[95vw] sm:w-[700px] absolute -left-[200px] border-0 p-3 mt-2'
          >
            <div className='flex gap-6 flex-wrap'>

              <div className='h-fit w-[150px] text-center transition-all duration-500 transform hover:-translate-y-2 hover:p-1 hover:border hover:border-amber-900 group'>
                <div className='h-[200px] overflow-hidden'>
                  <Image className='group-hover:scale-110 group-hover:opacity-[0.5]' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuC7qVfPwg99T6rpxM7LOoDEsFMTtbpSYxHw&usqp=CAU" height={100} width={100} layout="responsive" objectFit="cover" alt='helo' />
                  <MdOutlineArrowOutward className="text-2xl text-blue-800 absolute top-2 right-2 hidden group-hover:block" />
                </div>
                <h2 className='my-2'>Half Size Tshirt</h2>
              </div>
            </div>
            <Link href="" className='my-3 float-right flex underline underline-offset-4 hover:text-slate-500'>
              Explore More <BiRightArrowAlt className="text-xl mx-2" />
            </Link>
          </Dropdown>
        </Navbar.Link>

        <Navbar.Link href="#">ABOUT</Navbar.Link>
        <Navbar.Link href="#">CONTACT</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default NavbarComp;