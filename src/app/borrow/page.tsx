"use client";
import { useState } from "react";
import Navbar from "../components/Navbar";
import { useTheme } from "../context/Theme";
import { Lobster,Bebas_Neue } from "next/font/google";
import Footer from "../components/Footer";
import { useRouter } from "next/navigation";
const lobster= Lobster({
    weight: "400",
    display: 'swap',
    style: 'normal'
});

const bebasNeue= Bebas_Neue({
    weight: "400",
    display: 'swap',
    style: 'normal'
});

export default function Page(){
    const [studentId, setStudentId] = useState("");
    const [studentName, setStudentName] = useState("");
    
    const { theme } = useTheme();   
    const router = useRouter();
    return (
        <div>
           <Navbar/>
           <div className={`${theme==='dark'?'dark':'light'}`}>
          <div className="dark:bg-black min-h-screen flex flex-col justify-center items-center">
          <h1 className={`text-2xl dark:text-white text-center ${bebasNeue.className}`}>Borrow a book</h1>
           <div id="borrow-form" >
            <form className="dark:bg-black justify-center">
                <label htmlFor="studentId" className="block dark:text-white text-center">Student ID</label>
                <input type="text" id="studentId" value={studentId} onChange={(e) => setStudentId(e.target.value)} className="rounded-md py-1 px-3 flex"/>
                <label htmlFor="studentName" className="block dark:text-white text-center">Student Name</label>
                <input type="text" id="studentName" value={studentName} onChange={(e) => setStudentName(e.target.value)} className="rounded-md py-1 px-3"/>
                <div className="text-center">
                    <button type="submit" className={`bg-blue-500 text-white ${lobster.className} px-3 rounded-md py-2 my-2`}>Borrow</button>
                </div>
                <div className="text-center">
                    <button className={`bg-red-500 text-white ${lobster.className} px-3 rounded-md py-2 my-2`} onClick={()=>router.back()} type="button">Go Back</button>
                </div>
            </form>
           </div>
          </div>
           </div>
           <Footer/>
        </div>
    )
}