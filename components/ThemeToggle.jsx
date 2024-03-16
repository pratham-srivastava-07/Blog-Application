"use client"

import Image from "next/image";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";


const ThemeToggle = () => {
    const { toggle, theme } = useContext(ThemeContext);
  
    return (
      <div
        className={`w-16 h-8 flex items-center justify-between rounded-full cursor-pointer relative ${
          theme === "dark" ? "bg-white" : "bg-black"
        }`}
        onClick={toggle}
      >
        <Image src="/moon.png" alt="" width={14} height={14} />
        <div
          className={`w-5 h-5 rounded-full absolute ${
            theme === "dark" ? "left-1 bg-black" : "right-1 bg-white"
          }`}
        ></div>
        <Image src="/sun.png" alt="" width={14} height={14} />
      </div>
    );
  };
  
  export default ThemeToggle;