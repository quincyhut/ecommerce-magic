import { Modal } from 'flowbite-react';
import { BiSearch } from "react-icons/bi";
import ProductCardSkeleton from '../ProductCardSkeleton/page';

const SearchModal = ({ isLoading, handleShowSearchbar, handleSearch }: any) => {

    return (
        <Modal dismissible popup show={true} onClose={handleShowSearchbar} size='xl' position='top-center' className='rounded' content='inner' theme={{
            content: {
                inner: 'bg-white rounded overflow-hidden '
            }
        }}>
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

            <Modal.Body className='border border-top-red-200'>
                <div className='mt-2 flex flex-wrap gap-5'>
                    {
                        isLoading && <ProductCardSkeleton count={6} />
                    }
                    {/* <ProductCard /> */}

                </div>
            </Modal.Body >

        </Modal >
    )
}

export default SearchModal