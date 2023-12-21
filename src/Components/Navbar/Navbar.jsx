import React from 'react';
import logo from '../../assets/images/logo.png'

const Navbar = () =>{
    return (
    <>
        <div className="bg-black p-1 w-full">
            <h3 className='text-white font-inter text-2xl font-bold tracking-normal leading-none text-center'>
                Welcome ALL
            </h3>
        </div>
        <div className='flex justify-around items-center'>
            <div>
                <img className='h-20 w-auto' src={logo} alt='store'></img>
            </div>
            <div className='flex flex-row items-center'>
                <button className='font-inter text-base font-medium tracking-normal leading-none text-center mr-4'>
                    Logout
                </button>
                <div className='flex flex-row items-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        strokeWidth="2" 
                        stroke="#000" 
                        className="w-6 h-6">
                            <path 
                                strokeLinecap="round" 
                                strokeLinejoin="round" 
                                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                    </svg>
                    <p className='font-inter text-base font-medium tracking-normal leading-none text-center mr-2'>
                        Wish List
                    </p>
                </div>
                <div className='flex flex-row items-center cursor-pointer'>
                    <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        strokeWidth="2" 
                        stroke="#000" 
                        className="w-6 h-6">
                            <path 
                                strokeLinecap="round" 
                                strokeLinejoin="round" 
                                d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" 
                            />
                    </svg>
                    <p className='font-inter text-base font-medium tracking-normal leading-none text-center'>
                        Shopping bag
                    </p>
                </div>
            </div>
        </div>
        <div className='bg-black p-4 w-full flex justify-around'>
            <div className='text-white font-inter text-base font-medium tracking-normal leading-none text-center'>
                50% Off
            </div>
            <div className='text-white font-inter text-base font-medium tracking-normal leading-none text-center'>
                Free shipping and returns
            </div>
            <div className='text-white font-inter text-base font-medium tracking-normal leading-none text-center'>
                Different payment methods
            </div>
        </div>
    </>)
}
export default Navbar;