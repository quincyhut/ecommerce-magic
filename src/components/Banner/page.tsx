import Image from 'next/image';

import { Badge } from 'flowbite-react';
import { BiSolidHot, BiSolidPurchaseTag } from 'react-icons/bi';

import { IBanner } from './types';

const Banner = ({ title, subtitle, btnText, offerContent, imgSrc1, imgSrc2 }: IBanner) => {

    return (
        <div className={`bg-white sm:bg-zinc-100 px-0 h-[550px] overflow-hidden flex flex-col-reverse gap-1 sm:gap-5 md:flex-col-reverse sm:flex-row lg:flex-row items-start md:justify-center md:items-start lg:justify-between lg:items-center sm:px-20 text-black`}>
            <div>
                <h1 className='mt-3'>{title}</h1>
                <h3>{subtitle}</h3>
                <Badge color='red' icon={BiSolidHot} className="w-fit mt-3">{offerContent}</Badge>
                <button className="shopBtn mt-5 border-black flex-center">
                    <BiSolidPurchaseTag className="mr-3 text-xl" />
                    {btnText}
                </button>
            </div>
            <div className="flex gap-0 sm:gap-2">
                <div className="h-[400px] w-[100vw] sm:w-[250px] relative border border-dotted border-green-900 transform-0 sm:transform sm:translate-y-5">
                    <Image src={imgSrc1} layout="fill" objectFit="cover" alt='helo' className="p-1" />
                </div>
                <div className={`h-[400px] w-[250px] relative border border-dotted border-green-900 transform-0 sm:transform -translate-y-5`}>
                    <Image src={imgSrc2} layout="fill" objectFit="cover" alt='helo' className="p-1" />
                </div>
                <div className="hidden 2xl:block h-[400px] w-[100vw] sm:w-[250px] relative border border-dotted border-green-900 transform-0 sm:transform sm:translate-y-5">
                    <Image src={imgSrc1} layout="fill" objectFit="cover" alt='helo' className="p-1" />
                </div>
            </div>
        </div>
    )
}

export default Banner