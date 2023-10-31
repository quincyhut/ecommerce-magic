import { Modal } from 'flowbite-react';
import { BiSearch } from "react-icons/bi";
import ProductCardSkeleton from '../ProductCardSkeleton/page';
import { useSearchModal } from './useSearchModal';
import ProductCard from '../ProductCard/page';

const SearchModal = ({ handleShowSearchbar }: { handleShowSearchbar: () => void }) => {
    const { isLoading, searchResults, handleSearch } = useSearchModal();

    return (
        <Modal
            dismissible popup show
            size='xl' position='top-center' className='rounded'
            theme={{
                content: {
                    inner: 'bg-white rounded overflow-hidden '
                }
            }}
            onClose={handleShowSearchbar}
        >
            <Modal.Header className=''>
                <div className='w-full flex items-center mx-2'>
                    <BiSearch className='text-md text-slate-500' />
                    <input
                        type="text"
                        placeholder='Search items'
                        className='text-sm border-none font-normal outline-0'
                        style={{ boxShadow: 'none' }}
                        onChange={handleSearch}
                    />
                </div>
            </Modal.Header>

            {
                (searchResults?.length || isLoading) && (
                    <Modal.Body className='border border-top-red-200'>
                        <div className='mt-2 flex flex-wrap gap-5'>
                            {
                                isLoading && <ProductCardSkeleton count={6} />
                            }
                            {
                                searchResults?.map((item, index) => (
                                    <ProductCard key={index} />
                                ))
                            }

                        </div>
                    </Modal.Body >
                )
            }

        </Modal >
    )
}

export default SearchModal