"use client";
import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { useTheme } from "../context/Theme";
import { Bebas_Neue } from "next/font/google";
import { useParams } from "next/navigation";
import Publication from "../components/Publication";
const bebasNeue = Bebas_Neue({
    display: "block",
    style: "normal",
    weight: "400",
  });
export default function Page(){
    const {theme} = useTheme();
    const { id } = useParams(); // id is declared but not used
    const publications = [
        {
            id: 1,
            title: "26th Annual Student Research Day Winners",
            subHeading: "The Faculty of Medical Sciences 26th Annual Student Research Day for the Schools of Medicine and Dentistry took place on October 17th, 2024.",
            article: "42 research items were featured in oral and poster presentations. The research done by Group number 25, “Socioeconomic Determinants of Cardiovascular Disease: A Systematic Review” was highly successful and won 4 of the 5 prizes awarded:",
            awards: [
                "FMS Research Day Overall Prize",
                "FMS Research Day Systematic Review Library Prize",
                "FMS Research Day Poster Presentation – 1st place",
                "FMS Research Day – Best Dressed Team"
            ]
        }
    ];
    return(
        <div className={`${theme==="dark"?"dark":"light"}`}>
            <Navbar/>
            <div className="dark:bg-black min-h-screen p-4">
            <h1 className={`${bebasNeue.className} dark:text-white text-2xl text-center`}>Featured Faculty Publications</h1>
            <div className="flex">
                {publications.map((publication)=>(
                    <Publication key={publication.id} {...publication} id={publication.id}/>
                ))}
            </div>
            </div>
            <Footer/>
        </div>
    )
}