import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Navbar() {
  return (
  <div className='nav flex justify-center space-x-4 items-center mt-0 h-16 bg-slate-500 text-white'>
    <div className='social flex flex-1 p-5 lg:ml-32 md:m-auto gap-8 sm:m-auto lg:w-1/2'>
      <Image src="/facebook.png" alt='facebook' width={24} height={24}/>
      <Image src="/instagram.png" alt='facebook' width={24} height={24}/>
      <Image src="/youtube.png" alt='facebook' width={24} height={24}/>
    </div>
    <div className='logo flex flex-1 font-bold text-2xl md:flex-col md:text-right sm:flex-col sm:text-right lg:flex-row'>EpicBlogsss</div>
    <div className="links flex flex-start space-x-8 lg:mr-36 md:hidden sm:hidden lg:block mr-[-1rem]">
      <Link href="/" className='hover:text-black'>Home</Link>
      <Link href="/about" className='hover:text-black'>About</Link>
      <Link href="/write" className='hover:text-black'>Write</Link>
      <Link href="/login" className='hover:text-black'>Login</Link>
    </div>
   
  </div>
  )
}
