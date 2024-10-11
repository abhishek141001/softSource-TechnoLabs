import React from 'react'

export default function TechCard({imgSrc,techTitle}) {
  return (
    <div className='flex flex-col items-center justify-center gap-2 py-5 px-4 bg-white techCard w-full max-w-[160px]'>
        <img src={imgSrc}/>
        <p>{techTitle}</p>
    </div>
  )
}
