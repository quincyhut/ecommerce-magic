'use client';

import React from 'react';
import { Analytics } from '@vercel/analytics/react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor, store } from "@/redux/store";

import Navbar from '@/components/Navbar/page';
import Footer from '@/components/Footer/page';

const ContextWrapper = ({ children }: any) => {
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <div className='py-1 px-4 w-full xl:w-[75vw]'>
                    <Navbar />
                </div>
                <div className='px-0 sm:px-4 my-2'>{children}</div>
                <Footer />
            </PersistGate>
            <Analytics />
        </Provider>
    )
}

export default ContextWrapper;