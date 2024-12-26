"use client";
import { Bebas_Neue } from "next/font/google"
import Navbar from "../components/Navbar";
import { useTheme } from "../context/Theme";
import Image from "next/image";
import MSLChristamsClosure from "../images/MSL_Christmas_Notice_Image.png";
import Footer from "../components/Footer";
const bebasNeue = Bebas_Neue({
    display: "block",
    style: "normal",
    weight: "400",
  });

export default function Page(){
    const {theme} = useTheme();
    return(
        <div>
            <Navbar/>
           <div className={`${theme==="dark"?"dark":"light"}`}>
          <div className="dark:bg-black min-h-screen">
          <h1 className={`${bebasNeue.className} text-center text-2xl dark:text-white`}>Notices</h1>
            <div className="flex justify-center">
            <div className="rounded-md p-4 m-4 bg-white dark:bg-gray-800 dark:text-white">
                <Image src={MSLChristamsClosure} alt="MSL Christmas Closure" width={300} height={500}/>
                <h4 className={`text-center ${bebasNeue.className} text-xl dark:text-white`}>MSL Notice - MSL Closure</h4>
            </div>
            </div>
          </div>
           </div>
           <Footer/>
        </div>
    )
}