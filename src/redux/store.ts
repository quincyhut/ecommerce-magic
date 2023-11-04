import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import productReducer from './reducers/productReducer';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
    key: '11verse',
    storage,
};
const persistedProductReducer = persistReducer(persistConfig, productReducer);

export const store = configureStore({
    reducer: {
        productReducer: persistedProductReducer,
    },
});
export const persistor = persistStore(store);