import React from 'react'

export default function ProcessCard({imgSrc,title,para}) {
  return (
    <div className='processCard  rounded-2xl lg:max-w-[200px]  h-fit'> 
        <div className='flex flex-col gap-3 py-5 px-4'>
        <img src={imgSrc}/>
        <h3 className='text-[18px] lg:text-[24px] font-semibold'>{title}</h3>
        <p className='text-[14px] lg:text-[16px] text-[#252B33] font-normal'>{para}</p>
        </div>
      
        <div className='p-2 processCardborderEl bg-blue-600 w-4 '></div>
    </div>
  )
}
