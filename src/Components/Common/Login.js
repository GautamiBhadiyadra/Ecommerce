import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
    return (

        <section class="backdrop-blur-sm  fixed top-0 left-[0%] w-[100%] h-[100vh] z-[1]">
            <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0 ">
                <div class="w-full  rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                    <div class="p-6 space-y-4 md:space-y-6 sm:p-8 bg-white">
                        <h1 class="text-[20px] font-medium leading-tight tracking-tight text-[#313131] md:text-2xl  text-center">
                            Sign in 
                        </h1>
                        <form class="space-y-4 md:space-y-6" action="#">
                            <div>
                                <label for="email" class="block mb-2 text-sm font-medium text-[#313131]dark:text-white">Username Or Email</label>
                                <input type="email" name="email" id="email" class=" border border-[#C4C4C4] text-[#313131]sm:text-sm focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-white  dark:focus:ring-blue-500 dark:focus:border-blue-500"  required="" />
                            </div>
                            <div>
                                <label for="password" class="block mb-2 text-sm font-medium text-[#313131]dark:text-white">Password</label>
                                <input type="password" name="password" id="password"  class=" border border-[#C4C4C4] text-[#313131]sm:text-sm focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-white dark:border-gray-600  dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
                            </div>
                            <div class="flex items-center justify-between">
                                <div class="flex items-start">
                                    <div class="flex items-center h-5">
                                        <input id="remember" aria-describedby="remember" type="checkbox" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-white dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required="" />
                                    </div>
                                    <div class="ml-3 text-sm">
                                        <label for="remember" class="text-[#313131] text-[15px] font-medium ">Remember me</label>
                                    </div>
                                </div>
                                <a href="#" class="text-[15px] font-medium text-[#313131] hover:underline dark:text-primary-500">Lost Your Passwprd?</a>
                            </div>
                            <button type="submit" class="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-[16px] font-medium px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 bg-[#313131]">Login </button>
                            <p class="text-sm font-light text-[#313131]">
                                Don’t have an account yet? <Link to='/register' class="font-medium text-primary-600 hover:underline dark:text-primary-500">Sign up</Link>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Login