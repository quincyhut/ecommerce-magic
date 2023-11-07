'use client';

import React from 'react';
import { Analytics } from '@vercel/analytics/react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor, store } from "@/redux/store";

const ContextWrapper = ({ children }: any) => {
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <div className='px-0 sm:px-4 my-2'>{children}</div>
            </PersistGate>
            <Analytics />
        </Provider>
    )
}

export default ContextWrapper;