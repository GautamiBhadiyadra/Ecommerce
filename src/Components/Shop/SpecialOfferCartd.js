import React from 'react'

const SpecialOfferCartd = (props) => {
    return (
       
            <div className='pt-7  flex '>
                <div className='w-[80px] h-[80px]'>
                    {/* <img src={props.img} width={' 68.18px'} height={' 67.039px'}></img> */}
                    <img src={props.img} width={props.width} height={props.height}></img>

                </div>
                <div className='py-2 pl-5'>
                    <p className='18px font-semibold text-[#313131]'>{props.title}</p>
                    <p className='text-[#FF2424]  text-[20px] font-semibold'>{props.price}</p>
                </div>
            </div>
     
    )
}

export default SpecialOfferCartd