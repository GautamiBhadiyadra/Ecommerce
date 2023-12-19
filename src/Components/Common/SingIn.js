import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { LoginUser } from '../../Redux/Action';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const SingIn = () => {
  const data = useSelector((state) => state.fetch);

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const dispatch = useDispatch();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      // Dispatch login action
      await dispatch(LoginUser(formData));
      // Display success message using react-toastify
      toast.success('Login successful!', {
        position: toast.POSITION.TOP_CENTER,
      });
    } catch (error) {
      // Handle login failure
      console.error('Login failed:', error);
      // Display error message using react-toastify
      toast.error('Login failed. Please try again.', {
        position: toast.POSITION.TOP_CENTER,
      });
    }
  };
  return (
    <div className='header'>
      <section className="backdrop-blur-sm dark:bg-gray-900 fixed top-0 left-[0%] w-[100%] h-[100vh] z-[1] ">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0 ">
          <div className="w-full  rounded-lg shadow dark:border md:mt-0 sm:max-w-[36rem] xl:p-0 dark:bg-gray-800 dark:border-gray-700 ">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8 bg-white ">
              <h1 className="text-[20px] font-medium leading-tight tracking-tight text-[#313131] md:text-2xl dark:text-white text-center">
                Sing in
              </h1>
              <form className="space-y-4 md:space-y-6" onSubmit={handleLogin}>
                <div classNameName='gride grid-cols-3'>

                  <div classNameName='mb-3'>
                    <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                    <input type="email" name="email" value={formData.email} className=" border border-[#C4C4C4] text-gray-900 sm:text-sm focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600  dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" onChange={handleChange} />
                  </div>
                  <div classNameName='mb-3'>
                    <label for="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                    <input type="password" name="password" value={formData.password} className=" border border-[#C4C4C4] text-gray-900 sm:text-sm focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600  dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" onChange={handleChange} />
                  </div>
                </div>
                <button type="submit" className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-[16px] font-medium px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 bg-[#313131]">
                  Sing in
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default SingIn