import React from 'react'
import Image from 'next/image'

const Feature = () => {
  return (
    <div className=' container mt-10 '>
      <h1 className="text-5xl font-light text-white pl-10">
        <b>Hey Everyone👋! </b> Uncover a world of mesmerizing stories and creativity
      </h1>
      <div className="post mt-16 flex items-center gap-12">
            <Image src="/p1.jpeg" width={300} height={300} alt='' className='img lg:ml-28 lg:mb-24 lg:p-0 sm:pb-96 sm:pl-10'/>
        <div className="textContainer flex flex-col gap-5">
            <h1 className="title text-2xl text-white">Lorem, ipsum dolor.</h1>
            <p className="desc text-lg font-light text-white"> Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Cupiditate, quam nisi magni ea laborum inventore voluptatum
            laudantium repellat ducimus unde aspernatur fuga. Quo, accusantium
            quisquam! Harum unde sit culpa debitis.
            </p>
            <button className='p-4 border-none rounded-md max-w-max text-white'>Read More</button>
        </div>
      </div>
    </div>
  )
}

export default Feature
