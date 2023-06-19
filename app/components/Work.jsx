'use client'
import React from 'react';
import Image from 'next/image';
import img8 from '../../public/images/body-kit.jpg'
import {Carousel} from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import tesla from '/public/images/tesla.jpeg'

export default function Work() {
return (
    <div className='widescreen:section-min-height tallscreen:section-min-height scroll-mt-20 p-4'>
<h2 className="text:slate-900 text-center text-4xl font-bold sm:text-4xl">
        Our Work
        </h2>
        <div className='max-w-full h-auto mt-8'>
        <Carousel showArrows={true} showIndicators={true} showThumbs={false} infiniteLoop={true} dynamicHeight={false} showStatus={false} autoPlay className=' mx-auto sm:w-[700px]  object-contain'>
    <div>
        <Image src={tesla} alt='' width={600} height={400} className='sm:h-[600px]'/>
    </div>
    <div>
        <Image src={img8} alt='' width={600} height={400} className='sm:h-[600px]'/>
    </div>
    <div>
        <Image src={img8} alt='' width={600} height={400} className='sm:h-[600px]'/>
    </div>
    </Carousel>
    </div>
    </div>
    
  )
}
