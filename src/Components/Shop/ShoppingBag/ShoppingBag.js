import { Label } from '@mui/icons-material'
import React from 'react'
import Pluse from '../../Icon/Pluse'
import Mainas from '../../Icon/Mainas'
import ShoppingBagcart from './ShoppingBagcart'
import Bag from '../../Icon/Bag'
import { Link } from 'react-router-dom'

const ShoppingBag = () => {
  return (
    <div className='mb-44  mt-16'>
      <div className='container my-0 mx-auto'>
        <h2 className='text-[38px] text-[#313131] font-semibold border-b border-[#C4C4C4] pb-12' >Shopping Bag</h2>
        <div class="md:flex md:space-x-6 xl:px-0 pt-10 ">
          <div class=" md:w-2/3">
            <ShoppingBagcart img='./Assets/img/flats.png' title='Pointed Toe Flats' size='7' price='$90.00' />
            <ShoppingBagcart img='./Assets/img/ladieshandbag.png' title='Pointed Toe Flats' size='7' price='$90.00' />
            <div className='flex justify-between border-b  border-[#C4C4C4] pb-4'>
              <p className='text-[#313131] text-[26px] font-medium'>Subtotal</p>
              <p className='text-[#FF2424] text-[26px] font-medium'>$144.00</p>
            </div>
          </div>
          <div className='mt-6 w-auto  h-full p-6 md:mt-0 md:w-1/3'>
            <div class=" p-6 w-full  h-full bg-[#F5F5F5F5] ">
              <h2 className='md:text-[30px] lg:text-[34px] sm:text-[38px] text-[#313131] font-semibold pb-7' >Shopping Bag</h2>
              <div class="flex justify-between">
                <p class="ttext-[20px] text-[#313131] font-normal pb-7">Sub Total</p>
                <p class="text-[20px] text-[#838383] font-normal pb-7">$144.00</p>
              </div>
              <div class="flex justify-between border-b border-[#C4C4C4]">
                <p class="ttext-[20px] text-[#313131] font-normal pb-7">Delivery</p>
                <p class="text-[20px] text-[#838383] font-normal pb-7">
                  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
                    <g opacity="0.8">
                      <path d="M11 21C16.5228 21 21 16.5228 21 11C21 5.47715 16.5228 1 11 1C5.47715 1 1 5.47715 1 11C1 16.5228 5.47715 21 11 21Z" stroke="#313131" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                      <path d="M11 7V11" stroke="#313131" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                      <path d="M11 15H11.01" stroke="#313131" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    </g>
                  </svg>
                </p>
              </div>
              <div class="flex mb-4 items-center pt-5">
                <input id="disabled-radio-1" type="radio" value="" name="disabled-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 mr-2" />
                <label for="disabled-radio-1" class="ms-2 text-base font-normal text-[#838383] dark:text-gray-500 text-center ">Standart Delivery (Free)</label>
              </div>
              <div class="flex mb-4 items-center">
                <input id="disabled-radio-1" type="radio" value="" name="disabled-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 mr-2" />
                <label for="disabled-radio-1" class="ms-2 text-base font-normal text-[#838383] dark:text-gray-500 text-center ">Express Delivery ($ 15)</label>
              </div>
              <div class="flex justify-between border-b border-[#C4C4C4]">
                <p class="ttext-[20px] text-[#313131] font-normal pb-7">Promo</p>
                <p class="text-[20px] text-[#838383] font-normal pb-7">
                  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
                    <g opacity="0.8">
                      <path d="M11 21C16.5228 21 21 16.5228 21 11C21 5.47715 16.5228 1 11 1C5.47715 1 1 5.47715 1 11C1 16.5228 5.47715 21 11 21Z" stroke="#313131" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                      <path d="M11 7V11" stroke="#313131" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                      <path d="M11 15H11.01" stroke="#313131" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    </g>
                  </svg>
                </p>
              </div>
              <div class="flex justify-between pt-5">
                <p class="ttext-[20px] text-[#313131] font-normal pb-7">Total</p>
                <p class="text-[20px] text-[#313131;] font-normal pb-7">$144.00</p>
              </div>
              <button class="mt-6 h-[50px] w-[150px] rounded-md bg-[#FFC224]  py-1.5 font-medium text-[#313131] hover:bg-blue-600">
                <Link to='/checkout'>
                  Check out
                </Link>
              </button>
            </div>
            <p className='text-[26px] text-[#313131] font-normal pt-7'>Need Aditional Help?</p>
            <p className='text-[16px] text-[#838383] font-normal pt-7 md:w-[270px]'>Call to our Child from customer service from Monday to
              Friday  from 9:00 to 17:00</p>

            <p className='text-[16px] text-[#838383] font-normal pt-7'>Phone: + 1234567890</p>
          </div>

        </div>
        <div className='mt-20'>
          <h2 className='text-[38px] text-[#313131] font-semibold text-center pb-12' >Shopping Bag</h2>
          <div>
            <div className='grid lg:grid-cols-3  xl:grid-cols-4 md:grid-cols-3  sm:grid-cols-2  grid-cols-1 gap-x-5 gap-y-36 mb-6 pt-10 '>
              <div className='cap  h-[358px] relative '>

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
      </div>
    </div>
  )
}

export default ShoppingBag