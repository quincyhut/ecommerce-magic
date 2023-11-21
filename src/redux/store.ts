import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import productReducer from './reducers/productReducer';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
    key: '11verse',
    version: 1,
    storage
};
const rootReducer = combineReducers({
    productReducer,
})
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
          serializableCheck: false,
        }),
});
export const persistor = persistStore(store);