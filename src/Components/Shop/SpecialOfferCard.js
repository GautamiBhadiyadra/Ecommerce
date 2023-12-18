import React from 'react'
import RadHeart from '../Icon/RadHeart'
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

const SpecialOfferCard = (props) => {
    return (
        <div className='leg   relative '>
            <div className='relative'>
                <div className='h-[300px] w-full overflow-hidden bg-[#F5F5F5] flex justify-center items-center relative'>
                    <div className='w-[75px] h-[30px] text-white text-center absolute right-3 top-0 z-10'>
                        <RadHeart />
                    </div>
                    <div className="relative group">
                        <img src={props.img} width={'100%'} height={'300px'} alt="Product" />
                        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-black/20 flex items-center justify-center transition-opacity duration-300">
                        <Link to='/viewmore'>
                            <button className="bg-black text-white py-2 px-5">View More</button>
                        </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className=' pt-9'>
                <div className='flex justify-between items-center'>
                    <p className='text-[#313131] text-[20px] font-medium pr-4'>
                        {props.details}
                    </p>
                    <p className='text-[#FF2424]  text-[20px] font-semibold'>{props.price}</p>
                </div>
                <div className='py-4'>
                    <Rating name="size-medium" defaultValue={2} />
                </div>
                <div >
                    <Button className='w-[150px] h-[40px] !text-black !bg-[#FFC224] flex items-center text-center text-[16px] font-medium'>
                        <Link to='/shoppingbag'> Add To Bag</Link>
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default SpecialOfferCard