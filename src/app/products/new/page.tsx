'use client';

import ProductBreadcumb from '@/components/ProductBreadcumb/page';
import ProductCards from '@/components/ProductCards/page';
import { useNew } from './useNew';

const New = () => {
    const {
        productLists,
        breadcrumbLinks,
        handleSorting
    } = useNew();

    return (
        <div className="w-[100vw] flex-center">
            <div className="py-10 px-7 w-full md:w-[75vw]">
                <ProductBreadcumb links={breadcrumbLinks} productLists={productLists} applySorting={handleSorting} />
                <div className="w-full grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-2">
                    {
                        productLists?.map((d, i: number) => (
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
                                allowLoveReact={true}
                            />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default New;