import Image from "next/image";
import Link from "next/link";
import React from "react";


async function getDetails() {
  const response = await axios.post("http://localhost3000/api/server")
  return response.data;
}

const MenuPosts = ({ withImage }) => {
  
  return (
    <div className='container text-white flex-1 mt-3 ml-10'>
      <Link href="/" >
        {withImage && (
          <div >
            <Image src="/p1.jpeg" alt="" fill  />
          </div>
        )}
        <div >
          <span >Travel</span>
          <h3 >
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </h3>
          <h1></h1>
          <div >
            <span >John Doe</span>
            <span > - 10.03.2023</span>
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
          <span >
            Culture
          </span>
          <h3 >
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </h3>
          <div >
            <span >John Doe</span>
            <span > - 10.03.2023</span>
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
          <span >Food</span>
          <h3 >
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </h3>
          <div >
            <span >John Doe</span>
            <span > - 10.03.2023</span>
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
          <span >
            Fashion
          </span>
          <h3 >
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </h3>
          <div >
            <span >John Doe</span>
            <span > - 10.03.2023</span>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default MenuPosts;