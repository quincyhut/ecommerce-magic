"use client";

import { Avatar, Badge, Dropdown, Navbar } from "flowbite-react";
import { MdFavoriteBorder, MdOutlineLogout, MdOutlineManageAccounts, MdOutlineArrowOutward } from "react-icons/md";
import { BiPurchaseTag, BiRightArrowAlt } from "react-icons/bi";
import { LiaShoppingBagSolid } from "react-icons/lia";
import { BsSearch } from "react-icons/bs";

import { usePage } from './hooks/usePage';
import Image from 'next/image';
import Link from 'next/link';
import SearchModal from '../SearchModal/page';
import ProductCard from "../ProductCard/page";

const NavbarComp = () => {
  const {
    isLoading,
    showSearchbar,
    handleShowSearchbar,
    handleSearch
  } = usePage();

  return (
    <Navbar fluid rounded className='py-5'>
      <Navbar.Brand href="https://flowbite-react.com">
        <span className="self-center whitespace-nowrap brandLogoText">11VERSE</span>
      </Navbar.Brand>
      <div className="flex md:order-2 items-center">
        <BsSearch className="ml-4 mr-3 text-2xl text-slate-600 cursor-pointer" onClick={handleShowSearchbar} />
        {showSearchbar && (
          <SearchModal
            isLoading={isLoading}
            handleShowSearchbar={handleShowSearchbar}
            handleSearch={handleSearch}
          />
        )}
        <Badge color='white' className='mx-3 relative cursor-pointer'>
          <LiaShoppingBagSolid className='text-4xl text-slate-700' />
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
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
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
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
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