"use client";

import Banner from "@/components/Banner/page";
import { IBanner } from "@/components/Banner/types";
import { Carousel } from "flowbite-react";

export default function Home() {
  const mockData = [
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


  return (
    <>
      <Carousel pauseOnHover indicators={false}>
        {
          mockData?.map((d: IBanner, i: number) => (
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
    </>
  )
}
