'use client';

import { Breadcrumb, Dropdown } from 'flowbite-react';
import { Links, ProductBreadCrumb } from './types';
import { useRouter } from 'next/navigation';
import { ISortCriteria } from '@/lib/types';
import _ from 'lodash';

const ProductBreadcumb = ({ links, productLists = [], hideSorting = false, applySorting }: ProductBreadCrumb) => {
    const router = useRouter();

    const sortCriteria: ISortCriteria[] = [
        { label: 'Newest', value: 'new' },
        { label: 'Price (low to high)', value: 'low-high' },
        { label: 'Price (high to low)', value: 'high-low' },
        { label: 'Name A-Z', value: 'a-z' },
        { label: 'Name Z-A', value: 'z-a' },
    ]

    const handleSorting = (criteria: ISortCriteria) => {
        const { value } = criteria;

        if (value === 'new') applySorting(productLists);
        else if (value === 'low-high') applySorting(_.sortBy(productLists, 'price'));
        else if (value === 'high-low') applySorting(_.sortBy(productLists, 'price').reverse());
        else if (value === 'a-z') applySorting(_.sortBy(productLists, 'title'));
        else if (value === 'z-a') applySorting(_.sortBy(productLists, 'title').reverse());
    }
    
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
                        <Dropdown label="Sort" inline theme={{ inlineWrapper: "flex-center text-slate-700 text-sm" }} className='w-[200px]'>
                            {
                                sortCriteria?.map((criteria: ISortCriteria, i: number) => (
                                    <Dropdown.Item key={i} onClick={() => handleSorting(criteria)}>{criteria.label}</Dropdown.Item>
                                ))
                            }
                        </Dropdown>
                    )
                }
            </div>
        </>
    )
}

export default ProductBreadcumb