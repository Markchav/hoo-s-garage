"use client"
import React, {useState} from 'react'
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai'
import Link from 'next/link';
import Image from 'next/image';
import img5 from '../../public/images/logo2.jpg'

export default function Navbar() {

    const [nav,setNav] = useState(false);
    const handleNav = ()=> {
        setNav(!nav)
    }
return (
    <div>
    {/* fixed or sticky maybe top-1*/}
    <nav className='fixed w-full left-0 z-10 shadow sm:dark:bg-black dark:bg-black items-center justify-between flex'>
            <div className='flex m-auto p-4 sm:p-6 capitalize space-x-10'>
            <h1 className="text-3xl font-medium sm:ml-8 text-white ">
            <a href="#home" className='flex justify-center items-center space-x-5'>
            <Image src={img5} alt=' logo' className='h-20 w-20 cursor-pointer'/>
                HOO&apos;S GARAGE
                </a>
                </h1>
                
            <ul className='hidden sm:flex px-10 items-center justify-between space-x-16 text-white text-lg'>
                <li>
                <a href="#home" className=" hover:text-[#004792]">Home</a>
                </li>
                <li>
                <a href="#services" className=" hover:text-[#004792]">Services</a>
                </li>
                <li>
                <a href="#ourwork" className=" hover:text-[#004792]">Our Work</a>
                </li>
                <li>
                <a href="#contact" className=" hover:text-[#004792]">Contact</a>
                </li>
            </ul>

            {/* Mobile Button */}
            <div onClick={handleNav} className='sm:hidden block z-10 px-4 mt-7'>
                {
                    nav ? <AiOutlineClose className='text-black'  size={20}/> : <AiOutlineMenu className='text-white' size={20}/>
                }
                
            </div>
            {/* Mobile Menu */}
            <div className={nav ? 'sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center h-screen bg-white w-full text-center ease-in duration-300'
            :'sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-transparent text-center ease-in duration-300'} >
            <ul className='px-10 items-center justify-between flex flex-col gap-5 text-lg'>
                <li onClick={handleNav} className=''>
                <a href="#home" className="text-gray-700 hover:text-gray-900">Home</a>
                </li>
                <li onClick={handleNav} className=''>
                <a href="#services" className="text-gray-700 hover:text-gray-900">Services</a>
                </li>
                <li onClick={handleNav} className=''>
                <a href="#ourwork" className="text-gray-700 hover:text-gray-900">Our Work</a>
                </li>
                <li onClick={handleNav} className=''>
                <a href="#contact" className="text-gray-700 hover:text-gray-900">Contact</a>
                </li>
            </ul>
            </div>
            </div>
        </nav>
    
    {/* <div className="bg-gray-50 py-4 px-6 sticky">
        <div className="container mx-auto flex justify-between items-center">
        <div className="text-lg font-bold">Logo</div>
        <div className="space-x-16">
            <a href="#" className="text-gray-700 hover:text-gray-900">Home</a>
            <a href="#" className="text-gray-700 hover:text-gray-900">About</a>
            <a href="#" className="text-gray-700 hover:text-gray-900">Contact</a>
        </div>
        </div>
    </div> */}
    </div>
)
}

// {/* <section className="container mx-auto flex items-center justify-between p-4">
// <h1 className="text-3xl font-medium">
// <a href="#hero">🛞</a>
// </h1>
// <div>

// <nav className="hidden space-x-8 text-xl md:block" aria-label="main">
//     <a href="#home" className="hover:opacity-90">Home</a>
//     <a href="#about" className="hover:opacity-90">About</a>
//     <a href="#contact" className="hover:opacity-90">Contact Us</a>
// </nav>
// </div>
// {/* Mobile Button */}
// <div onClick={handleNav} className='sm:hidden block z-10'>
//         {
//             nav ? <AiOutlineClose className='text-black'  size={20}/> : <AiOutlineMenu className='text-black' size={20}/>
//         }
        
//     </div>
//     {/* Mobile Menu */}
//     <div className={nav ? 'sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-peach text-center ease-in duration-300'
//     :'sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300'} >
//     <ul className='px-10 items-center justify-between'>
//         <li onClick={handleNav} className={pathname === '/' ? activeLink : inactiveLink}>
//         <a href="#home" className="hover:opacity-90">Home</a>
//         </li>
//         <li onClick={handleNav} className={pathname.includes('/our-story') ? activeLink : inactiveLink}>
//         <a href="#about" className="hover:opacity-90">About</a>
//         </li>
//         <li onClick={handleNav} className={pathname.includes('/styles') ? activeLink : inactiveLink}>
//         <a href="#contact" className="hover:opacity-90">Contact Us</a>
//         </li>
//     </ul>
//     </div>
// </section> */}