import { Checkbox } from '@mui/material'
import React from 'react'
import Checkout from '../Components/Shop/Chechout/Checkout'
import Footer from '../Components/Common/Footer'
import Nave from '../Components/Common/Nave'
import ShopHeader from '../Components/Shop/ShopHeader'
import Blog from './Blog'

const BlogHome = () => {
  return (
    <div>
 
    <ShopHeader/>
  
      <Blog/>
      <Footer/>
    </div>
  )
}

export default BlogHome