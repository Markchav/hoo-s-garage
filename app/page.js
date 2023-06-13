import React from 'react'
import Navbar from './components/Navbar'
import img2 from '../public/images/bmw-ScreenShot.png'
import Footer from './components/Footer'
import Services from './components/Services'
import img6 from '../public/images/dsc08200.jpg'
import img7 from '../public/images/toyota.jpeg'
import img8 from '../public/images/bmw-bg.jpg'
import Work from './components/Work'

export default function HomePage() {

  
  return (
    <div className='bg-gray-200'>
    <div id='home' className='widescreen:section-min-height tallscreen:section-min-height mb-12 flex scroll-mt-40 flex-col-reverse items-center justify-center gap-8  '>
    <Navbar/>
    </div>
        
{/* Home Section */}
      <div className='flex items-center justify-center h-[600px] sm:h-[680px] max-lg:h-[485px] mb-12 sm:bg-fixed bg-center bg-[url(../public/images/bmw-edit.png)] sm:bg-cover bg-[length:400px_300px]'/>
      <section className='text-center max-w-2xl justify-center mx-auto flex-col'>
      {/* <Image src={img6} alt=''/> */}
        <div className='flex-col space-y-10'>
        <h1 className='font-bold text-4xl'>
        WHAT IS HOO&apos;S GARAGE?
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
