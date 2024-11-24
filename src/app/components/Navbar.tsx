"use client";
import Link from "next/link";
import Image from "next/image";
import UWILogo from "../images/UWI_Logo.png";
import { useState, useEffect, useRef } from "react";
import { Inter } from "next/font/google";
import { DarkMode, LightMode } from "@mui/icons-material";
import { useTheme } from "../context/Theme";
const inter = Inter({
  display: "block",
  style: "normal",
  weight: "400",
});

export default function Navbar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [libraryStatus, setLibraryStatus] = useState("");
  const { theme, toggleTheme } = useTheme();
  const dropdownRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const checkLibraryStatus = () => {
      const now = new Date();
      const day = now.getDay();
      const hour = now.getHours();

      const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
      const monthsOfYear = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

      const dayName = daysOfWeek[now.getDay()];
      const monthName = monthsOfYear[now.getMonth()];
      const date = now.getDate();
      const year = now.getFullYear();

      const formattedDate = `${dayName} ${date} ${monthName} ${year}`;

      if (day >= 1 && day <= 5 && hour >= 9 && hour < 17) {
        setLibraryStatus(`${formattedDate} - Open. 24/7 12noon - 6:00pm`);
      } else {
        setLibraryStatus(`${formattedDate} - Closed. 24/7 12noon - 6:00pm`);
      }
    };

    checkLibraryStatus();
    const interval = setInterval(checkLibraryStatus, 60000); // Check every minute

    return () => clearInterval(interval);
  }, []); // Run once on component mount

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);

  return (
    <div className={`${theme === "dark" ? "dark" : "light"}`}>
      <nav className="dark:bg-black">
        <ul className={`flex items-center justify-between w-full ${inter.className} dark:text-white`}>
          <div className="flex items-center">
            <li className="flex items-center">
              <Image src={UWILogo} alt="UWI Logo" width={50} height={50} />
            </li>
            <li className="mx-3">
              <Link href="/">Home</Link>
            </li>
            <li className="mx-3">
              <Link href="/about">About</Link>
            </li>
            <li className="mx-3">
              <Link href="/contact">Contact</Link>
            </li>
            <li className="mx-3">
              <Link href="/services">Services</Link>
            </li>
            <li className="relative mx-3">
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="focus:outline-none"
              >
                Important Information
              </button>
              <ul
                ref={dropdownRef}
                className={`absolute left-0 mt-2 w-48 bg-white border border-gray-200 rounded shadow-lg dark:bg-black transition-all duration-300 ease-in-out transform ${
                  dropdownOpen ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"
                }`}
              >
                <li className="px-4 py-2 hover:bg-gray-100 dark:text-white dark:hover:bg-slate-600">
                  <Link href="/info1">Notices</Link>
                </li>
                <li className="px-4 py-2 hover:bg-gray-100 dark:text-white dark:hover:bg-slate-600">
                  <Link href="/info2">Featured Faculty Publications</Link>
                </li>
                <li className="px-4 py-2 hover:bg-gray-100 dark:text-white dark:hover:bg-slate-600">
                  <Link href="/info3">Useful Resources</Link>
                </li>
              </ul>
            </li>
            <li className="mx-3">
              <input
                type="text"
                placeholder="Search..."
                className="px-4 py-2 border border-gray-300 rounded"
              />
            </li>
          </div>
          <div className="flex items-center">
            <li className="mx-3 text-sm text-gray-600 flex items-center">
              <button onClick={toggleTheme} className="mr-2 dark:text-white">
                {theme === "dark" ? <LightMode /> : <DarkMode />}
              </button>
              {libraryStatus}
            </li>
          </div>
        </ul>
      </nav>
    </div>
  );
}