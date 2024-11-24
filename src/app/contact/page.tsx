"use client"
import {motion} from 'framer-motion';
import Navbar from '../components/Navbar';
import { Bebas_Neue } from 'next/font/google';
import { useTheme } from '../context/Theme';

//TODO - create contact form
const bebasNeue = Bebas_Neue({
    display: 'block',
    style: 'normal',
    weight: '400'
});
export default function Page(){
    const {theme} = useTheme();
    return (
        <div className={`${theme===
            "dark"?"dark":"light"
        }`}>
            <Navbar/>
        <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="dark:bg-black">
        <h1 className={`${bebasNeue.className} text-center text-2xl dark:text-white`}>Contact Us</h1>
        <div>
            <form>
                <div>
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name" id="name"/>
                </div>
            </form>
        </div>
        </motion.div>
        </div>
    )
}