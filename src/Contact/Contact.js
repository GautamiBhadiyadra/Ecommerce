import React from 'react'

const Contact = () => {
    return (
        <div className='my-24'>
            <div className='container my-0 mx-auto'>
                <div className='grid grid-cols-1  md:grid-cols-2 lg:grid-cols-2 gap-10'>
                    <div>
                        <h2 className='text-[26px] font-semibold text-[#313131]'>Get In Touch</h2>
                        <div className='pt-7'>
                            <form>
                                <div className='grid grid-cols-1  md:grid-cols-2 lg:grid-cols-2 gap-4 '>
                                    <div>

                                        <label  className='text-[16px] font-normal text-[#313131] block'>
                                            Name
                                        </label>
                                        <input type='text' className=' bg-[#F4F4F4] w-full text-[14px]  py-4 px-4 mt-3' placeholder='Your name here' />
                                    </div>
                                    <div>

                                        <label className='text-[16px] font-normal text-[#313131] block'>
                                            Email
                                        </label>
                                        <input type='email' className=' bg-[#F4F4F4] w-full text-[14px]  py-4 px-4 mt-3' placeholder='Your email here' />
                                    </div>
                                </div>
                                <div className='grid grid-cols-1  md:grid-cols-2 lg:grid-cols-2 gap-4 my-5'>
                                    <div>

                                        <label className='text-[16px] font-normal text-[#313131] block'>
                                            Phone
                                        </label>
                                        <input type='text' className=' bg-[#F4F4F4] w-full text-[14px]  py-4 px-4 mt-3' placeholder='Your phonr no. here' />
                                    </div>
                                    <div>

                                        <label className='text-[16px] font-normal text-[#313131] block'>
                                            Subject
                                        </label>
                                        <input type='email' className=' bg-[#F4F4F4] w-full text-[14px]  py-4 px-4 mt-3 dark:placeholder-text-[20px]' placeholder='Your Subject here' />
                                    </div>
                                </div>
                                <div className='my-10'>
                                    <label for="message" className='text-[16px] font-normal text-[#313131] block'>Message</label>
                                    <textarea id="message" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50  border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" ></textarea>
                                </div>
                                <div>
                                    <button type="button" class="inline-flex items-center px-10 py-2.5 text-base  font-medium text-center text-white bg-[#FFC224]">
                                        Messages

                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className='h-[559px] w-full'>
                        <iframe src="//maps.google.com/maps?q=53.3381768,-6.2613077&z=15&output=embed" width={'100%'} height={'510px'}></iframe>
                    </div>
                </div>
                <div className='grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10 my-10'>
                    <div className="flex items-center  border rounded-[20px] gap-5 bg-[#F4F4F4]   h-[150px]" data-aos="flip-left"
                        data-aos-easing="ease-out-cubic"
                        data-aos-duration="2000">
                        <div className='px-5'>
                            <img src='./Assets/img/truck.png'></img>
                        </div>
                        <div>
                            <h1 className='text-[24px] font-medium '>
                                Free Shipping
                            </h1>
                            <p className='text-[16px]  text-[#838383] font-medium'>Order Our $100</p>
                        </div>
                    </div>
                    <div className="flex items-center  border rounded-[20px] gap-5 bg-[#F4F4F4]   h-[150px]" data-aos="flip-left"
                        data-aos-easing="ease-out-cubic"
                        data-aos-duration="2000">
                        <div className='px-5'>
                            <img src='./Assets/img/s.png'></img>
                        </div>
                        <div>
                            <h1 className='text-[24px] font-medium '>
                                Free Returns
                            </h1>
                            <p className='text-[16px]  text-[#838383] font-medium'>7 days returns policy</p>
                        </div>
                    </div>
                    <div className="flex items-center  border rounded-[20px] gap-5 bg-[#F4F4F4]  h-[150px]" data-aos="flip-left"
                        data-aos-easing="ease-out-cubic"
                        data-aos-duration="2000">
                        <div className='px-5'>
                            <img src='./Assets/img/payment.png'></img>
                        </div>
                        <div>
                            <h1 className='text-[24px] font-medium '>
                                Quick Payment
                            </h1>
                            <p className='text-[16px]  text-[#838383] font-medium'>100% Secure Payment</p>
                        </div>
                    </div>
                    <div className="flex items-center  border rounded-[20px] gap-5 bg-[#F4F4F4]   h-[150px]" data-aos="flip-left"
                        data-aos-easing="ease-out-cubic"
                        data-aos-duration="2000">
                        <div className='px-5'>
                            <img src='./Assets/img/r24.png'></img>
                        </div>
                        <div>
                            <h1 className='text-[24px] font-medium '>
                                24/7 Support
                            </h1>
                            <p className='text-[16px]  text-[#838383] font-medium'>Quick Support</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact