import React, { useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';  // Import close icon
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';

export default function NavBar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false); // Mobile menu toggle state
  
  const navs = [
    {
      title: 'Home',
      href: '',
      menuItems: []
    },
    {
      title: 'Our Company',
      href: '',
      menuItems: [
        { title: 'About Us', href: '#' },
        { title: 'Team', href: '#' }
      ]
    },
    {
      title: 'Services',
      href: '',
      menuItems: [
        { title: 'Web Development', href: '#' },
        { title: 'Mobile Development', href: '#' }
      ]
    },
    {
      title: 'Our Work',
      href: '',
      menuItems: []
    },
    {
      title: 'Hire Expert',
      href: '',
      menuItems: []
    },
    {
      title: 'Case Studies',
      href: '',
      menuItems: []
    },
    {
      title: 'Blog',
      href: '',
      menuItems: []
    }
  ]

  return (
    <div className='shadow-md z-10 sticky top-0 bg-white'>
      {/* Top contact section */}
      <div className='px-4 text-[11.5px] py-1 border-b-[0.5px] border-black lg:px-12'>
        <div className='flex items-center justify-center gap-4'>
          <a href='' ><PhoneIcon /> +1 917-725-5104 </a>
          <a href=''><EmailIcon /> hello@softsourcetech.com</a>
        </div>
      </div>

      {/* Main navigation */}
      <div className='flex justify-between px-4 items-center py-2 lg:px-20 lg:py-5'>
        <img src='https://softsourcetech.com/wp-content/uploads/2024/03/Final-logo.png' alt='logo' className='max-h-[40px]' />
        
        <div className='flex gap-4 items-center'>
          {/* Navigation for large screens */}
          {navs.map((nav, index) => (
            <div
              key={index}
              className='relative group text-[16px] text-[#252b33] font-semibold hidden lg:block cursor-pointer'
            >
              <div>{nav.title}</div>
              {/* Submenu rendering */}
              {nav.menuItems.length > 0 && (
                <ul className="absolute left-0 top-full hidden group-hover:flex flex-col bg-white shadow-md p-2 mt-2 rounded-md">
                  {nav.menuItems.map((item, subIndex) => (
                    <li key={subIndex} className="px-4 py-2 hover:bg-gray-100">
                      <a href={item.href}>{item.title}</a>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}

          {/* Contact Us button */}
          <a href='' className='bg-[#0da4ca] hover:bg-[#077d9b] text-[14px] py-[7px] px-[20px] text-white rounded-[100px] hidden lg:block lg:text-[16px] lg:py-[10px] lg:px-[30px]'>Contact Us</a>

          {/* Mobile menu icon */}
          <div className='flex items-center justify-center lg:hidden' onClick={() => setMobileMenuOpen(true)}>
            <MenuIcon />
          </div>
        </div>
      </div>

      {/* Mobile menu sliding from left */}
      <div
        className={`fixed top-0 left-0 h-full w-[100%]  bg-white shadow-lg transition-transform duration-300 ease-in-out ${mobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}
      >
        {/* Close button */}
        <div className="flex justify-end p-4">
          <CloseIcon className="cursor-pointer" onClick={() => setMobileMenuOpen(false)} />
        </div>

        {/* Mobile menu links */}
        <div className="flex flex-col gap-4 p-4">
          {navs.map((nav, index) => (
            <div key={index} className="border-b">
              <div className='p-4 cursor-pointer'>
                {nav.title}
              </div>
              {nav.menuItems.length > 0 && (
                <div className='flex flex-col pl-4'>
                  {nav.menuItems.map((item, i) => (
                    <a key={i} href={item.href} className='py-2 text-sm text-gray-700'>{item.title}</a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Background overlay when menu is open */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 "
          onClick={() => setMobileMenuOpen(false)} // Close menu when clicking outside
        ></div>
      )}
    </div>
  )
}
