"use client";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { Poppins } from "next/font/google";
import { Bebas_Neue } from "next/font/google";
import { useTheme } from "./context/Theme";

const poppins = Poppins({
  display: "block",
  style: "normal",
  weight: "400",
});

const bebasNeue = Bebas_Neue({
  display: "block",
  style: "normal",
  weight: "400",
});

export default function Home() {
  const { theme } = useTheme();
  return (
    <div className={`min-h-screen ${theme === "dark" ? "dark" : ""}`}>
      <Navbar />
      <div className="bg-white dark:bg-black min-h-screen">
        <div id="welcome-banner">
          <h1 className={`text-center ${poppins.className} text-2xl dark:text-white`}>Welcome To The Medical Sciences Library</h1>
        </div>

        <section id="new-books">
          <h1 className={`text-center ${bebasNeue.className} text-2xl dark:text-white`}>New Books</h1>
        </section>
      </div>
      <Footer />
    </div>
  );
}