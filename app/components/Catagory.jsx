import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
// import styles from './catagories.module.css'

const Catagory = () => {
  const styles = {
    borderRadius: "50%",
    width: 50,
    height: 50,
    maxWidth: "unset",
  }
  return (
    <div className='container lg:text-auto md:text-center md:ml-10 sm:ml-10 sm:text-center '>
      <h1 className="title mt-30 text-white font-bold lg:ml-28">Popular Catagories</h1>
      <div className="flex flex-wrap lg:ml-40 md:ml-20 sm:ml-auto justify-between mt-5 border-white gap-4">
        <Link href="/blog?cat=style" className="category flex w-48 text-center text-white items-center capitalize w-1/7 h-20 justify-center rounded-lg bg-blue-500 bg-opacity-30">
          <Image
           src="/style.png" 
           alt="style"
           width={50}
           height={50}
           style={styles}
           className='rounded-full ml-3 mr-3 '
           />
           Style
        </Link>
        <Link href="/blog?cat=fashion" className='catagory flex w-48 items-center capitalize w-1/7 h-20 text-white justify-center rounded-lg bg-yellow-500 bg-opacity-30'>
        <Image 
           src="/fashion.png" 
           alt="fashion"
           width={50}
           height={50}
           style={styles}
           className='rounded-full ml-3 mr-3'
           />
           Fashion
        </Link>
        <Link href="/blog?cat=food" className='category flex w-48 items-center capitalize 1-1/7 h-20 text-white justify-center rounded-lg bg-pink-400'>
          <Image 
          src="/food.png" 
          alt="food"
          width={50}
          height={50}
          style={styles}
          className='rounded-full ml-3 mr-3'
          />
          Food
        </Link>
        <Link href="/blog?cat=travel" className='category flex w-48 items-center capitalize 1-1/7 h-20 text-white justify-center rounded-lg bg-purple-400'>
          <Image 
          src="/travel.png" 
          alt="travel"
          width={50}
          height={50}
          style={styles}
          className='rounded-full ml-3 mr-3'
          />
          Travel
        </Link>
        <Link href="/blog?cat=culture" className='category flex w-48 items-center capitalize 1-1/7 h-20 text-white justify-center rounded-lg bg-red-400'>
          <Image 
          src="/culture.png" 
          alt="culture"
          width={50}
          height={50}
          style={styles}
          className='rounded-full ml-3 mr-3'
          />
          Culture
        </Link>
        <Link href="/blog?cat=coding" className='category flex w-48 items-center capitalize 1-1/7 h-20 text-white justify-center rounded-lg bg-green-400'>
          <Image 
          src="/coding.png" 
          alt="coding"
          width={50}
          height={50}
          style={styles}
          className='rounded-full ml-3 mr-3'
          />
          Coding
        </Link>

      </div>
    </div>
  )
}

export default Catagory
