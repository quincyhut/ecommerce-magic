'use client';

import React from 'react';
import useCart from './useCart'
import Image from 'next/image';
import { AiOutlineDelete } from 'react-icons/ai';

const CartLists = () => {
    const {
        lovedProducts,
        handleQuantityChange,
        handlePickColor,
        handlePickSize
    } = useCart();

    return (
        <div className="w-[100vw] flex-center">
            <div className="py-1 px-4 w-full xl:w-[75vw]">
                <div className="grid lg:grid-cols-2 mt-10">
                    <div className="px-4">
                        <p className="text-xl font-medium">Order Summary</p>
                        <p className="text-gray-400">Check your items. And select a suitable shipping method.</p>
                        <div className="mt-8 space-y-3 rounded-lg border bg-white px-2 py-4 sm:px-6">

                            {
                                lovedProducts?.map((product: any, index: number) => (
                                    <div key={index} className="flex flex-col rounded-lg gap-5 sm:flex-row">
                                        <div className='relative h-[90px] w-[90px]'>
                                            <Image src={product?.images?.[0]} layout='fill' objectFit='cover' alt="" />
                                        </div>
                                        <div className="flex w-full flex-col">
                                            <span className="font-semibold">{product?.title}</span>
                                            <p className="text-sm">Qty: {product?.quantity}</p>
                                            <p className="text-sm font-semibold">NPR {product?.price}</p>
                                        </div>
                                        <AiOutlineDelete className='text-xl cursor-pointer hover:opacity-40' />
                                    </div>
                                ))
                            }

                        </div>
                    </div>
                    <div className="mt-10 bg-gray-50 px-4 pt-8 lg:mt-0">
                        <p className="text-xl font-medium">Payment Details</p>
                        <p className="text-gray-400">Complete your order by providing your payment details.</p>
                        <div className="">
                            <div className="mt-6 border-t border-b py-2">
                                <div className="flex items-center justify-between">
                                    <p className="text-sm font-medium text-gray-900">Subtotal</p>
                                    <p className="font-semibold text-gray-900">$399.00</p>
                                </div>
                                <div className="flex items-center justify-between">
                                    <p className="text-sm font-medium text-gray-900">Shipping</p>
                                    <p className="font-semibold text-gray-900">$8.00</p>
                                </div>
                            </div>
                            <div className="mt-6 flex items-center justify-between">
                                <p className="text-sm font-medium text-gray-900">Total</p>
                                <p className="text-2xl font-semibold text-gray-900">$408.00</p>
                            </div>
                        </div>
                        <button className="mt-4 w-full rounded-md bg-gray-900 px-6 py-3 font-medium text-white">Place Order</button>
                        <p className="mt-8 text-lg font-medium">Shipping Methods</p>
                        <form className="mt-5 grid gap-6">
                            <div className="relative">
                                <input className="peer hidden" id="radio_1" type="radio" name="radio" checked />
                                <span className="peer-checked:border-gray-700 absolute right-4 top-1/2 box-content block h-3 w-3 -translate-y-1/2 rounded-full border-8 border-gray-300 bg-white"></span>
                                <label className="peer-checked:border-2 peer-checked:border-gray-700 peer-checked:bg-gray-50 flex cursor-pointer select-none rounded-lg border border-gray-300 p-4" htmlFor="radio_1">
                                    <img className="w-14 object-contain" src="/images/naorrAeygcJzX0SyNI4Y0.png" alt="" />
                                    <div className="ml-5">
                                        <span className="mt-2 font-semibold">Fedex Delivery</span>
                                        <p className="text-slate-500 text-sm leading-6">Delivery: 2-4 Days</p>
                                    </div>
                                </label>
                            </div>
                            <div className="relative">
                                <input className="peer hidden" id="radio_2" type="radio" name="radio" checked />
                                <span className="peer-checked:border-gray-700 absolute right-4 top-1/2 box-content block h-3 w-3 -translate-y-1/2 rounded-full border-8 border-gray-300 bg-white"></span>
                                <label className="peer-checked:border-2 peer-checked:border-gray-700 peer-checked:bg-gray-50 flex cursor-pointer select-none rounded-lg border border-gray-300 p-4" htmlFor="radio_2">
                                    <img className="w-14 object-contain" src="/images/oG8xsl3xsOkwkMsrLGKM4.png" alt="" />
                                    <div className="ml-5">
                                        <span className="mt-2 font-semibold">Fedex Delivery</span>
                                        <p className="text-slate-500 text-sm leading-6">Delivery: 2-4 Days</p>
                                    </div>
                                </label>
                            </div>
                        </form>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default CartLists