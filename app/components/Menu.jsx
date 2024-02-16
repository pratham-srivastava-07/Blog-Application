import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Menu() {
  return (
    <div className='container text-white flex-1 mt-9'>
      <h2 className="text-red-400 text-base font-normal">{"What's hot?"}</h2>
      <h1 className="title text-3xl">Most Popular</h1>
      <div className="items text-xl">
        <Link href="/" className='item flex items-center gap-5'>
          <div className="imgContainer flex-1 relative">
              <Image src="/coding.png" alt='' className='rounded-full' width={500} height={500}/>
          </div>
          <div className="textContainer flex-1">
            <span className="text-white text-xl">Coding</span>
            <h3 className="text-white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima?
            </h3>
            <div className="name text-white">John Doe</div>
            <div className="date">{new Date().toLocaleDateString('en-US')}</div>
          </div>
        </Link>
      </div>
    </div>
  )
}
