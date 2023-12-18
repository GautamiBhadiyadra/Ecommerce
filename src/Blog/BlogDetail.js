import React from 'react'
import ManFillColor from '../Components/Icon/ManFillColor'

const BlogDetail = (props) => {
    return (
        <>
            <div className='w-[1133px] h-[480px]  '>
                <img src={props.img}></img>
            </div>
            <div className='pt-5 flex gap-3'>
                <div>
                    <ManFillColor />
                </div>
                <div className='text-[#838383] text-[16px] font-normal leading-[20.5px]  '>
                    By Deniel
                </div>
                <div>
                    <img src='./Assets/img/date.png'></img>

                </div>
                <div className='text-[#838383] text-[16px] font-normal leading-[20.5px] '>
                    Aug 07, 2021
                </div>
            </div>
            <p className='text-[#313131] text-[26px] font-medium pt-7'>{props.title}</p>
            <p className='text-[#838383] text-[16px] font-normal py-4'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labor dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliqui comi modo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillumfugiat nu pariatur.Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,</p>

        </>
    )
}

export default BlogDetail