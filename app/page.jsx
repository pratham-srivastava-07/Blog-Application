// import { Main } from "next/document";
import Image from "next/image";
import Feature from "../components/Feature"
import Catagory from "../components/Catagory";
import CardList from "../components/CardList"
import Menu from "../components/Menu"
import BlogPage from "@/components/BlogPosts";

export default function Home() {
  return (
   <div className="container">
    <Feature/>
    <div className="lg:hidden md:flex sm:flex sm:text-center sm:items-center sm:ml-16 sm:w-full">
      <BlogPage/>
    </div>
    <Catagory/>
    <div className="flex lg:mt-20 lg:ml-32 sm:ml-32 md:ml-32 space-x-52 lg:flex md:flex sm:hidden text-white">
      <CardList/>
      <Menu/>
    </div>
    
   </div>
  );
}
