import React from 'react'

export default function EngagementCard({imgSrc,title,para}) {
  return (
    <div className='p-5 flex flex-col items-center engagementCard max-w-[90%] md:max-w-[80%] lg:h-[440px] lg:py-12 lg:max-w-[30%] bg-white'>
        <div className='p-2 engagementCardborderEl bg-blue-600 w-4 '></div>
    <img src={imgSrc} className='w-[46px]'/>
<h3 className='text-[#0da4ca] text-[18px] py-2 font-semibold'>{title}</h3>
<p className='text-[14px] text-[#252B33] font-normal'>{para}</p>


<div className='p-2 engagementCardborderEl bg-blue-600 w-4 '></div>
</div>
  )
}
