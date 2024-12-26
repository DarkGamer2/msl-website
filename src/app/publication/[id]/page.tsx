"use client";
import Navbar from "@/app/components/Navbar";
import { useTheme } from "@/app/context/Theme";
import { useState,useEffect } from "react";
import { useParams } from "next/navigation";
interface Publication {
    id:number;
    title:string;
    subHeading:string;
    article:string;
    awards:string[];
}
const publications:Publication[] = [
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
export default function Page(){
    const {theme} = useTheme();
    const { id } = useParams();
    const [publication, setPublication] = useState<Publication | undefined>(undefined);

    useEffect(()=>{
        if(id){
            const publicationId=Number(id);
            const publication = publications.find((publication)=>publication.id===publicationId);
            setPublication(publication);
        }
    },[id])

    if(!publication){
        return <div>Publication not found</div>
    }
    return (
        <div className={`${theme==="dark"?"dark":"light"}`}>
            <div className="dark:bg-black">
                <Navbar/>
                <div>
                    <h1>{publication?.title}</h1>
                </div>
            </div>
        </div>
    )
}