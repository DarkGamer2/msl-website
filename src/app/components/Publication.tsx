import Link from "next/link";
import { useTheme } from "../context/Theme";
import { Bebas_Neue } from "next/font/google";
interface Publication {
    id:number;
    title:string;
    subHeading:string;
    article:string;
    awards:string[];
}

const bebasNeue = Bebas_Neue({
    display: "block",
    style: "normal",
    weight: "400",
  });
export default function Publication(props:Publication){
    const {theme} = useTheme();
    return(
        <div className={`${theme==="dark"?"dark":"light"} p-4`}>
            <div className="rounded-md bg-white dark:bg-gray-800 p-4 shadow-md">
               <Link href={`/publications/${props.id}`}>
               <h1 className={`text-center dark:text-white ${bebasNeue.className}`}>{props.title}</h1>
               </Link>
            </div>
        </div>
    )
}