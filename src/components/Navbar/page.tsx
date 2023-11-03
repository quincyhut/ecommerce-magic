"use client";

import Link from 'next/link';
import { Avatar, Badge, Dropdown, Navbar, Spinner } from "flowbite-react";

import { MdFavoriteBorder, MdOutlineLogout, MdOutlineManageAccounts } from "react-icons/md";
import { BiPurchaseTag, BiRightArrowAlt, BiSearch } from "react-icons/bi";
import { LiaShoppingBagSolid } from "react-icons/lia";
import { BsFacebook, BsInstagram, BsTiktok } from "react-icons/bs";

import MenuCard from "../MenuCard/page";

import { useNavbar } from './useNavbar';
import Image from 'next/image';


const NavbarComp = () => {
  const {
    isLoading,
    searchKeyword,
    handleSearch
  } = useNavbar();

  return (
    <>
      <Navbar fluid rounded>
        <div className="w-full flex-between">
          <div className="flex-center border-0 sm:border sm:border-slate-700">
            {isLoading ? <Spinner size='sm' className='ml-3 -mt-1' /> : <BiSearch className='ml-3 text-lg' />}
            <input type="search" placeholder='Search items' className="text-sm border-none w-[140px] sm:w-auto" style={{ boxShadow: 'none' }} onChange={handleSearch} />
          </div>
          <div className='flex-center text-2xl text-[#5a2929] gap-7'>
            <BsFacebook className='cursor-pointer' />
            <BsInstagram className='cursor-pointer' />
            <BsTiktok className='cursor-pointer' />
          </div>
        </div>
      </Navbar>
      <Navbar fluid>
        <div className='separator'></div>
      </Navbar>
      <Navbar fluid rounded className='p-0'>
        <Navbar.Brand href="/">
          <Image src='/icons/logo.png' height={130} width={130} alt='logo' />
          {/* <span className="self-center whitespace-nowrap brandLogoText">11VERSE</span> */}
        </Navbar.Brand>
        <div className="flex md:order-2 items-center">
          <Badge color='white' className='mx-3 relative cursor-pointer'>
            <LiaShoppingBagSolid className='text-4xl' />
            <span className='absolute right-[42%] top-[43%]'>3</span>
          </Badge>
          <Dropdown
            arrowIcon={false}
            inline
            label={<Avatar alt="User settings" img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" rounded />}
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
          <Navbar.Toggle className='ml-3 text-black' />
        </div>
        <Navbar.Collapse className='navbar-lg-view sm:navbar-sm-view'>
          <Navbar.Link href="#">
            <Dropdown
              arrowIcon={true}
              inline
              label={<span className='text-black font-semibold'>CATEGORIES</span>}
              className='w-[95vw] sm:w-[700px] absolute -left-[200px] border-0 p-3 mt-2'
            >
              <div className='flex gap-6 flex-wrap'>
                <MenuCard img='/images/banner-4-a.webp' title='T-Shirts' link='/' />
                <MenuCard img='/images/jeans.webp' title='Jeans' link='/' />
                <MenuCard img='/images/suits.webp' title='Suits' link='/' />
                <MenuCard img='/images/outwear.jpg' title='Outerwear' link='/' />
                <MenuCard img='/images/activeware.jpeg' title='Activewear' link='/' />
                <MenuCard img='/images/dresses.webp' title='Dresses' link='/' />
                <MenuCard img='/images/accessories.webp' title='Accessories' link='/' />
              </div>
              <Link href="" className='my-3 float-right flex underline underline-offset-4 hover:text-slate-500'>
                Explore More <BiRightArrowAlt className="text-xl mx-2" />
              </Link>
            </Dropdown>
          </Navbar.Link>

          <Navbar.Link href="#">
            <Link href="/products/new">
              <span className='text-black font-semibold'>NEW</span>
            </Link>
          </Navbar.Link>
          <Navbar.Link href="#">
            <Link href="/products/mens">
              <span className='text-black font-semibold'>MEN</span>
            </Link>
          </Navbar.Link>
          <Navbar.Link href="#">
            <Link href="/products/womens">
              <span className='text-black font-semibold'>WOMEN</span>
            </Link>
          </Navbar.Link>
          <Navbar.Link href="#">
            <span className='text-black font-semibold'>ABOUT</span>
          </Navbar.Link>
          <Navbar.Link href="#">
            <span className='text-black font-semibold'>CONTACT</span>
          </Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    </>
  )
}

export default NavbarComp;