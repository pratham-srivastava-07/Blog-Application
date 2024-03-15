import Image from "next/image";
import Link from "next/link";
import React from "react";
import axios from "axios"

async function getDetails() {
  const response = await axios.get("http://localhost:3000/api/server")
  return response.data;
}

export default async function MenuPosts({ withImage }) {
  const getData = await getDetails()
  return (
    <div className='container text-white flex-1 mt-3 ml-10'>
      <Link href="/" >
        {withImage && (
          <div >
            <Image src="/p1.jpeg" alt="" fill  />
          </div>
        )}
        <div >
          <span className="block text-sm font-semibold uppercase tracking-wide text-gray-300">Travel</span>
          <h3 className="mt-1 text-lg leading-tight font-bold">Lorem ipsum dolor sit amet consectetur adipisicing elit.</h3>
          <div className="flex items-center mt-2">
            <span className="text-sm mr-1">John Doe</span>
            <span className="text-sm">- 10.03.2023</span>
          </div>
        </div>
      </Link>
      <Link href="/">
        {withImage && (
          <div >
            <Image src="/p1.jpeg" alt="" fill />
          </div>
        )}
        <div >
          <span className="block text-sm font-semibold uppercase tracking-wide text-gray-300">Culture</span>
          <h3 className="mt-1 text-lg leading-tight font-bold">Lorem ipsum dolor sit amet consectetur adipisicing elit.</h3>
          <div className="flex items-center mt-2">
            <span className="text-sm mr-1">John Doe</span>
            <span className="text-sm">- 10.03.2023</span>
          </div>
        </div>
      </Link>
      <Link href="/">
        {withImage && (
          <div >
            <Image src="/p1.jpeg" alt="" fill  />
          </div>
        )}
        <div >
          <span className="block text-sm font-semibold uppercase tracking-wide text-gray-300">Food</span>
          <h3 className="mt-1 text-lg leading-tight font-bold">Lorem ipsum dolor sit amet consectetur adipisicing elit.</h3>
          <div className="flex items-center mt-2">
            <span className="text-sm mr-1">John Doe</span>
            <span className="text-sm">- 10.03.2023</span>
          </div>
        </div>
      </Link>
      <Link href="/" >
        {withImage && (
          <div >
            <Image src="/p1.jpeg" alt="" fill  />
          </div>
        )}
        <div >
          <span className="block text-sm font-semibold uppercase tracking-wide text-gray-300">Fashion</span>
          <h3 className="mt-1 text-lg leading-tight font-bold">Lorem ipsum dolor sit amet consectetur adipisicing elit.</h3>
          <div className="flex items-center mt-2">
            <span className="text-sm mr-1">John Doe</span>
            <span className="text-sm">- 10.03.2023</span>
          </div>
        </div>
      </Link>
    </div>
  );
}
