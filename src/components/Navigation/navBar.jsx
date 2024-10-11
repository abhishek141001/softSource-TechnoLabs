import React from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';

export default function NavBar() {
  return (
    <div className='shadow-md z-10 sticky top-0 bg-white'>
      <div className='px-4 text-[11.5px] py-1 border-b-[0.5px] border-black '>
        <div className='flex items-center justify-center gap-4'>
          <a href='' ><PhoneIcon /> +1 917-725-5104 </a>
          <a href=''><EmailIcon />hello@softsourcetech.com</a>
        </div>

      </div>
      <div className='flex justify-between px-4 items-center py-2'>
        <img src='https://softsourcetech.com/wp-content/uploads/2024/03/Final-logo.png' alt='logo' className='max-h-[40px]' />
        <div>
          <MenuIcon />
        </div>

      </div>
    </div>
  )
}
