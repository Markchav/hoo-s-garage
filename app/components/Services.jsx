import React from 'react'
import Image from 'next/image'
import img3 from '../../public/images/new-rim.png'
import img4 from '../../public/images/caliper.png'
import img6 from '../../public/images/suspension.jpg'
import img7 from '../../public/images/modi.jpg'
import img8 from '../../public/images/body-kit.jpg'
import img9 from '../../public/images/wrap.jpg'


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
                <Image className="" src={img3} width={160} height={50} alt="Card image"/>
            </a>
            <h4 className="font-semibold text-xl text-dark mb-3">
                RIM PAINTING
            </h4>
            <p className="text-body-color">
            A thorough inspection of your rims to assess their condition and identify any imperfections such as scratches,chips,or corrosion.
            </p>
            </div>
        </div>
    <div className=" md:w-1/2 lg:w-1/3 px-4 w-4/5 mx-auto">
        <div className="p-10 md:px-7 xl:px-10 rounded-[20px] bg-gray-200  shadow-md hover:shadow-lg mb-8 border shadow-slate-400">
        <a href='https://www.instagram.com/p/CGGhcHClqCz/' target="_blank" rel="noopener noreferrer" className="w-[180px] h-[120px] flex items-center justify-center bg-primary rounded-2xl mb-8 mx-auto">
                <Image className="" src={img4} width={200} height={50} alt="Card image"/>
            </a>
            <h4 className="font-semibold text-xl text-dark mb-3">
            CALIPER PAINTING
            </h4>
            <p className="text-body-color">
            Offers a cosmetic enhancement to your vehicle&apos;s brake system, providing a unique and personalized touch of style and customization to your wheels
            </p>
        </div>
    </div>
        <div className=" md:w-1/2 lg:w-1/3 px-4 w-4/5 mx-auto">
            <div className="p-10 md:px-7 xl:px-10 rounded-[20px] bg-gray-200  shadow-md hover:shadow-lg mb-8 border shadow-slate-400">
            <a href='https://www.instagram.com/p/CiDzGpgDyPG/' target="_blank" rel="noopener noreferrer" className="w-[180px] h-[120px] flex items-center justify-center mx-auto bg-primary rounded-2xl mb-8">
                <Image className="" src={img6} width={200} height={50} alt="Card image"/>
            </a>
            <h4 className="font-semibold text-xl text-dark mb-3">
            BRAKES AND SUSPENSION  
            </h4>
            <p className="text-body-color">
            Ensures your vehicle&apos;s safety, stability, and optimal performance on the road, providing expert care and maintenance for your vehicle.
            </p>
        </div>
        </div>
        <div className=" md:w-1/2 lg:w-1/3 px-4 w-4/5 mx-auto">
            <div className="p-10 md:px-7 xl:px-10 rounded-[20px] bg-gray-200  shadow-md hover:shadow-lg mb-8 shadow-slate-400">
            <a href='https://www.instagram.com/p/CGGhcHClqCz/' target="_blank" rel="noopener noreferrer" className="w-[180px] h-[120px] flex items-center justify-center mx-auto bg-primary rounded-2xl mb-8">
                <Image className="h-44" src={img7} width={200} height={200} alt="Card image"/>
            </a>
            <h4 className="font-semibold text-xl text-dark mb-3">
            PERFORMANCE MODIFICATIONS
            </h4>
            <p className="text-body-color">
            We specialize in enhancing your vehicle&apos;s power, speed, and overall performance, providing an exhilarating driving experience like no other.
            </p>
        </div>
        </div>
        <div className="md:w-1/2 lg:w-1/3 px-4 w-4/5 mx-auto">
            <div className="p-10 md:px-7 xl:px-10 rounded-[20px] bg-gray-200  shadow-md hover:shadow-lg mb-8 shadow-slate-400">
            <a href='https://www.instagram.com/p/CGGhcHClqCz/' target="_blank" rel="noopener noreferrer" className="w-[180px] h-[120px] flex items-center justify-center mx-auto bg-primary rounded-2xl mb-8">
            <Image className="" src={img8} width={200} height={50} alt="Card image"/>
            </a>
            <h4 className="font-semibold text-xl text-dark mb-3">
            BODY AND LIT KITS
            </h4>
            <p className="text-body-color">
            Transform the look of your vehicle with our body and lip kits, designed to enhance its aesthetics and give it a unique and stylish appearance. 
            </p>
        </div>
    </div>
    <div className="md:w-1/2 lg:w-1/3 px-4 w-4/5 mx-auto">
        <div className="p-10 md:px-7 xl:px-10 rounded-[20px] bg-gray-200  shadow-md hover:shadow-lg mb-8 shadow-slate-400">
            <a href='https://www.instagram.com/p/CkWTgbZuAdZ/' target="_blank" rel="noopener noreferrer" className="w-[180px] h-[120px] flex items-center justify-center mx-auto bg-primary rounded-2xl mb-8 ">
            <Image className="" src={img9} width={200} height={50} alt="Card image"/>
            </a>
            <h4 className="font-semibold text-xl text-dark mb-3">
            WRAP AND CHROME DELETE
            </h4>
            <p className="text-body-color">
            Revitalize the look of your vehicle with our wrap and chrome delete services, offering a quick and cost-effective way to transform its appearance
            </p>
        </div>
    </div>
    </div>
</div>
)
}
