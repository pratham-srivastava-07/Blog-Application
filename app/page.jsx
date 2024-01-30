// import { Main } from "next/document";
import Image from "next/image";
import Feature from "./components/Feature"
import Catagory from "./components/Catagory";

export default function Home() {
  return (
   <div className="container">
    <Feature/>
    <Catagory/>
   </div>
  );
}
