"use client";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { useTheme } from "../context/Theme";
import { Bebas_Neue } from "next/font/google";
import { motion, useMotionTemplate, useScroll, useTransform } from "framer-motion";

const bebasNeue = Bebas_Neue({
  display: "block",
  style: "normal",
  weight: "400",
});

const SECTION_HEIGHT = 1500;

interface TextProps {
  title: string;
  description: string;
}

const CenterImage = () => {
  const { scrollY } = useScroll();
  const clip1 = useTransform(scrollY, [0, SECTION_HEIGHT], [25, 0]);
  const clip2 = useTransform(scrollY, [0, SECTION_HEIGHT], [75, 100]);
  const opacity = useTransform(scrollY, [SECTION_HEIGHT, SECTION_HEIGHT + 500], [1, 0]);
  const backgroundSize = useTransform(scrollY, [0, SECTION_HEIGHT + 500], ["170%", "100%"]);

  const clipPath = useMotionTemplate`polygon(${clip1}% ${clip1}%, ${clip2}% ${clip1}%, ${clip2}% ${clip2}%, ${clip1}% ${clip2}%)`;

  return (
    <motion.div
      className="sticky top-0 h-screen w-full"
      style={{
        backgroundImage: "url('https://www.engr.washington.edu/files/content/media/wilcox73.jpg')",
        opacity,
        backgroundSize,
        clipPath,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    ></motion.div>
  );
};

const FadingText = (props: TextProps) => {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, SECTION_HEIGHT / 2, SECTION_HEIGHT], [0, 1, 0]);
  const y = useTransform(scrollY, [0, SECTION_HEIGHT], ["50%", "0%"]);

  return (
    <motion.div
      className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-4xl font-bold"
      style={{ opacity, y }}
    >
      <h3 className={`text-center ${bebasNeue.className}`}>{props.title}</h3>
      <p className="text-center">{props.description}</p>
    </motion.div>
  );
};

export default function Page() {
  const { theme } = useTheme();
  return (
    <div className={`${theme === "dark" ? "dark" : "light"} min-h-screen flex flex-col`}>
      <Navbar />
      <div className="flex-grow dark:bg-black bg-white">
        <section className="py-8">
          <h1 className={`${bebasNeue.className} text-center dark:text-white text-2xl`}>
            Library Services
          </h1>
        </section>
        <div className="relative w-full" style={{ height: `calc(${SECTION_HEIGHT}px + 100vh)` }}>
          <CenterImage />
          <FadingText title="Printing Services" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit." />
          <div className="absolute bottom-0 left-0 right-0 h-96 bg-gradient-to-b from-zinc-950/20 to-zinc-950/0"></div>
        </div>
        <div className="relative w-full" style={{ height: `calc(${SECTION_HEIGHT}px + 100vh)` }}>
          <CenterImage />
          <FadingText
            title="Book Rentals"
            description="The Library provides one (1) type of photocopying services. These services and charges are as follows:-
            Self-service Photocopying Machines
            One (1) card operated photocopying machines are provided to facilitate the copying of material. An encoded copy card is available at a cost of $20.00 for 40 units. Cards can be topped up at the Accounts Unit. Patrons are advised to read the copyright notice posted near the machines before copying to avoid infringement of the copyright law.
            Photocopying Service by Library Staff
            Patrons who need to do extensive photocopying can arrange to have this done by the library staff. However, this service is not necessarily provided on demand. Copies can be collected after 3:00 p.m. each day. The following conditions obtain:-
            • The applicant signs a copyright declaration form assuming responsibility for possible copyright infringement.
            • All material for copying must be presented at the Information Desk and the relevant forms completed.
            • All forms for departmental copying must be signed by the Head of Department or a person authorized to sign on his/her behalf accepting the charges involved.
            Photocopying - Black and White
            Departmental/Personal (UWI)
            $0.25 per print for 8 1/2' x 11 or 8 1/2' x 14' paper
            Requests from external users
            $0.75 per print for 8 1/2' x 11 or 8 1/2' x 14' paper
            Photocopying - Colour
            Departmental/Personal (UWI)
            $4.00 per print for 8 1/2' x 11 or 8 1/2' x 14' paper
            Requests from external users
            $5.00 per print for 8 1/2' x 11 or 8 1/2' x 14' paper"
          />
          <div className="absolute bottom-0 left-0 right-0 h-96 bg-gradient-to-b from-zinc-950/20 to-zinc-950/0"></div>
        </div>
      </div>
      <Footer />
    </div>
  );
}