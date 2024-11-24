import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import XIcon from "@mui/icons-material/X";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { Bebas_Neue,Inter } from "next/font/google";
import Link from "next/link";
import { useTheme } from "../context/Theme";
const bebasNeue = Bebas_Neue({
  display: "block",
  style: "normal",
  weight: "400",
});

const inter = Inter({
  display: "block",
  style: "normal",
  weight: "400",
});
export default function Footer() {
  const { theme } = useTheme();
  return (
    <div className={`${theme === "dark" ? "dark" : "light"}`}>
<footer className={`bg-white p-4 w-full bottom-0 dark:bg-black `}>
      <div className="container mx-auto text-center">
        <div className="flex flex-col md:flex-row md:justify-between">
          <div>
            <h1 className={`${bebasNeue.className} text-xl dark:text-white`}>Quick Links</h1>

            <span className={`block ${inter.className} dark:text-white`}>
              <Link href="https://uwin-primo.hosted.exlibrisgroup.com/primo-explore/search?vid=STA&lang=en_US&fromRedirectFilter=true" />
              UWILinc
            </span>
            <span className={`block ${inter.className} dark:text-white`}>
              <Link href="https://uwispace.sta.uwi.edu/dspace">UWISpace</Link>
            </span>
            <span className={`block ${inter.className} dark:text-white`}>
              <Link href="https://uwischolar.sta.uwi.edu">UWIScholar</Link>
            </span>
            <span className={`block ${inter.className} dark:text-white`}>
              <Link href="https://libraries.sta.uwi.edu/msl/index.php/library-services/borrowing">
                Loans,Returns & Fees
              </Link>
            </span>
          </div>
          <div>
            <h1 className={`${bebasNeue.className} dark:text-white text-xl`}>Research Help</h1>

            <span className={`block ${inter.className} dark:text-white`}>
              <Link href="https://libguides.uwi.edu">Research Guide</Link>
            </span>
            <span className={`block ${inter.className} dark:text-white`}>
              <Link href="https://libraries.sta.uwi.edu/apps/index.php/AskaLibrarian/index">
                Ask A Librarian
              </Link>
            </span>
            <span className={`block ${inter.className} dark:text-white`}>
              <Link href="https://libraries.sta.uwi.edu/msl/index.php/about-the-library/faq">
                FAQ
              </Link>
            </span>
            <span className={`block ${inter.className} dark:text-white`}>
              <Link href="https://libguides.uwi.edu/c.php?g=11319&p=59115">
                Using UWILinc
              </Link>
            </span>
            <span className={`block ${inter.className} dark:text-white`}>
              <Link href="https://libraries.sta.uwi.edu/msl/images/COVID19/Registeringpdf.pdf">
                Registering & Creating a profile in UWIScholar
              </Link>
            </span>
          </div>
          <div>
            <h1 className={`${bebasNeue.className} dark:text-white text-xl`}>Services</h1>

            <span className="block dark:text-white">Link</span>
            <span className="block dark:text-white">Link</span>
            <span className="block dark:text-white">Link</span>
            <span className="block dark:text-white">Link</span>
          </div>
          <div>
            <h1 className={`${bebasNeue.className} dark:text-white text-xl`}>Social Media</h1>

            <span className="block dark:text-white">Email</span>
            <span className="block dark:text-white">Phone</span>
            <div id="social-icons">
              <div className="flex my-3">
                <div className="relative group mx-2">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-lime-500 to-green-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
                  <button className="relative px-3 py-2 bg-green-500 rounded-lg leading-none flex items-center divide-x divide-gray-600 text-white hover:animate-bounce duration-300 shadow-lg shadow-green-500/75 ">
                    <WhatsAppIcon />
                  </button>
                </div>
                <div className="relative group mx-2">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-fuchsia-500 to-pink-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
                  <button className="relative px-3 py-2 bg-pink-500 rounded-lg leading-none flex items-center divide-x divide-gray-600 text-white hover:animate-bounce duration-300 shadow-lg shadow-pink-500/75">
                    <InstagramIcon />
                  </button>
                </div>
                <div className="relative group mx-2">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-sky-500 to-blue-500 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
                  <button className="relative px-3 py-2 bg-blue-500 rounded-lg leading-none flex items-center divide-x divide-gray-600 text-white hover:animate-bounce duration-300 shadow-lg shadow-cyan-500/75">
                    <FacebookIcon />
                  </button>
                </div>
                <div className="relative group mx-2">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-orange-500 to-red-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
                  <button className="relative px-3 py-2 bg-red-500 rounded-lg leading-none flex items-center divide-x divide-gray-600 text-white hover:animate-bounce duration-300 shadow-lg shadow-red-500/75">
                    <XIcon />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <p>&copy; 2024 Medical Sciences Library</p>
      </div>
    </footer>
    </div>
    
  );
}
