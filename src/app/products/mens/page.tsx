'use client';

import ProductBreadcumb from '@/components/BreadCumb/page';
import ProductCards from '@/components/ProductCards/page';
import useMens from './useMens';

const Mens = () => {
    const {
        mockProductLists,
        breadcrumbLinks,
        handleSorting,
    } = useMens();

    return (
        <div className="w-[100vw] flex-center">
            <div className="py-10 px-4 w-full md:w-[75vw]">
                <ProductBreadcumb links={breadcrumbLinks} handleSorting={handleSorting} />
                <div className="w-full grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-2">
                    {
                        mockProductLists?.map((d, i: number) => (
                            <ProductCards
                                key={i}
                                _id={d?._id}
                                title={d?.title}
                                sizes={d?.sizes}
                                colors={d?.colors}
                                price={d?.price}
                                quantity={d?.quantity}
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
    )
}

export default Mens;