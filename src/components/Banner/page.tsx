import Image from 'next/image';

import { Badge } from 'flowbite-react';
import { BiSolidHot } from 'react-icons/bi';
import { IBanner } from './types';

const Banner = ({ title, subtitle, btnText, imgSrc1, imgSrc2 }: IBanner) => {
    return (
        <div className="h-full bg-zinc-50 flex justify-around items-center px-5 text-black">
            <div>
                <h1>{title}</h1>
                <h2 className="mb-5">{subtitle}</h2>
                <Badge color='purple' icon={BiSolidHot} className="w-fit mt-2">Season's Hottest Styles</Badge>
                <button className="shopBtn mt-10">{btnText}</button>
            </div>
            <div className="flex gap-2">
                <div className="h-[400px] w-[250px] relative border border-dotted border-black transform translate-y-20">
                    <Image src={imgSrc1} layout="fill" objectFit="cover" alt='helo' className="p-1" />
                </div>
                <div className="h-[400px] w-[250px] relative border border-dotted border-black transform -translate-y-20">
                    <Image src={imgSrc2} layout="fill" objectFit="cover" alt='helo' className="p-1" />
                </div>
            </div>
        </div>
    )
}

export default Banner