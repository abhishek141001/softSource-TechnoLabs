import React from 'react'

export default function Hero() {
    return (
        <div className='flex flex-col md:flex-row p-4 gap-4'>

            <div className='text-center  md:text-left'>
                <p className='text-[15px] font-semibold text-[#252b33]'>Top Web and Mobile App Development Company</p>
                <h3 className='text-[40px] text-[#0da4ca] font-extrabold leading-10'>Your Trusted<br></br> <span className='text-[#252B33]'>Software</span></h3>
                <p className='text-[26px] leading-9 mt-[6px] text-[#252b33] font-extrabold'>Development <span className='text-[#0da4ca]'>Partner</span></p>
                <p className='text-[15px] leading-[22px] mt-[10px] mb-[5px] font-normal text-[#252b33]'>Seamless Solutions, Infinite Capabilities. Transforming Ideas into Digital Success. Where Innovation Meets Execution, We're Your Dedicated Development Ally.</p>
                <a href='' className='bg-[#0da4ca] hover:bg-[#077d9b] text-[14px] py-[7px] px-[20px] text-white rounded-[100px] my-[15px]'>Who we Are</a>
            </div>
            <img src='https://softsourcetech.com/wp-content/uploads/2024/02/banner-img-main.webp' className='md:max-w-[60%]' />
        </div>
    )
}
