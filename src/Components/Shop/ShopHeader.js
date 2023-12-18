import React, { useState } from 'react'
import Logo from '../Icon/Logo';
import Search from '../Icon/Search';
import Cart from '../Icon/Cart';
import Main from '../Icon/Main';
import { Link } from 'react-router-dom';

const ShopHeader = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div>
            <div className="shop sm:bg-right bg-right  md:bg-right ">
                <div className='container my-0 mx-auto'>
                    <nav className="  py-2.5 dark:bg-gray-800 relative" >
                        <div className="flex flex-wrap  justify-between items-center mx-auto max-w-screen-xl">
                            <Logo />
                            <button
                                onClick={toggleMenu}
                                className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                                aria-controls="mobile-menu-2"
                                aria-expanded={isMenuOpen ? 'true' : 'false'}
                            >
                                <span className="sr-only">Open main menu</span>
                                <svg
                                    className={`${isMenuOpen ? 'hidden' : ''} w-6 h-6`}
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                                        clipRule="evenodd"
                                    ></path>
                                </svg>
                                <svg
                                    className={`${isMenuOpen ? '' : 'hidden'} w-6 h-6`}
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                        clipRule="evenodd"
                                    ></path>
                                </svg>
                            </button>
                            <div
                                className={`${isMenuOpen ? 'block' : 'hidden'
                                    } justify-between items-center w-full lg:flex lg:w-auto lg:order-2`}
                                id="mobile-menu-2"
                            >
                                <div>
                                    <ul class="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0 text-white">
                                        <li>
                                            <Link to='/' class="block py-2 pr-4 pl-3 text-white rounded   font-medium lg:p-0 dark:text-white" aria-current="page">Home</Link>

                                        </li>
                                        <li>
                                            <a href="#" class="block py-2 pr-4 pl-3 text-white border-  font-medium border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">About As</a>
                                        </li>
                                        <li>
                                            <Link to='/shop' className="block py-2 pr-4 pl-3 text-white border-b  font-medium border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">Shope</Link>
                                        </li>
                                        <li>
                                            <Link to='/blog' class="block py-2 pr-4 pl-3 text-white border-b  font-medium border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">Blog</Link>
                                        </li>
                                        <li>
                                            <Link to='/contact' class="block py-2 pr-4 pl-3 text-white font-medium font-medium border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">Contact Us</Link>
                                        </li>
                                    </ul>
                                </div>

                                <div className="flex items-end justify-start lg:order-2">
                                    <div
                                        className="  text-white  focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800"
                                    >
                                        <Search />
                                    </div>
                                    <div

                                        className="text-white focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                                    >
                                        <Cart />
                                    </div>
                                    <div

                                        className="text-white  focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm  lg:pl-5 py-2 lg:py-2.5 mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                                    >
                                        <Main />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </nav>

                </div>
            </div>
        </div>
    )
}

export default ShopHeader