"use client"
import React, {useState} from 'react'
// import Navbar from './components/Navbar'
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai'
import Footer from './components/Footer'
import Services from './components/Services'
import Work from './components/Work'
import Image from 'next/image';
import img5 from '/public/images/logo2.jpg'

export default function HomePage() {
  const [nav,setNav] = useState(false);
    const handleNav = ()=> {
        setNav(!nav)
    }

  return (
    <div className='bg-gray-200'>
    <div id='home' className='widescreen:section-min-height tallscreen:section-min-height mb-12 flex scroll-mt-40 flex-col-reverse items-center justify-center gap-8'>
    <div><nav className='fixed w-full left-0 z-10 shadow sm:dark:bg-black dark:bg-black items-center justify-between flex'>
            <div className='flex m-auto p-4 sm:p-6 capitalize space-x-10'>
            <h1 className="text-3xl font-medium sm:ml-8 text-white ">
            <a href="#home" className='flex justify-center items-center space-x-5'>
            <Image src={img5} alt=' logo' className='h-20 w-20 cursor-pointer'/>
                HOO&apos;S GARAGE
                </a>
                </h1>
                
            <ul className='hidden sm:flex px-10 items-center justify-between space-x-16 text-white text-lg'>
                <li>
                <a onClick={() =>
											document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' })
										} className=" hover:text-[#004792] cursor-pointer">Home</a>
                </li>
                <li>
                <a onClick={() =>
											document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })
										} className=" hover:text-[#004792] cursor-pointer">Services</a>
                </li>
                <li>
                <a onClick={() =>
											document.getElementById('ourwork')?.scrollIntoView({ behavior: 'smooth' })
										} className=" hover:text-[#004792] cursor-pointer">Our Work</a>
                </li>
                <li>
                <a  onClick={() =>
											document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
										} className=" hover:text-[#004792] cursor-pointer">Contact</a>
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
                <a onClick={() =>
											document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' })
										} className="text-gray-700 hover:text-gray-900">Home</a>
                </li>
                <li onClick={handleNav} className=''>
                <a onClick={() =>
											document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })
										} className="text-gray-700 hover:text-gray-900">Services</a>
                </li>
                <li onClick={handleNav} className=''>
                <a onClick={() =>
											document.getElementById('ourwork')?.scrollIntoView({ behavior: 'smooth' })
										} className="text-gray-700 hover:text-gray-900">Our Work</a>
                </li>
                <li onClick={handleNav} className=''>
                <a onClick={() =>
											document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
										} className="text-gray-700 hover:text-gray-900">Contact</a>
                </li>
            </ul>
            </div>
            </div>
        </nav></div>
    
    </div>
        
{/* Home Section */}
      <div className='flex items-center justify-center h-[450px] sm:h-[680px] max-lg:h-[485px] mb-12 sm:bg-fixed bg-center sm:bg-[url(../public/images/bmw-edit.png)] bg-[url(../public/images/bmw-second.png)] sm:bg-cover bg-[length:650px_450px]'/>
      <section className='text-center max-w-2xl justify-center mx-auto flex-col'>
        <div className='flex-col space-y-10'>
        <h1 className='font-bold text-4xl'>
        {/* WHAT IS HOO&apos;S GARAGE? */}
        ABOUT US
        </h1>
        <p className='mx-auto w-96 lg:w-full'>
        Take your car to the next level, We provide PRODUCTS that will bring out the most in your build, browse through our catalog and start standing out today! Most Popular
        </p>
        </div>

        </section>

        <hr className="h-px mt-10 w-1/2 mx-auto bg-gray-200 border-0 dark:bg-gray-700"/>

    <section id='services' className="pt-20 lg:pt-[130px] lg:pb-[90px] text-center max-w-7xl justify-center mx-auto">
        <Services/>
    </section>


{/* <hr className="mx-auto w-1/2 bg-black dark:bg-white" /> */}
<hr className="h-px mt-6 w-1/2 mx-auto bg-gray-200 border-0 dark:bg-gray-700"/>

{/* Work portfolio Section */}
{/* pt-20 lg:pt-[120px] pb-12 lg:pb-[90px] text-center max-w-7xl justify-center mx-auto */}
<section id="ourwork" className="pt-20 lg:pt-[120px] pb-10 lg:pb-[90px] text-center max-w-7xl justify-center mx-auto">
<Work/>
</section>

{/* Contact Section */}
<section id='contact' className=''>
<Footer />
</section>
    </div>
    
  )
}
