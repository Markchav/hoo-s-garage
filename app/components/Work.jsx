'use client'
import React from 'react';
import Image from 'next/image';
import img2 from '../../public/images/bmw-ScreenShot.png';
import {Carousel} from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function Work() {
return (
    <div className='widescreen:section-min-height tallscreen:section-min-height scroll-mt-20 p-4'>
<h2 className="text:slate-900 text-center text-4xl font-bold sm:text-4xl">
        Our Work
        </h2>
        <div className='max-w-full h-auto mt-8'>
        <Carousel showArrows={true} showIndicators={true} showThumbs={false} infiniteLoop={true} dynamicHeight={false} showStatus={false} autoPlay className=' mx-auto sm:w-[800px]  object-contain'>
    <div>
        <Image src={img2} alt='' width={600} height={400} className='sm:h-[530px]'/>
    </div>
    <div>
        <Image src={img2} alt='' width={600} height={400} className='sm:h-[530px]'/>
    </div>
    <div>
        <Image src={img2} alt='' width={600} height={400} className='sm:h-[530px]'/>
    </div>
    </Carousel>
    </div>
        {/* <ul className=" justify-center mx-auto my-20 flex list-none flex-col items-center gap-8 sm:flex-row">
<li className="max-w-sm overflow-hidden flex w-4/5 flex-col items-center rounded-3xl border border-solid border-slate-500 bg-white py-6 px-2 shadow-xl ml-2 sm:w-5/6">
    <Image className="w-full" src={img2} width={50} height={50} alt="Card image"/>
    <div className="px-6 py-4">
      <div className="font-bold text-xl mb-2">Card 1</div>
      <p className="text-gray-700 text-base">
        This is the description for Card 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris dapibus lacinia leo, sed posuere neque ullamcorper id.
      </p>
    </div>
  </li>
  <li className="max-w-sm overflow-hidden flex w-4/5 flex-col items-center rounded-3xl border border-solid border-slate-500 bg-white py-6 px-2 shadow-xl ml-2 sm:w-5/6">
  <Image className="w-full" src={img2} width={50} height={50} alt="Card image"/>
    <div className="px-6 py-4">
      <div className="font-bold text-xl mb-2">Card 2</div>
      <p className="text-gray-700 text-base">
        This is the description for Card 2. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris dapibus lacinia leo, sed posuere neque ullamcorper id.
      </p>
    </div>
  </li>
  <li className="max-w-sm overflow-hidden flex w-4/5 flex-col items-center rounded-3xl border border-solid border-slate-500 bg-white py-6 px-2 shadow-xl ml-2 sm:w-5/6">
  <Image className="w-full" src={img2} width={50} height={50} alt="Card image"/>
    <div className="px-6 py-4">
      <div className="font-bold text-xl mb-2">Card 3</div>
      <p className="text-gray-700 text-base">
        This is the description for Card 3. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris dapibus lacinia leo, sed posuere neque ullamcorper id.
      </p>
    </div>
  </li>
</ul> */}
    </div>
    
  )
}
