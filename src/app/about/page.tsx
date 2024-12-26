"use client";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { Bebas_Neue, Lato } from "next/font/google";
import { useTheme } from "../context/Theme";

const bebasNeue = Bebas_Neue({
  display: "block",
  style: "normal",
  weight: "400",
});

const lato = Lato({
  display: "block",
  style: "normal",
  weight: "400",
});

export default function Page() {
  const { theme } = useTheme();
  return (
    <div className={`${theme === "dark" ? "dark" : "light"} min-h-screen flex flex-col`}>
      <Navbar />
      <div className="flex-grow dark:bg-black bg-white">
        <section className="py-8">
          <h1 className={`${bebasNeue.className} text-center dark:text-white text-2xl`}>
            About the Library
          </h1>
        </section>
        <section id="content-mission-vision" className="py-8">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className={`${bebasNeue.className} text-center dark:text-white text-xl mb-4`}>
              Mission
            </h2>
            <p className={`${lato.className} dark:text-white text-center`}>
              The MSL provides efficient and timely access to competitive,
              relevant and accurate information to its clients, and contributes
              proactively to the teaching and learning enterprise of the Faculty
              of Medical Sciences. Its Mission is realized through the
              development and leveraging of technology and staff expertise in
              the selection, acquisition, processing, preservation and
              dissemination of multi-faceted physical and virtual information
              resources and in the provision of excellent access, reference,
              research and instructional services.
            </p>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}