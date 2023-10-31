import React from 'react'

const ContextWrapper = ({ children }: any) => {
    return (
        <div className='px-0 sm:px-4 my-2'>{children}</div>
    )
}

export default ContextWrapper;