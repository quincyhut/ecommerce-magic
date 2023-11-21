import { createSlice } from "@reduxjs/toolkit";
import _ from "lodash";

const initialState = {
    previewProduct: {},
    cart: [],
    wishlist: [],
};

const product = createSlice({
    name: 'productReducer',
    initialState,
    reducers: {
        setPreviewProduct: (state: any, action: any) => { state.previewProduct = action.payload },
        setCartData: (state: any, action: any) => {
            return {
                ...state,
                cart: _.uniqBy([...state.cart, action.payload], '_id') ?? []
            }
        },
        setWishList: (state: any, action: any) => {
            return {
                ...state,
                wishlist: _.uniqBy([...state.wishlist ?? [], action.payload], '_id')
            }
        },
        removeCartById: (state: any, action: any) => {
            state.cart = state.cart?.filter((list: any) => list._id !== action.payload);
        },
        removeWishListById: (state: any, action: any) => {
            state.wishlist = state.wishlist?.filter((list: any) => list._id !== action.payload);
        },
    }
});

export const { setPreviewProduct, setCartData, setWishList, removeCartById, removeWishListById } = product.actions;
export default product.reducer;

