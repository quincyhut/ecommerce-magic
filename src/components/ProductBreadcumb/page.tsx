'use client';

import { Breadcrumb, Dropdown } from 'flowbite-react';
import { Links, ProductBreadCrumb } from './types';
import { useRouter } from 'next/navigation';

const ProductBreadcumb = ({ links, hideSorting = false, handleSorting }: ProductBreadCrumb) => {
    const router = useRouter();

    return (
        <>
            <div className='flex-between logoFontFamily bg-zinc-50 px-5 py-4 mb-5 w-full'>
                <Breadcrumb aria-label="Default breadcrumb example">
                    {
                        links?.map((d: Links, i: number) => <Breadcrumb.Item className='cursor-pointer' key={i} onClick={() => router.push(d?.href)}>{d?.title}</Breadcrumb.Item>)
                    }
                </Breadcrumb>
                {
                    !hideSorting && (
                        <Dropdown label="Sort" inline theme={{ inlineWrapper: "flex-center text-slate-700 text-sm" }} className='w-[200px]' onClick={handleSorting}>
                            <Dropdown.Item>Newest</Dropdown.Item>
                            <Dropdown.Item>Price (low to high)</Dropdown.Item>
                            <Dropdown.Item>Price (high to low)</Dropdown.Item>
                            <Dropdown.Item>Name A-Z</Dropdown.Item>
                            <Dropdown.Item>Name Z-A</Dropdown.Item>
                        </Dropdown>
                    )
                }
            </div>
        </>
    )
}

export default ProductBreadcumb