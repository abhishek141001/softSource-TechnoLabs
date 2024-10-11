import React from 'react'
import EastIcon from '@mui/icons-material/East';

export default function ServiceCard({imgSrc,title,para}) {
  return (
    <div className='p-5 flex flex-col items-center serviceCard max-w-[90%] md:max-w-[80%] lg:h-[400px] lg:py-8 lg:max-w-[30%] bg-white'>
        <img src={imgSrc} className='w-[46px]'/>
    <h3 className='text-[#0da4ca] text-[18px] py-2 font-semibold'>{title}</h3>
    <p className='text-[14px] text-[#252B33] font-normal'>{para}</p>
    <div className='flex items-center justify-center rounded-full serviceCardArrow p-2 hover:bg-[#046a83]'><EastIcon /></div>
    
    </div>
  )
}
