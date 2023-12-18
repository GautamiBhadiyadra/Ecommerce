import React from 'react'
import FashionTrends from './FashionTrends'
import BestSellers from './BestSellers'
import LatestNews from './LatestNews'
import Footer from '../Common/Footer'
import Header from '../Common/Header'

const Home = () => {
    return (
        <>
            <Header />
            <FashionTrends />
            <BestSellers />
            <LatestNews />
            <Footer />
        </>
    )
}

export default Home