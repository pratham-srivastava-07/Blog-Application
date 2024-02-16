// import { Main } from "next/document";
import Image from "next/image";
import Feature from "./components/Feature"
import Catagory from "./components/Catagory";
import CardList from "./components/CardList"
import Menu from "./components/Menu"

export default function Home() {
  return (
   <div className="container">
    <Feature/>
    <Catagory/>
    <div className="flex lg:mt-20 lg:ml-32 sm:ml-32 md:ml-32 space-x-52 lg:flex md:flex sm:hidden text-white">
      <CardList/>
      <Menu/>
    </div>
   </div>
  );
}
