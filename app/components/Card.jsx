import React from 'react'
import Image from "next/image"
import Link from "next/link"
export default function Card(props) {
    let date = new Date().toLocaleDateString('en-US')
  return (
    <div>
      <div className="container flex space-x-10">
        <div className="imageContainer">
            <Image src={props.img} alt="img" width={1700} height={1700}/>
        </div>
        <div className="textContainer">
           <div className="details flex space-x-3">
           <div className="date text-white">{date}</div>
           <div className="category">{props.category}</div>
           </div>
           <h1 className=" mt-3 font-bold text-white">Lorem ipsum dolor sit amet consectetur adipisicing.</h1>
           <p className="longText mt-2 text-white">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio qui, doloribus, blanditiis assumenda vitae dolorum deserunt ex enim facere tempore quos placeat in rem aliquid officiis asperiores architecto modi, eos sequi quod nemo. Beatae, debitis!</p>
           <Link href={`/blog?category=${props.link}`} className='p-1 mt-2 border-none rounded-md max-w-max text-black bg-white lg:block md:block sm:hidden'>Read More</Link>
        </div>
      </div>
    </div>
  )
}
