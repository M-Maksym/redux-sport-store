import React from 'react';
import logo from '../../assets/images/logo.png';

const Footer = () =>{
    const year = new Date().getFullYear();
    return (<div>
     <div className='flex items-center justify-center'>
        <hr className='h-px w-4/5 bg-gray-400 opacity-50 outline-none border-none'/>
    </div>
    <div className='flex items-center justify-around pt-1'>
        <div>
            <img className='h-20' src={logo} alt='logo' />
        </div>
        <div>
            <p className='text-black text-sm font-inter no-underline normal-case'>
                Copyright&copy; {year} page by Maks Meleshko
            </p>
        </div>
    </div>   
    </div>)
}
export default Footer;