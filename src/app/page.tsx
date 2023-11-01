"use client";

import Banner from "@/components/Banner/page";
import { IBanner } from "@/components/Banner/types";
import { Carousel } from "flowbite-react";

import { GrSecure, GrValidate } from "react-icons/gr";
import { FaShippingFast } from "react-icons/fa";
import { HiCubeTransparent } from "react-icons/hi";

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
      subtitle: "Hot Summer Deals",
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
      title: "Fall Fashion",
      subtitle: "Fall into Fashion",
      btnText: "Shop Fall Styles",
      offerContent: 'Dashain Offer ( 50% OFF )',
      imgSrc1: '/images/banner-4-a.webp',
      imgSrc2: '/images/banner-4-b.webp',
    },
    {
      title: "Customer Favorites",
      subtitle: "Shop the Bestsellers",
      btnText: "Explore Favorites",
      offerContent: 'Dashain Offer ( 50% OFF )',
      imgSrc1: '/images/banner-5-a.webp',
      imgSrc2: '/images/banner-5-b.webp',
    },
  ];

  const mockBottomBarContent = [
    {
      icon: <GrValidate className='text-3xl sm:flex-4xl' />,
      title: 'Certified',
      subtitle: 'Legally registered company'
    },
    {
      icon: <HiCubeTransparent className='text-3xl' />,
      title: 'Transparent',
      subtitle: 'Hassle-free return policy'
    },
    {
      icon: <GrSecure className='text-3xl' />,
      title: 'Secure',
      subtitle: 'Trusted marketplace since 2017'
    },
    {
      icon: <FaShippingFast className='text-3xl' />,
      title: 'Shipping',
      subtitle: 'Free, fast, and reliable'
    },
  ]

  return (
    <>
      <Carousel pauseOnHover indicators={false}>
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
              isImageRotate={!(i % 2)}
            />
          ))
        }
      </Carousel>
      <div className="my-3 flex-between gap-1">
        {
          mockBottomBarContent?.map((d: any, i: number) => (
            <div key={i} className="flex-start gap-4 sm:gap-3 bg-zinc-50 p-3 w-full sm:flex-1">
              {d?.icon}
              <div>
                <h3 className="text-lg font-semibold">{d?.title}</h3>
                <span className="text-sm relative -top-1">{d?.subtitle}</span>
              </div>
            </div>

          ))
        }
      </div>
    </>
  )
}
