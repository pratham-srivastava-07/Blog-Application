import React from 'react'
import Image from "next/image"
import Link from "next/link"
export default function Card(props) {
  const styles = {
    width: "2000px",
    height: "350px"
  }
    let date = new Date().toLocaleDateString('en-US')
  return (
    <div>
      <div className="container flex space-x-10">
        <div className="imageContainer">
            <Image src={props.img} alt="img" style={styles} width={700} height={700}/>
        </div>
        <div className="textContainer mt-3">
           <div className="details flex space-x-3">
           <div className="date text-white mb-3">{date}</div>
           <div className="category">{props.category}</div>
           </div>
           <h1 className=" mt-1 font-bold text-white">Lorem ipsum dolor sit amet consectetur adipisicing.</h1>
           <p className="longText mt-2 text-white">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio qui, doloribus, blanditiis assumenda vitae dolorum deserunt ex enim facere tempore quos placeat in rem aliquid officiis asperiores architecto modi, eos sequi quod nemo. Beatae, debitis!</p>
           <Link href={`/blog?category=${props.link}`} className='p-1 mt-2 border-none rounded-md max-w-max text-black bg-white lg:block md:block sm:hidden'>Read More</Link>
        </div>
      </div>
    </div>
  )
}
