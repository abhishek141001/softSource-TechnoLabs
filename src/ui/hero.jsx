import React from 'react'

export default function Hero() {
    return (
        <div className='flex flex-col md:flex-row p-4 gap-4 lg:items-center'>

            <div className='text-center  md:text-left lg:pl-16'>
                <p className='text-[15px] font-semibold text-[#252b33] lg:text-[19px]'>Top Web and Mobile App Development Company</p>
                <h3 className='text-[40px] text-[#0da4ca] font-extrabold leading-10 lg:text-[65px] lg:leading-[74px]'>Your Trusted <span className='text-[#252B33]'>Software</span></h3>
                <p className='text-[26px] leading-9 mt-[6px] text-[#252b33] font-extrabold lg:text-[38px] lg:leading-[54px]'>Development <span className='text-[#0da4ca]'>Partner</span></p>
                <p className='text-[15px] leading-[22px] mt-[10px] mb-[5px] font-normal text-[#252b33] lg:text-[16px] lg:leading-[28px]'>Seamless Solutions, Infinite Capabilities. Transforming Ideas into Digital Success. Where Innovation Meets Execution, We're Your Dedicated Development Ally.</p>
                <a href='' className='bg-[#0da4ca] hover:bg-[#077d9b] text-[14px] py-[7px] px-[20px] text-white rounded-[100px] my-[15px]  lg:text-[16px] lg:py-[10px] lg:px-[30px] '>Who we Are</a>
            </div>
            <img src='https://softsourcetech.com/wp-content/uploads/2024/02/banner-img-main.webp ' className='md:max-w-[60%]' />
        </div>
    )
}
