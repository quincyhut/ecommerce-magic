"use client";

import Banner from "@/components/Banner/page";
import { IBanner } from "@/components/Banner/types";
import { Carousel } from "flowbite-react";

export default function Home() {
  const mockData = [
    {
      title: "Season's Hottest Styles",
      subtitle: "Discover the Latest Fashion Trends",
      btnText: "Shop Now",
      imgSrc1: '/images/banner-1-a.webp',
      imgSrc2: '/images/banner-1-b.webp',
    },
    {
      title: "Summer Sale",
      subtitle: "Hot Summer Deals",
      btnText: "View Discounts",
      imgSrc1: '/images/banner-2-a.webp',
      imgSrc2: '/images/banner-2-b.webp',
    },
    {
      title: "Live in Glamour",
      subtitle: "Reach the perfect glamour style with our exclusive jewelry collections.",
      btnText: "Shop jewelry",
      imgSrc1: '/images/banner-3-a.webp',
      imgSrc2: '/images/banner-3-b.webp',
    },
    {
      title: "Fall Fashion Preview",
      subtitle: "Fall into Fashion",
      btnText: "Shop Fall Styles",
      imgSrc1: '/images/banner-4-a.webp',
      imgSrc2: '/images/banner-4-b.webp',
    },
    {
      title: "Customer Favorites",
      subtitle: "Shop the Bestsellers",
      btnText: "Explore Favorites",
      imgSrc1: '/images/banner-5-a.webp',
      imgSrc2: '/images/banner-5-b.webp',
    },
  ];


  return (
    <div className="h-[80vh]" >
      <Carousel pauseOnHover>
        {
          mockData?.map((d: IBanner, i: number) => (
            <Banner
              title={d?.title}
              subtitle={d?.subtitle}
              btnText={d?.btnText}
              imgSrc1={d?.imgSrc1}
              imgSrc2={d?.imgSrc2}
            />
          ))
        }

      </Carousel>

    </div>
  )
}
