

import React from 'react'

const ProductPreview = ({ params }: any) => {
    const { id } = params;

    return (
        <div>Product ID: {id}</div>
    )
}

export default ProductPreview;