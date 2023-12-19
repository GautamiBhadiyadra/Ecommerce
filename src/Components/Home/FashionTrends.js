import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
const FashionTrends = () => {
    useEffect(() => {
        AOS.init();
    }, [])
    return (
        <div className='pt-24'> 
            <div data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="1500">
                <div className='container my-0 mx-auto ' >
                    <div class="text-center max-w-2xl mx-auto">

                        <h1 className='text-[38px] mb-10  font-semibold  md:text-4xl'>
                            Best current fashion trends that are having a moment right now
                        </h1>
                    </div>
                    <div className='grid lg:grid-cols-4  md:grid-cols-3  sm:grid-cols-2  grid-cols-1 gap-10 mb-6'>
                        <div className='Watch relative flex justify-center'>
                            <div className='relative'>
                                <img src='./Assets/img/watch.png'></img>
                            </div>
                            <div className=' absolute bottom-5 left-8'>
                                <div className='bg-white  w-[150px] h-[40px] text-center p-2 ' >
                                    <span className='text-[#313131] text-[16px] font-medium'>WATCH</span>
                                </div>
                            </div>
                        </div>
                        <div className='sunglass relative flex justify-center'>
                            <div className='relative'>
                                <img src='./Assets/img/image4.png'></img>
                            </div>
                            <div className=' absolute bottom-5 left-8'>
                                <div className='bg-white  w-[150px] h-[40px] text-center p-2'>
                                    <span className='text-[#313131] text-[16px] font-medium'>SUNGLASSES</span>
                                </div>
                            </div>
                        </div>
                        <div className='shoes relative flex justify-center'>
                            <div className='relative'>
                                <img src='./Assets/img/shoes.png'></img>
                            </div>
                            <div className=' absolute bottom-5 left-8'>
                                <div className='bg-white  w-[150px] h-[40px] text-center p-2'>
                                    <span className='text-[#313131] text-[16px] font-medium'>SHOES</span>
                                </div>
                            </div>
                        </div>
                        <div className='accessorige relative flex justify-center'>
                            <div className='relative'>
                                <img src='./Assets/img/accessorige.png'></img>
                            </div>
                            <div className=' absolute bottom-5 left-8'>
                                <div className='bg-white  w-[150px] h-[40px] text-center p-2'>
                                    <span className='text-[#313131] text-[16px] font-medium'>ACCESSORIES</span>
                                </div>
                            </div>
                        </div>
                        <div className='perfumes relative flex justify-center'>
                            <div className='relative'>
                                <img src='./Assets/img/perfumes.png'></img>
                            </div>
                            <div className=' absolute bottom-5 left-8'>
                                <div className='bg-white  w-[150px] h-[40px] text-center p-2'>
                                    <span className='text-[#313131] text-[16px] font-medium'>PERFUMES</span>
                                </div>
                            </div>
                        </div>
                        <div className='bages relative flex justify-center'>
                            <div className='relative'>
                                <img src='./Assets/img/bages.png'></img>
                            </div>
                            <div className=' absolute bottom-5 left-8'>
                                <div className='bg-white  w-[150px] h-[40px] text-center p-2'>
                                    <span className='text-[#313131] text-[16px] font-medium'>BAGES</span>
                                </div>
                            </div>
                        </div>
                        <div className='clothes relative flex justify-center'>
                            <div className='relative'>
                                <img src='./Assets/img/clothes.png'></img>
                            </div>
                            <div className=' absolute bottom-5 left-8'>
                                <div className='bg-white  w-[150px] h-[40px] text-center p-2'>
                                    <span className='text-[#313131] text-[16px] font-medium'>CLOTHES</span>
                                </div>
                            </div>
                        </div>
                        <div className='headphone relative flex justify-center'>
                            <div className='relative'>
                                <img src='./Assets/img/headphone.png'></img>
                            </div>
                            <div className=' absolute bottom-5 left-10'>
                                <div className='bg-white  w-[150px] h-[40px] text-center p-2'>
                                    <span className='text-[#313131] text-[16px] font-medium'>HEADPHONE</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='grid lg:grid-cols-2  md:grid-cols-2 sm:grid-cols-1  grid-cols-1 gap-0 mb-6'>
                <div className='timewatch ' data-aos="flip-left">
                    <div className='flex justify-center items-center pt-28'>
                        <p className='text-[#FFF] text-[38px]  text-center font-semibold flex justify-center md:w-[400px] lg:w-[580px] w-[100%] '>
                            A watch isn’t About Telling time, it’s about your relationship with Time!
                        </p>
                    </div>

                    <div className='text-center pt-11'>
                        <button class="bg-transparent  font-medium text-white py-2 px-5  border-2 border-[#FFC224] hover:border-transparent  text-[16px]">
                            View More
                        </button>
                    </div>

                </div>
                <div className='fashionperce ' data-aos="flip-left">
                    <div className='flex justify-center items-center pt-28'>
                        <p className='text-[#FFF] text-[38px]  text-center font-semibold flex justify-center w-[580px] '>
                            Fashion is Just another Accessories for someone with  Style!
                        </p>
                    </div>
                    <div className='text-center pt-11 '>
                        <button class="bg-transparent  font-medium text-white py-2 px-5  border-2 border-[#FFC224] hover:border-transparent  text-[16px]">
                            View More
                        </button>
                    </div>

                </div>
            </div>
        </div >
    )
}

export default FashionTrends