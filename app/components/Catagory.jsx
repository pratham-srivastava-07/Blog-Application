import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
// import styles from './catagories.module.css'

const Catagory = () => {
  return (
    <div className='container '>
      <h1 className="title mt-30 text-white font-bold lg:ml-28">Popular Catagories</h1>
      <div className="flex flex-wrap w-30 lg:ml-32 justify-between mt-5 gap-20">
        <Link href="/blog?cat=style" className="category flex text-white items-center gap-10 capitalize w-1/7 h-20 justify-center rounded-lg bg-blue-500 bg-opacity-30">
          <Image 
           src="/style.png" 
           alt="style"
           width={32}
           height={32}
           className='rounded-full ml-3'
           />
           Style
        </Link>

      </div>
    </div>
  )
}

export default Catagory
