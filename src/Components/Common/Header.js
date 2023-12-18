import React, { useState } from 'react'
import Logo from '../Icon/Logo';
import Search from '../Icon/Search';
import Cart from '../Icon/Cart';
import Main from '../Icon/Main';
import { Link } from 'react-router-dom';
import Nave from './Nave';


const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div>
            <div className="header mb-11sm:object-left  sm:object-fill md:bg-right ">
                <Nave />
                <div className='container my-0 mx-auto'>
                    <div className='absolute'>
                        <p className='text-white lg:text-[50px] text-[30px] font-bold  md:text-[50px] md:w-[698px] lg:w-[698px]  sm:text-[40px] sm:w-[350px] w-[300px] flex justify-start items-center lg:py-60 md:py-60 sm:py-40 py-40  '>
                            Get The Best Product At Your Home
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header