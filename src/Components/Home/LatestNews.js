import React, { useEffect, useState } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Arro from '../Icon/Arro'
import ManFillColor from '../Icon/ManFillColor'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";


const LatestNews = () => {
    useEffect(() => {
        AOS.init();
    }, [])
    const [products, setProducts] = useState([]);
    const responsiveOptions = [
        {
            breakpoint: '1199px',
            numVisible: 1,
            numScroll: 1
        },
        {
            breakpoint: '991px',
            numVisible: 2,
            numScroll: 1
        },
        {
            breakpoint: '767px',
            numVisible: 1,
            numScroll: 1
        }
    ];
    
    const getSeverity = (product) => {
        switch (product.inventoryStatus) {
            case 'INSTOCK':
                return 'success';

            case 'LOWSTOCK':
                return 'warning';

            case 'OUTOFSTOCK':
                return 'danger';

            default:
                return null;
        }
    };

    return (
        <div data-aos="fade-up"
            data-aos-duration="3000">
          
           
        
            <div className='latestnews pt-[120px]'>
                <div className='container my-0 mx-auto'>
                    <div className='text-center mb-16 '>
                        <h2 className='text-[38px] font-semibold'>
                            Latest News
                        </h2>
                        <p className='text-[16px] font-normal text-[#838383;]'>Here is our top newses for your fasion guide.</p>
                    </div>
                    <div className='grid lg:grid-cols-3  md:grid-cols-3  sm:grid-cols-2  grid-cols-1 gap-x-5'>
                        <div className='Watch relative'>
                            <div className='relative'>
                                <img src='./Assets/img/fesiongirl.png' width={'100%'}></img>
                            </div>
                            <div className=' absolute right-6 top-7'>
                                <div className='bg-[#FFC224]  w-[100px] h-[40px] text-center p-2 ' >
                                    <span className='text-[#313131] text-[16px] font-medium'>Fashion</span>
                                </div>
                            </div>
                            <div className='pt-5 flex gap-3'>
                                <div>
                                    <ManFillColor />
                                </div>
                                <div className='text-[#838383] text-[16px] font-normal leading-[20.5px]  '>
                                    By Deniel
                                </div>
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="20" viewBox="0 0 18 20" fill="none">
                                        <path d="M17.7778 20.0002V17.0373C17.7778 15.4656 17.3095 13.9583 16.476 12.847C15.6425 11.7357 14.5121 11.1113 13.3333 11.1113H4.44444C3.2657 11.1113 2.13524 11.7357 1.30175 12.847C0.468252 13.9583 0 15.4656 0 17.0373V20.0002" fill="#FFC224" />
                                        <path d="M8.8889 8.88889C11.3435 8.88889 13.3333 6.89904 13.3333 4.44444C13.3333 1.98985 11.3435 0 8.8889 0C6.4343 0 4.44446 1.98985 4.44446 4.44444C4.44446 6.89904 6.4343 8.88889 8.8889 8.88889Z" fill="#FFC224" />
                                    </svg>
                                </div>
                                <div className='text-[#838383] text-[16px] font-normal leading-[20.5px] '>
                                    Aug 07, 2021
                                </div>

                            </div>
                            <p className='text-[#313131] text-[24px] font-semibold py-3'>
                                New Season Modern Scarf
                            </p>
                            <p className=' xl:w-[358px] text-[16px] text-[#838383] font-normal '>
                                Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint...........
                            </p>
                            <p className='flex gap-4 py-6'>
                                <div className='text-[#313131] font-medium leading-[20.8px]'>READ MORE</div>
                                <Arro />
                            </p>

                        </div>

                        <div className='Trending relative'>
                            <div className='relative'>
                                <img src='./Assets/img/trending.png' width={'100%'}></img>
                            </div>
                            <div className=' absolute right-6 top-7'>
                                <div className='bg-[#FFC224]  w-[100px] h-[40px] text-center p-2 ' >
                                    <span className='text-[#313131] text-[16px] font-medium'>Trending</span>
                                </div>
                            </div>
                            <div className='pt-5 flex gap-3'>
                                <div>
                                    <ManFillColor />
                                </div>
                                <div className='text-[#838383] text-[16px] font-normal leading-[20.5px]  '>
                                    By Deniel
                                </div>
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="20" viewBox="0 0 18 20" fill="none">
                                        <path d="M17.7778 20.0002V17.0373C17.7778 15.4656 17.3095 13.9583 16.476 12.847C15.6425 11.7357 14.5121 11.1113 13.3333 11.1113H4.44444C3.2657 11.1113 2.13524 11.7357 1.30175 12.847C0.468252 13.9583 0 15.4656 0 17.0373V20.0002" fill="#FFC224" />
                                        <path d="M8.8889 8.88889C11.3435 8.88889 13.3333 6.89904 13.3333 4.44444C13.3333 1.98985 11.3435 0 8.8889 0C6.4343 0 4.44446 1.98985 4.44446 4.44444C4.44446 6.89904 6.4343 8.88889 8.8889 8.88889Z" fill="#FFC224" />
                                    </svg>
                                </div>
                                <div className='text-[#838383] text-[16px] font-normal leading-[20.5px] '>
                                    Aug 07, 2021
                                </div>

                            </div>
                            <p className='text-[#313131] text-[24px] font-semibold py-3'>
                                Women’s Fashion Du
                            </p>
                            <p className=' xl:w-[358px] text-[16px] text-[#838383] font-normal '>
                                Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint...........
                            </p>
                            <p className='flex gap-4 py-6'>
                                <div className='text-[#313131] font-medium leading-[20.8px]'>READ MORE</div>
                                <Arro />
                            </p>

                        </div>
                        <div className='Trending relative'>
                            <div className='relative'>
                                <img src='./Assets/img/lifestyle.png ' width={'100%'}></img>
                            </div>
                            <div className=' absolute right-6 top-7'>
                                <div className='bg-[#FFC224]  w-[100px] h-[40px] text-center p-2 ' >
                                    <span className='text-[#313131] text-[16px] font-medium'>Trending</span>
                                </div>
                            </div>
                            <div className='pt-5 flex gap-3'>
                                <div>
                                    <ManFillColor />
                                </div>
                                <div className='text-[#838383] text-[16px] font-normal leading-[20.5px]  '>
                                    By Deniel
                                </div>
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="20" viewBox="0 0 18 20" fill="none">
                                        <path d="M17.7778 20.0002V17.0373C17.7778 15.4656 17.3095 13.9583 16.476 12.847C15.6425 11.7357 14.5121 11.1113 13.3333 11.1113H4.44444C3.2657 11.1113 2.13524 11.7357 1.30175 12.847C0.468252 13.9583 0 15.4656 0 17.0373V20.0002" fill="#FFC224" />
                                        <path d="M8.8889 8.88889C11.3435 8.88889 13.3333 6.89904 13.3333 4.44444C13.3333 1.98985 11.3435 0 8.8889 0C6.4343 0 4.44446 1.98985 4.44446 4.44444C4.44446 6.89904 6.4343 8.88889 8.8889 8.88889Z" fill="#FFC224" />
                                    </svg>
                                </div>
                                <div className='text-[#838383] text-[16px] font-normal leading-[20.5px] '>
                                    Aug 07, 2021
                                </div>

                            </div>
                            <p className='text-[#313131] text-[24px] font-semibold py-3'>
                                Summer Trending 2023
                            </p>
                            <p className=' xl:w-[358px] text-[16px] text-[#838383] font-normal '>
                                Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint...........
                            </p>
                            <p className='flex gap-4 py-6'>
                                <div className='text-[#313131] font-medium leading-[20.8px]'>READ MORE</div>
                                <Arro />
                            </p>
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
        </div>
    )
}

export default LatestNews