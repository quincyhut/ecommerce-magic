import { IProductCards } from "@/components/ProductCards/types";


export interface Product {
    name: string,
    price: number,
    discount: number,
    category: string,
    slug: string
}

export interface ProductReducer {
    productReducer: {
        previewProduct: Object,
        cart: Array<IProductCards>,
        wishlist: Array<IProductCards>,
    }
}

export interface ISortCriteria {
    label: string;
    value: string;
}