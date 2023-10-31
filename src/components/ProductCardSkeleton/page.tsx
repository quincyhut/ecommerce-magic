
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';

const ProductCardSkeleton = ({ count = 5 }) => {
    return (
        <>
            {
                Array(count).fill(0).map((_d, i) =>
                    <SkeletonTheme baseColor="#f8f9fa" highlightColor="#e9edf1" key={i} >
                        <div className='h-[200px] w-[150px] mt-3 flex px-1 bg-white overflow-hidden mb-3 drop-shadow-sm'>
                            <div className=''>
                                <Skeleton count={1} height={160} width={140} />
                                <Skeleton count={1} height={20} width={140} className="mt-2" />
                            </div>
                        </div>
                    </SkeletonTheme>
                )
            }
        </>
    )
}

export default ProductCardSkeleton;