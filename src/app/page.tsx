"use client";

import Banner from "@/components/Banner/page";
import { IBanner } from "@/components/Banner/types";
import { Carousel } from "flowbite-react";

import { GrSecure, GrValidate } from "react-icons/gr";
import { FaRocket, FaShippingFast } from "react-icons/fa";
import { HiCubeTransparent } from "react-icons/hi";
import ProductCards from "@/components/ProductCards/page";
import { IProductCards } from "@/components/ProductCards/types";

export default function Home() {
  const mockCarouselContent = [
    {
      title: "Season's Hottest",
      subtitle: "Discover the Latest Fashion Trends",
      btnText: "Shop Now",
      offerContent: 'Dashain Offer ( 50% OFF )',
      imgSrc1: '/images/banner-1-a.webp',
      imgSrc2: '/images/banner-1-b.webp',
    },
    {
      title: "Summer Sale",
      subtitle: "Hot Deals for Sunny Days: Dive into Savings!",
      btnText: "View Discounts",
      offerContent: 'Dashain Offer ( 50% OFF )',
      imgSrc1: '/images/banner-2-a.webp',
      imgSrc2: '/images/banner-2-b.webp',
    },
    {
      title: "Live in Glamour",
      subtitle: "Reach the perfect glamour style with our exclusive jewelry collections.",
      btnText: "Shop jewelry",
      offerContent: 'Dashain Offer ( 50% OFF )',
      imgSrc1: '/images/banner-3-a.webp',
      imgSrc2: '/images/banner-3-b.webp',
    },
    {
      title: "Elegance that Lasts",
      subtitle: "Quality and style, hand in hand with 11VERSE.",
      btnText: "Shop Fall Styles",
      offerContent: 'Dashain Offer ( 50% OFF )',
      imgSrc1: '/images/banner-4-a.webp',
      imgSrc2: '/images/banner-4-b.webp',
    },
    {
      title: "Customer Favorites",
      subtitle: "Tried, Tested, and Loved by You – Our Top Picks!",
      btnText: "Explore Favorites",
      offerContent: 'Dashain Offer ( 50% OFF )',
      imgSrc1: '/images/banner-5-a.webp',
      imgSrc2: '/images/banner-5-b.webp',
    },
  ];

  const mockBottomBarContent = [
    {
      icon: <GrValidate className='text-4xl sm:flex-4xl' />,
      title: 'Certified',
      subtitle: 'Legally registered company'
    },
    {
      icon: <HiCubeTransparent className='text-4xl' />,
      title: 'Transparent',
      subtitle: 'Hassle-free return policy'
    },
    {
      icon: <FaShippingFast className='text-4xl' />,
      title: 'Shipping',
      subtitle: 'Free, fast, and reliable'
    },
    {
      icon: <GrSecure className='text-4xl' />,
      title: 'Secure',
      subtitle: 'Trusted marketplace since 2017'
    },
  ];

  const mockProductLists: IProductCards[] = [
    {
      title: 'Check Tshirts',
      price: 1200,
      prevPrice: 1523,
      reactCount: 25,
      images: ['/images/banner-1-a.webp', '/images/banner-1-b.webp'],
      userIds: ['hacker']

    },
    {
      title: 'Joggers Pants',
      price: 999,
      prevPrice: 1000,
      reactCount: 12,
      images: ['/images/banner-2-a.webp', '/images/banner-2-b.webp'],
      userIds: ['hacker']
    },
    {
      title: 'Bluish Suits',
      price: 2200,
      prevPrice: 5603,
      reactCount: 0,
      images: ['/images/banner-3-a.webp', '/images/banner-3-b.webp'],
      userIds: ['hacker']
    },
    {
      title: 'Sporty Trousers',
      price: 2300,
      prevPrice: 3444,
      reactCount: 23,
      images: ['/images/banner-4-a.webp', '/images/banner-4-b.webp'],
      userIds: ['hacker']
    },
    {
      title: 'Himalayan Jacket',
      price: 950,
      prevPrice: 1423,
      reactCount: 12,
      images: ['/images/banner-5-a.webp', '/images/banner-5-b.webp'],
      userIds: ['hacker']
    },
    {
      title: 'Recked White croks',
      price: 1200,
      prevPrice: 1523,
      reactCount: 15,
      images: ['/images/banner-3-b.webp', '/images/banner-4-b.webp'],
      userIds: ['hacker']
    },
  ];


  return (
    <>

      <div className="w-[100vw] h-[85vh] relative flex-center">
        <video autoPlay loop muted className="h-full w-full object-cover">
          <source src="/videos/banner.mp4" type="video/mp4" />
        </video>
        <div className="w-full h-full absolute flex-end text bottom-10 top-0 bg-black text-white text-center mb-5 bg-opacity-50 backdrop-blur-sm ">
          <div className="mb-40 w-[80vw] sm:w-[30vw] flex flex-col items-center gap-6">
            <div>
              <h2 className="text-3xl sm:text-5xl mb-4 font-extrabold logoFontFamily">Embark on a Journey</h2>
              <p className="logoFontFamily text-sm">Wrap yourself in a tapestry of dreams, where threads of culture, tradition, and style intertwine. Our clothing is more than just fabric; it's a journey through the mystique of Nepal.</p>
            </div>
            <div className="flex-between gap-3">
              <button className="shopBtn mt-3 text-white bg-black flex-center">
                SHOP NOW
              </button>
              <button className="shopBtn mt-3 text-black bg-white flex-center">
                <FaRocket className='text-lg mr-4' />
                EXPLORE US
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="w-[100vw] flex-center">
        <div className="py-1 px-4 w-full md:w-[75vw] flex-center">

          <div className="w-full mt-3 mb-4 flex-between gap-1">
            {
              mockBottomBarContent?.map((d: any, i: number) => (
                <div key={i} className="flex-start gap-4 sm:gap-5  p-4 w-full sm:flex-1">
                  {d?.icon}
                  <div>
                    <h3 className="text-md font-semibold">{d?.title}</h3>
                    <span className="text-sm relative -top-1">{d?.subtitle}</span>
                  </div>
                </div>

              ))
            }
          </div>

          <Carousel indicators={false}>
            {
              mockCarouselContent?.map((d: IBanner, i: number) => (
                <Banner
                  key={i}
                  title={d?.title}
                  subtitle={d?.subtitle}
                  btnText={d?.btnText}
                  offerContent={d?.offerContent}
                  imgSrc1={d?.imgSrc1}
                  imgSrc2={d?.imgSrc2}
                />
              ))
            }
          </Carousel>
        </div>
      </div>

      <div className="w-[100vw] flex-center">
        <div className="py-10 px-4 w-full md:w-[75vw]">
          <h2 className="text-2xl mb-4 font-semibold logoFontFamily">Featured Collections</h2>
          <div className="flex-between gap-5">
            {
              mockProductLists?.map((d: IProductCards, i: number) => (
                <ProductCards
                  title={d?.title}
                  price={d?.price}
                  prevPrice={d?.prevPrice}
                  reactCount={d?.reactCount}
                  images={d?.images}
                  userIds={d?.userIds}
                />
              ))
            }
          </div>
        </div>
      </div>

    </>
  )
}
