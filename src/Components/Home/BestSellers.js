import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Heart from '../Icon/Heart';
import Revers from '../Icon/Revers';
import Eye from '../Icon/Eye';
import Bag from '../Icon/Bag';

const BestSellers = () => {
    useEffect(() => {
        AOS.init();
    }, [])
    return (
        <div className='bestseller my-20'>
            <div data-aos="fade-up"
                data-aos-anchor-placement="top-bottom">
                <div className='container my-0 mx-auto '>
                    <div className='text-center'>
                        <h2 className='text-[38px] font-semibold' >
                            Best Seller
                        </h2>
                        <p className='text-[#838383] text-[16px] font-normal '>Top sale in this week and this season.</p>
                    </div>
                    <div className='grid lg:grid-cols-3  xl:grid-cols-4 md:grid-cols-3  sm:grid-cols-2  grid-cols-1 gap-x-5 gap-y-36 mb-6 pt-10 '>
                        <div className='eyeglass  h-[358px] relative '>
                            <div className='absolute right-0'>
                                <div className='-mb-[24px] ' data-aos="zoom-in">
                                    <Heart />
                                </div>
                                <div className='-mb-[24px]'>
                                    <Revers />
                                </div>
                                <div>
                                    <Eye />
                                </div>
                            </div>
                            <div className=' h-[358px] overflow-hidden bg-[#F5F5F5] flex justify-center' >
                                <img src='./Assets/img/goggle.png' ></img>
                            </div>
                            <div className='flex py-9'>
                                <div>
                                    <p className='text-[#313131] text-[16px] sm:text-[16px] md:text-[16px] lg:text-[24px] font-[500]'>
                                        Rentangle EyeGlasses
                                    </p>
                                    <p className='text-[#FF2424]  font-medium'>$24.00</p>
                                </div>
                                <div className='ml-8'>
                                    <Bag />
                                </div>
                            </div>
                        </div>
                        <div className='leg  h-[358px] relative '>
                            <div className='w-[75px] h-[30px] bg-[#D42E23] text-white text-center absolute right-0 top-5'>
                                25% OFF
                            </div>
                            <div className=' h-[358px] overflow-hidden bg-[#F5F5F5] flex justify-center' >
                                <img src='./Assets/img/leg.png' width={'100%'} ></img>

                            </div>
                            <div className='flex pt-9'>
                                <div>
                                    <p className='text-[#313131] text-[24px] font-[500]'>
                                        Lace-up Sneakers
                                    </p>
                                    <p className='text-[#FF2424]  font-medium'><del className='text-black'>$175.00</del> $200.00</p>
                                </div>
                                <div className='ml-8'>
                                    <Bag />
                                </div>
                            </div>
                        </div>
                        <div className='handbag  h-[358px] relative '>
                            <div className='w-[75px] h-[30px] bg-[#D42E23] text-white text-center absolute right-0 top-5'>
                                25% OFF
                            </div>

                            <div className=' h-[358px] overflow-hidden bg-[#F5F5F5] flex justify-center' >

                                <img src='./Assets/img/handbag.png'></img>
                            </div>
                            <div className='flex pt-9'>
                                <div>
                                    <p className='text-[#313131] text-[24px] font-[500]'>
                                        Rentangle EyeGlasses
                                    </p>
                                    <p className='text-[#FF2424]  font-medium'><del className='text-black'>$175.00</del>  $75.00</p>
                                </div>
                                <div className='ml-8'>
                                    <Bag />
                                </div>
                            </div>
                        </div>
                        <div className='flats  h-[358px] relative '>
                            <div className='w-[75px] h-[30px] bg-[#D42E23] text-white text-center absolute right-0 top-5'>
                                Sale
                            </div>
                            <div className=' h-[358px] overflow-hidden bg-[#F5F5F5] flex justify-center' >
                                <img src='./Assets/img/flats.png'></img>
                            </div>
                            <div className='flex pt-9'>
                                <div>
                                    <p className='text-[#313131] text-[24px] font-[500]'>
                                        Rentangle EyeGlasses
                                    </p>
                                    <p className='text-[#FF2424]  font-medium'><del className='text-black'>$175.00</del>  $75.00</p>
                                </div>
                                <div className='ml-8'>
                                    <Bag />
                                </div>
                            </div>
                        </div>
                        <div className='cap  h-[358px] relative '>
                            <div className='w-[75px] h-[30px] bg-[#D42E23] text-white text-center absolute right-0 top-5'>
                                Sale
                            </div>
                            <div className=' h-[358px] overflow-hidden bg-[#F5F5F5] flex justify-center' >
                                <img src='./Assets/img/cap.png'></img>
                            </div>
                            <div className='flex pt-9'>
                                <div>
                                    <p className='text-[#313131] text-[24px] font-[500]'>
                                        Rentangle EyeGlasses
                                    </p>
                                    <p className='text-[#FF2424]  font-medium'><del className='text-black'>$175.00</del>  $75.00</p>
                                </div>
                                <div className='ml-8'>
                                    <Bag />
                                </div>
                            </div>
                        </div>
                        <div className='handwatch  h-[358px] relative '>
                            <div className='w-[75px] h-[30px] bg-[#D42E23] text-white text-center absolute right-0 top-5'>
                                10% off
                            </div>
                            <div className=' h-[358px] overflow-hidden bg-[#F5F5F5] flex justify-center' >
                                <img src='./Assets/img/handwatch.png' className='h-[300px] pt-10 '></img>
                            </div>
                            <div className='flex pt-9'>
                                <div>
                                    <p className='text-[#313131] text-[24px] font-[500]'>
                                        Rentangle EyeGlasses
                                    </p>
                                    <p className='text-[#FF2424]  font-medium'><del className='text-black'>$175.00</del> $24.00</p>

                                </div>
                                <div className='ml-8'>
                                    <Bag />
                                </div>
                            </div>
                        </div>
                        <div className='coco  h-[358px] relative '>
                            <div className='w-[75px] h-[30px] bg-[#D42E23] text-white text-center absolute right-0 top-5'>
                                Sale
                            </div>
                            <div className=' h-[358px] overflow-hidden bg-[#F5F5F5] flex justify-center' >
                                <img src='./Assets/img/coco.png'></img>
                            </div>
                            <div className='flex pt-9'>
                                <div>
                                    <p className='text-[#313131] text-[24px] font-[500]'>
                                        Rentangle EyeGlasses
                                    </p>
                                    <p className='text-[#FF2424]  font-medium'><del className='text-black'>$20.00</del>$24.00</p>
                                </div>
                                <div className='ml-8'>
                                    <Bag />
                                </div>
                            </div>
                        </div>
                        <div className='jacket  h-[358px]  '>
                            <div className=' h-[358px] overflow-hidden bg-[#F5F5F5] flex justify-center' >
                                <img src='./Assets/img/jacket.png'></img>
                            </div>
                            <div className='flex pt-9'>
                                <div>
                                    <p className='text-[#313131] text-[24px] font-[500]'>
                                        Rentangle EyeGlasses
                                    </p>
                                    <p className='text-[#FF2424]  font-medium'>$30.00</p>
                                </div>
                                <div className='ml-8'>
                                    <Bag />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default BestSellers