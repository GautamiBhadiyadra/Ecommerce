import React from 'react'
import Nave from '../../Common/Nave'
import Footer from '../../Common/Footer'
import ShoppingBag from './ShoppingBag'

const ShoppingBagHome = () => {
    return (
        <div>
            <Nave color={'#313131'} />
            <ShoppingBag/>
            <Footer/>
        </div>
    )
}

export default ShoppingBagHome