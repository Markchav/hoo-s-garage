import React from 'react'
import Image from 'next/image'
import img2 from '../../public/images/bmw-ScreenShot.png'
import img11 from '../../public/images/calipers.png'

export default function Services() {
  return (
    <div className="container">
    <div className="flex flex-wrap -mx-4">
    <div className="w-full px-4">
        <div className="text-center lg:mx-4 mx-auto mb-12 lg:mb-20 max-w-[300px] sm:max-w-[300px] ">
            {/* <span className="font-semibold text-lg text-primary mb-2 block">
            Our Services
            </span> */}
            <h2 className="font-bold text-3xl sm:text-4xl md:text-[36px] text-dark mb-4 ">
                Services Offered
            </h2>

        </div>
    </div>
    </div>
    <div className="flex flex-wrap -mx-4 ">
        <div className=" md:w-1/2 lg:w-1/3 px-4 w-4/5 mx-auto ">
            <div className=" p-10 md:px-7 xl:px-10 rounded-[20px] bg-gray-200 shadow-md hover:shadow-lg mb-8 border shadow-slate-400">
            <a href='https://www.instagram.com/p/CGGhcHClqCz/' target="_blank" rel="noopener noreferrer" className="w-[180px] h-[120px] flex items-center justify-center mx-auto bg-primary rounded-2xl mb-8">
                <Image className="w-full" src={img2} width={50} height={50} alt="Card image"/>
            </a>
            <h4 className="font-semibold text-xl text-dark mb-3">
                Rim Painting
            </h4>
            <p className="text-body-color">
                We dejoy working with discerning clients, people for whom
                quality, service, integrity & aesthetics.
            </p>
            </div>
        </div>
    <div className=" md:w-1/2 lg:w-1/3 px-4 w-4/5 mx-auto">
        <div className="p-10 md:px-7 xl:px-10 rounded-[20px] bg-gray-200  shadow-md hover:shadow-lg mb-8 border shadow-slate-400">
        <a href='https://www.instagram.com/p/CGGhcHClqCz/' target="_blank" rel="noopener noreferrer" className="w-[180px] h-[120px] flex items-center justify-center bg-primary rounded-2xl mb-8 mx-auto">
                <Image className="w-full" src={img11} width={50} height={50} alt="Card image"/>
            </a>
            <h4 className="font-semibold text-xl text-dark mb-3">
            Caliper Painting
            </h4>
            <p className="text-body-color">
                We dejoy working with discerning clients, people for whom
                quality, service, integrity & aesthetics.
            </p>
        </div>
    </div>
        <div className=" md:w-1/2 lg:w-1/3 px-4 w-4/5 mx-auto">
            <div className="p-10 md:px-7 xl:px-10 rounded-[20px] bg-gray-200  shadow-md hover:shadow-lg mb-8 border shadow-slate-400">
            <a href='https://www.instagram.com/p/CLt4bRPlwsY/' target="_blank" rel="noopener noreferrer" className="w-[180px] h-[120px] flex items-center justify-center mx-auto bg-primary rounded-2xl mb-8">
                <Image className="w-full" src={img2} width={50} height={50} alt="Card image"/>
            </a>
            <h4 className="font-semibold text-xl text-dark mb-3">
            Headlight Restoration
            </h4>
            <p className="text-body-color">
                We dejoy working with discerning clients, people for whom
                qualuty, service, integrity & aesthetics.
            </p>
        </div>
        </div>
        <div className=" md:w-1/2 lg:w-1/3 px-4 w-4/5 mx-auto">
            <div className="p-10 md:px-7 xl:px-10 rounded-[20px] bg-gray-200  shadow-md hover:shadow-lg mb-8 shadow-slate-400">
            <a href='https://www.instagram.com/p/CGGhcHClqCz/' target="_blank" rel="noopener noreferrer" className="w-[180px] h-[120px] flex items-center justify-center mx-auto bg-primary rounded-2xl mb-8">
                <Image className="w-full" src={img2} width={50} height={50} alt="Card image"/>
            </a>
            <h4 className="font-semibold text-xl text-dark mb-3">
            Chrome Delete
            </h4>
            <p className="text-body-color">
                We dejoy working with discerning clients, people for whom
                qualuty, service, integrity & aesthetics.
            </p>
        </div>
        </div>
        <div className=" md:w-1/2 lg:w-1/3 px-4 w-4/5 mx-auto">
            <div className="p-10 md:px-7 xl:px-10 rounded-[20px] bg-gray-200  shadow-md hover:shadow-lg mb-8 shadow-slate-400">
            <a href='https://www.instagram.com/p/CGGhcHClqCz/' target="_blank" rel="noopener noreferrer" className="w-[180px] h-[120px] flex items-center justify-center mx-auto bg-primary rounded-2xl mb-8">
            <Image className="w-full" src={img2} width={50} height={50} alt="Card image"/>
            </a>
            <h4 className="font-semibold text-xl text-dark mb-3">
            Curb Rash Repair
            </h4>
            <p className="text-body-color">
                We dejoy working with discerning clients, people for whom
                qualuty, service, integrity & aesthetics.
            </p>
        </div>
    </div>
    <div className="md:w-1/2 lg:w-1/3 px-4 w-4/5 mx-auto">
        <div className="p-10 md:px-7 xl:px-10 rounded-[20px] bg-gray-200  shadow-md hover:shadow-lg mb-8 shadow-slate-400">
            <a href='https://www.instagram.com/p/CGGhcHClqCz/' target="_blank" rel="noopener noreferrer" className="w-[180px] h-[120px] flex items-center justify-center mx-auto bg-primary rounded-2xl mb-8 ">
            <Image className="w-full" src={img2} width={50} height={50} alt="Card image"/>
            </a>
            <h4 className="font-semibold text-xl text-dark mb-3">
            Body Kit Installation
            </h4>
            <p className="text-body-color">
                We dejoy working with discerning clients, people for whom
                qualuty, service, integrity & aesthetics.
            </p>
        </div>
    </div>
    </div>
</div>
)
}
