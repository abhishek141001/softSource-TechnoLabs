import React from 'react'

export default function ProjectCard({imgSrc,title}) {
  return (
    <div className='rounded-lg w-full  md:max-w-[30%]'>
        <img src={imgSrc}/>
        <h3 className='px-5 py-6 text-start bg-[#1a809b] text-[18px] font-semibold text-white'>{title}</h3>
    </div>
  )
}
