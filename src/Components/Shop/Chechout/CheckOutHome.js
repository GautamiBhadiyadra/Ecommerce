import React from 'react'
import Footer from '../../Common/Footer'
import Nave from '../../Common/Nave'
import Checkout from './Checkout'

const CheckOutHome = () => {
    return (
        <div>
            <Nave color={'#313131'} />
            <Checkout />
            <Footer />
        </div>
    )
}

export default CheckOutHome