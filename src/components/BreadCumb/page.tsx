import { Breadcrumb, Dropdown } from 'flowbite-react';
import { Links, ProductBreadCrumb } from './types';

const ProductBreadcumb = ({ links, handleSorting}: ProductBreadCrumb) => {
    return (
        <>
            <div className='flex-between logoFontFamily bg-zinc-50 px-5 py-4 mb-5'>
                <Breadcrumb aria-label="Default breadcrumb example">
                    {
                        links?.map((d:Links, i:number) => <Breadcrumb.Item href={d?.href}>{d?.title}</Breadcrumb.Item>)
                    }
                </Breadcrumb>
                <Dropdown label="Filter" inline className=' w-[200px]' onClick={handleSorting}>
                    <Dropdown.Item>Sort by</Dropdown.Item>
                    <Dropdown.Item>Newest</Dropdown.Item>
                    <Dropdown.Item>Price (low to high)</Dropdown.Item>
                    <Dropdown.Item>Price (high to low)</Dropdown.Item>
                    <Dropdown.Item>Name A-Z</Dropdown.Item>
                    <Dropdown.Item>Name Z-A</Dropdown.Item>
                </Dropdown>
            </div>
        </>
    )
}

export default ProductBreadcumb