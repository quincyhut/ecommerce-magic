import React from 'react';
import { BsSearch } from 'react-icons/bs';

const SearchModal = ({ handleHideSearchbar }: any) => {
    return (
        <div className="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
            <div className="fixed inset-0 z-10 w-screen overflow-y-auto" onClick={handleHideSearchbar}>
                <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                    <div className="relative transform overflow-hidden rounded bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg" onClick={(e) => e.stopPropagation()}>
                        <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                            <div className='flex items-center gap-2'>
                                <input type='search' className='w-full text-sm border-0 focus:outline-none shadow-none' placeholder='Search items...' />
                                <BsSearch className='mx-2' />
                            </div>
                            
                            <div className=''>
                            
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SearchModal