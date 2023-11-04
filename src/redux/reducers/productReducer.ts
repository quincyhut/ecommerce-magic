import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    previewProduct: {},
    cart: []
};

const product = createSlice({
    name: 'productReducer',
    initialState,
    reducers: {
        setPreviewProduct: (state: any, action: any) => { state.previewProduct = action.payload },
        setCartData: (state: any, action: any) => {
            state.previewProduct = [...state.previewProduct, ...action.payload]
        }
    }
});

export const { setPreviewProduct, setCartData } = product.actions;
export default product.reducer;

