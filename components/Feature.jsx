import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Feature = () => {
  return (
    <div className=' container mt-10 '>
      <h1 className="text-5xl font-light text-white lg:ml-32 lg:block md:flex md:justify-center md:items-center sm:flex sm:justify-center sm:items-center">
        Hey Everyone👋! 
        <span className='sm:hidden lg:flex md:flex'> Uncover a world of mesmerizing stories and creativity</span>
      </h1>
      <div className="post mt-16 flex items-center gap-12 lg:flex md:flex-row">
            <Image src="/p1.jpeg" width={300} height={50} alt='' className='img lg:ml-32 lg:mb-24 lg:p-0 sm:pb-96 sm:pl-5 '/>
        <div className="textContainer flex flex-col gap-5 sm:mb-32 md:mb-auto lg:mb-auto">
            <h1 className="title text-2xl text-white">Welcome to EpicBlogss</h1>
            <p className="desc text-lg font-light text-white">Welcome to our blog, where we strive to bring you the most captivating stories and insightful articles. Dive into a world of creativity and inspiration, crafted by our team of passionate writers. Join us as we explore the latest trends, share valuable insights, and engage in meaningful discussions. Let's embark on this journey together, one story at a time
            </p>
           <Link href="/blog"> <button className='p-4 border-none rounded-md max-w-max text-black bg-white lg:block md:block sm:hidden'>Read More</button></Link>
        </div>
      </div>
    </div>
  )
}

export default Feature
