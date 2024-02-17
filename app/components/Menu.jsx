import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Menu() {
  return (
    <div className='container text-white flex-1 mt-9'>
      <h2 className="text-red-400 text-base font-normal">{"What's hot?"}</h2>
      <h1 className="title text-3xl mb-5">Most Popular</h1>
    
      <div className="items text-xl">
        <Link href={`/blog?popular=coding`} className='item flex items-center gap-5 mt-5'>
          <div className="imgContainer  relative">
              <Image src="/coding.png" alt='' className='rounded-full' width={200} height={200}/>
          </div>
          <div className="textContainer  ">
          <span className="text-white bg-red-600 w-auto rounded-xl p-1 text-sm ">Coding</span>
            <h3 className="text-white text-md ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima?
            </h3>
           <div className="details flex text-xs space-x-3 mt-2">
           <div className="name text-white">John Doe</div>
            <div className="date">{new Date().toLocaleDateString('en-US')}</div>
           </div>
          </div>
        </Link>
        <Link href={`/blog?popular=travel`} className='item flex items-center gap-5 mt-5'>
          <div className="imgContainer  relative">
              <Image src="/travel.png" alt='' className='rounded-full' width={200} height={50}/>
          </div>
          <div className="textContainer  ">
          <span className="text-white bg-red-600 w-auto rounded-xl p-1 text-sm ">Travel</span>
            <h3 className="text-white text-md ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima?
            </h3>
           <div className="details flex text-xs space-x-3 mt-2">
           <div className="name text-white">John Doe</div>
            <div className="date">{new Date().toLocaleDateString('en-US')}</div>
           </div>
          </div>
        </Link>
      </div>
    </div>
  )
}
