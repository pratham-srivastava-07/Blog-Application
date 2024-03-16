import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import ThemeToggle from './ThemeToggle'
// import AuthLinks from './AuthLinks'
// import Button from "./Button"


export default function Navbar() {
  return (
  <div className='nav flex justify-center space-x-4 items-center mt-4 h-16 text-white border-b border-gray-100 '>
    <div className='social flex-1 p-5 lg:ml-28 lg:flex md:m-auto gap-4 sm:hidden xsm:hidden lg:w-1/2'>
      <Image src="/facebook.png" alt='facebook' width={24} height={24}/>
      <Image src="/instagram.png" alt='facebook' width={24} height={24}/>
      <Image src="/youtube.png" alt='facebook' width={24} height={24}/>
    </div>
    <div className='logo flex-1 lg:pl-36 sm:pl-auto md:pl-auto font-bold text-2xl md:flex-col md:text-left sm:flex-col sm:text-left sm:m-auto lg:flex-row'>EpicBlogsss</div>
    <div className="links flex-1 space-x-5 md:hidden sm:hidden xsm:hidden lg:block ">
      {/* <ThemeToggle/> */}
      <Link href="/" className='hover:text-black'>Home</Link>
      <Link href="/about" className='hover:text-black'>About</Link>
      <Link href="/write" className='hover:text-black'>Write</Link>
      <Link href="/signin" className='hover:text-black'>Login</Link>
      {/* <AuthLinks/> */}
    </div>
   
  </div>
  )
}
