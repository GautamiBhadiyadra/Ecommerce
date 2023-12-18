import React from 'react'
import Pluse from '../../Icon/Pluse'
import Mainas from '../../Icon/Mainas'

const ShoppingBagcart = (props) => {
    return (

        <div class="justify-between mb-6 bg-white py-6 sm:flex sm:justify-start border-b border-[#C4C4C4]">
            <div className='h-[330px] overflow-hidden bg-[#F5F5F5] flex justify-center' >
                <img src={props.img} width={'100%'} ></img>
            </div>
            <div class="sm:ml-4 sm:flex sm:w-full sm:justify-between py-10">
                <div class="mt-5 sm:mt-0 ">
                    <h2 class="text-[26px] font-medium text-[#313131] pb-[30px]">{props.title}</h2>
                    <p className=' text-[#313131] text-[16px] font-normal pb-[15px]'>Size: <span className='text-[#838383] text-[16px] font-normal'>{props.size}</span></p>
                    <div class="flex items-center border-gray-100  pb-[30px]">
                        <span className='text-[16px] font-normal text-[#313131] pr-4'>Quantity:</span>
                        <span class="cursor-pointer  py-1  duration-100  hover:text-blue-50"> <Pluse /></span>
                        <input class="h-8 w-8   text-center text-xs outline-none text-[#838383]" type="number" value="2" min="1" />
                        <span class="cursor-pointer   py-1  duration-100  hover:text-blue-50"> <Mainas /></span>
                    </div>
                    <h2 class="text-[26px] font-medium text-[#313131]">{props.price}</h2>
                </div>
                <div class="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
                    <div class="flex items-center space-x-4">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="h-5 w-5 cursor-pointer text-[] duration-150 hover:text-red-500">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default ShoppingBagcart