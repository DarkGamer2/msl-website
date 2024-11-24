"use client";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { Poppins } from "next/font/google";
import { Bebas_Neue } from "next/font/google";
import { useTheme } from "./context/Theme";
import Christine from "./images/christine.jpg";
import Percy from "./images/Percy.jpg";
import Theodore from "./images/theodore.jpg";
import Book from "./components/Book";
import { useParams } from "next/navigation";
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

import { StaticImageData } from 'next/image';

interface Book {
  image: StaticImageData;
  title: string;
  description?: string;
  id?: number;
}

export default function Home() {
  const bookList: Book[] = [
    {
      image: Christine,
      title: "Christine",
      description: "A horror novel by Stephen King",
      id: 1,
    },
    {
      image: Percy,
      title: "Percy Jackson: The Battle Of The Labrynth",
      description: "A fantasy novel by Rick Riordan",
      id: 2,
    },
    {
      image: Theodore,
      title: "Theodore Boone: The Scandal",
      description: "A legal thriller novel by John Grisham",
      id: 3,
    },
  ];

  const { theme } = useTheme();
  const params = useParams<{ book: string }>();
  const selectedBook = bookList.find(book => book.id === Number(params.book));

  return (
    <div className={`min-h-screen ${theme === "dark" ? "dark" : ""}`}>
      <Navbar />
      <div className="bg-white dark:bg-black min-h-screen">
        <div id="welcome-banner" className="p-4">
          <h1
            className={`text-center ${poppins.className} text-2xl dark:text-white`}
          >
            Welcome To The Medical Sciences Library
          </h1>
        </div>

        <section id="new-books" className="p-4">
          <h1
            className={`text-center ${bebasNeue.className} text-2xl dark:text-white mb-4`}
          >
            New Books
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {selectedBook ? (
              <div className="h-full">
                <Book
                  title={selectedBook.title}
                  image={selectedBook.image}
                  description={selectedBook.description}
                  id={selectedBook.id}
                />
              </div>
            ) : (
              bookList.map((book: Book, index: number) => (
                <div key={index} className="h-full">
                  <Book
                    title={book.title}
                    image={book.image}
                    description={book.description}
                    id={book.id}
                  />
                </div>
              ))
            )}
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}