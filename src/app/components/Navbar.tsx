import Link from "next/link"
import Image from "next/image"
import UWILogo from "../images/UWI_Logo.png"

export default function Navbar() {
    return (
        <div>
            <nav>
                <ul className="flex items-center">
                    <li className="flex items-center"><Image src={UWILogo} alt="UWI Logo" width={50} height={50} /></li>
                    <li className="mx-3"><Link href="/">Home</Link></li>
                    <li className="mx-3"><Link href="/about">About</Link></li>
                    <li className="mx-3"><Link href="/contact">Contact</Link></li>
                </ul>
            </nav>
        </div>
    )
}