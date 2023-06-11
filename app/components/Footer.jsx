import React from 'react'
import {FaInstagram} from 'react-icons/fa'
import {FaTiktok} from 'react-icons/fa'
import Link from 'next/link'

export default function Footer() {
return (
    // gray-800
    <footer className="bg-black border-t text-white ">
    <div className="max-w-screen-xl mx-auto py-10 px-4 sm:px-6 lg:py-16 lg:px-8">
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 sm:gap-[300px] sm:h-44">
        <div className="mb-8 sm:mb-0">
        <Link href='https://www.instagram.com/direct/t/105483564324974' className="underline  text-lg font-medium mb-2">Book With Us</Link>
        <p className="">Dm us and plan the perfect reparations ! We provide everything you need to make your Car memorable</p>
        </div>
        <div className="mb-8 sm:mb-0">
        <h3 className="text-lg font-medium mb-2">Location:</h3>
        <ul>
            <li className="mb-2"><a className=''>BROWARD COUNTY, FL</a></li>
        </ul>
        <h3 className="text-lg font-medium mb-2">Phone:</h3>
        <ul>
            <li className="mb-2"><a href="tel:954-445-2745" className='underline'>954-445-2745</a></li>
        </ul>
        <h3 className="text-lg font-medium mb-2">Email:</h3>
        <ul>
            <li className="mb-2"><a href="mailto:picnicsoflo7@gmail.com" className='underline'>HoosGarage.com</a></li>
        </ul>
        </div>
        <div className="mb-8 sm:mb-0">
        <h3 className="text-lg font-medium mb-2">Follow our socials</h3>
        <ul className='flex space-x-10'>
        <li><a href="https://www.instagram.com/hoosgarage/" target="_blank" rel="noopener noreferrer"><FaInstagram className='text-2xl cursor-pointer hover:text-yellow-600'/></a></li>
            <li className="mb-2"><a href="https://www.tiktok.com/@hoosgarage" target="_blank" rel="noopener noreferrer"><FaTiktok className='text-2xl cursor-pointer hover:text-yellow-600'/></a></li>
        </ul>
        </div>
    </div>
    </div>
    {/* <div className="bg-gray-700 py-4">
    <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-gray-400">&copy; 2023 PicnicPlanner. All rights reserved.</p>
    </div>
    </div> */}
</footer>

)
}