import React from 'react'
import Nave from '../../Common/Nave'

const Checkout = () => {
    return (
        <div className='my-20'>
            <div className='container my-0 mx-auto'>
                <h1 className='text-[38px] font-semibold'>
                    Checkout
                </h1>
                <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-5 pt-12">
                    <div className=" rounded-lg  lg:col-span-2">

                        <div class="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-7 ">
                            <h2 className='text-[38px] font-medium'>Billing Details</h2>
                            <form action="" class="space-y-4 my-7">
                                <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                    <div>
                                        <label
                                            for="Username"
                                            class="relative block border border-[#C4C4C4]  focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
                                        >
                                            <input
                                                type="text"
                                                id="Username"
                                                class="peer p-2 border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0"
                                                placeholder="Username"
                                            />

                                            <span
                                                class="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 font-normal text-[16px] text-[#313131] transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs"
                                            >
                                                First Name
                                            </span>
                                        </label>
                                    </div>

                                    <div>

                                        <label
                                            for="Username"
                                            class="relative block border border-[#C4C4C4]  focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
                                        >
                                            <input
                                                type="text"
                                                id="Username"
                                                class="peer p-2 border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0"
                                                placeholder="Username"
                                            />

                                            <span
                                                class="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 font-normal text-[16px] text-[#313131] transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs"
                                            >
                                                Last Name
                                            </span>
                                        </label>
                                    </div>
                                </div>

                                <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                    <div>
                                        <label
                                            for="Username"
                                            class="relative block border border-[#C4C4C4]  focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
                                        >
                                            <input
                                                type="text"
                                                id="Username"
                                                class="peer p-2 border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0"
                                                placeholder="Username"
                                            />

                                            <span
                                                class="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 font-normal text-[16px] text-[#313131] transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs"
                                            >
                                                Phone Number
                                            </span>
                                        </label>
                                    </div>

                                    <div>
                                        <label
                                            for="Username"
                                            class="relative block border border-[#C4C4C4]  focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
                                        >
                                            <input
                                                type="email"
                                                id="Username"
                                                class="peer p-2 border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0"
                                                placeholder="Username"
                                            />

                                            <span
                                                class="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 font-normal text-[16px] text-[#313131] transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs"
                                            >
                                                Email Address
                                            </span>
                                        </label>
                                    </div>
                                </div>
                                <div>
                                    <label
                                        for="Username"
                                        class="relative block border border-[#C4C4C4]  focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
                                    >
                                        <input
                                            type="email"
                                            id="Username"
                                            class="peer p-2 border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0"
                                            placeholder="Username"
                                        />

                                        <span
                                            class="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 font-normal text-[16px] text-[#313131] transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs"
                                        >
                                            Company Name
                                        </span>
                                    </label>
                                </div>
                                <div>
                                    <label
                                        for="Username"
                                        class="relative block border border-[#C4C4C4]  focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
                                    >
                                        <input
                                            type="email"
                                            id="Username"
                                            class="peer p-2 border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0"
                                            placeholder="Username"
                                        />

                                        <span
                                            class="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 font-normal text-[16px] text-[#313131] transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs"
                                        >
                                            Country
                                        </span>
                                    </label>
                                </div>
                                <div>
                                    <label
                                        for="Username"
                                        class="relative block border border-[#C4C4C4]  focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
                                    >
                                        <input
                                            type="email"
                                            id="Username"
                                            class="peer p-2 border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0"
                                            placeholder="Username"
                                        />

                                        <span
                                            class="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 font-normal text-[16px] text-[#313131] transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs"
                                        >
                                            Street Address
                                        </span>
                                    </label>
                                </div>
                                <div>
                                    <label
                                        for="Username"
                                        class="relative block border border-[#C4C4C4]  focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
                                    >
                                        <input
                                            type="email"
                                            id="Username"
                                            class="peer p-2 border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0"
                                            placeholder="Username"
                                        />

                                        <span
                                            class="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 font-normal text-[16px] text-[#313131] transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs"
                                        >
                                            Town/City
                                        </span>
                                    </label>
                                </div>
                                <div>
                                    <div class="flex items-center mb-4">
                                        <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                        <label for="default-checkbox" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Ship to a different address?</label>
                                    </div>
                                </div>
                                <div>
                                    <label class="sr-only" for="message">Notes about your order, special notes for delivery.</label>

                                    <textarea
                                        class="w-full   p-3 text-sm border  border-[#C4C4C4]"
                                        placeholder="Message"
                                        rows="8"
                                        id="message"
                                    ></textarea>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className=" rounded-lg ">
                        <div class="rounded-lg bg-white p-5 shadow-lg lg:col-span-3 lg:p-12 ">
                            <h2 className='lg:text-[30px] text-[20px] md:text-[20px] font-medium'>Order Details</h2>
                            <div class="flex justify-center flex-col md:flex-row flex-col items-stretch w-full space-y-4 md:space-y-0 md:space-x-6 xl:space-x-8">
                                <div class="flex flex-col  py-4 w-full  dark:bg-gray-800 space-y-6">
                                    {/* <h3 class="text-xl dark:text-white font-semibold leading-5 text-gray-800">Summary</h3> */}
                                    <div class="flex justify-between items-center w-full">
                                        <p class="text-xl text-[#313131] font-normal leading-4 ">Product</p>
                                        <p class="text-xl  text-[#313131] font-normal leading-4 ">Total</p>
                                    </div>
                                    <div class="flex justify-between items-center w-full border-t border-[#C4C4C4] ">
                                        <p class="text-base text-[#313131] font-normal leading-4  pt-4 ">Pointed Toe Flats</p>
                                        <p class="text-base text-[#313131] font-normal leading-4 pt-4">$90.00</p>
                                    </div>
                                    <div class="flex justify-between items-center w-full">
                                        <p class="text-base text-[#313131] font-normal leading-4 ">Ladies Gold Bracelet</p>
                                        <p class="text-base  text-[#313131] font-normal leading-4 ">$30.00</p>
                                    </div>
                                    <div class="flex justify-between items-center w-full">
                                        <p class="text-base text-[#313131] font-normal leading-4 ">Rectangle Eyeglasses</p>
                                        <p class="text-base  text-[#313131] font-normal leading-4 ">$24.00</p>
                                    </div>
                                    <div class="flex justify-between items-center w-full  border-t border-[#C4C4C4]">
                                        <p class="text-base text-[#313131] font-normal leading-4 pt-4">Subtotal</p>
                                        <p class="text-base  text-[#313131] font-normal leading-4 pt-4">$144.00</p>
                                    </div>
                                    <div class="flex justify-between items-center w-full  border-t border-[#C4C4C4]">
                                        <p class="text-base text-[#313131] font-normal leading-4 pt-4">Free Shipping</p>
                                        <p class="text-base  text-[#313131] font-normal leading-4 pt-4">$0.00</p>
                                    </div>
                                    <div class="flex justify-between items-center w-full  border-t border-[#C4C4C4]">
                                        <p class="text-xl  text-[#313131] font-normal leading-4 pt-7">Total</p>
                                        <p class="text-xl text-[#313131] font-normal leading-4 pt-7">$144.00</p>
                                    </div>
                                </div>
                            </div>
                            <div className='w-auto h-[275px] bg-[#F5F5F5F5] mt-7'>
                                <div className='p-7'>
                                    <div class="flex mb-4 items-center">
                                        <input disabled id="disabled-radio-1" type="radio" value="" name="disabled-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 ms-2" />
                                        <label for="disabled-radio-1" class="ms-2 text-base font-normal text-[#838383] dark:text-gray-500 text-center ">Direct Bank Transfer</label>
                                    </div>
                                    <div class="flex mb-4 items-center">
                                        <input disabled id="disabled-radio-1" type="radio" value="" name="disabled-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 ms-2" />
                                        <label for="disabled-radio-1" class="ms-2 text-base font-normal text-[#838383] dark:text-gray-500 text-center ">Check Payment</label>
                                    </div>
                                    <div class="flex mb-4 items-center">
                                        <input disabled id="disabled-radio-1" type="radio" value="" name="disabled-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 ms-2" />
                                        <label for="disabled-radio-1" class="ms-2 text-base font-normal text-[#838383] dark:text-gray-500 text-center ">Cash On Delivery</label>
                                    </div>
                                    <div class="flex mb-4 items-center">
                                        <input disabled id="disabled-radio-1" type="radio" value="" name="disabled-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 ms-2" />
                                        <label for="disabled-radio-1" class="ms-2 text-base font-normal text-[#838383] flex justify-between dark:text-gray-500">
                                            <img src='./Assets/Img/pngegg.png'></img>
                                            <img src='./Assets/Img/pngegg (2).png'></img>
                                            <img src='./Assets/Img/visa.png'></img>
                                        </label>
                                    </div>
                                    <div className='pt-7'>
                                        <button class="bg-[#FFC224] hover:bg-blue-700 text-[#313131] font-medium py-2 px-4 w-full ">
                                            Place Order
                                        </button>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Checkout