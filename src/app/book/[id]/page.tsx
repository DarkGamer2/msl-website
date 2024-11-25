"use client";
import { useRouter, useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { StaticImageData } from "next/image";
import Christine from "../../images/christine.jpg";
import Percy from "../../images/Percy.jpg";
import Theodore from "../../images/theodore.jpg";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { Lobster } from "next/font/google";
import { useTheme } from "@/app/context/Theme";
import { motion } from "framer-motion";

const lobster = Lobster({
  display: "block",
  style: "normal",
  weight: "400",
});

interface Book {
  image: StaticImageData;
  title: string;
  description?: string;
  author: string;
  yearPublished: number;
  id: number;
}

const bookList: Book[] = [
  {
    image: Christine,
    title: "Christine",
    description: "A horror novel by Stephen King",
    author: "Stephen King",
    yearPublished: 1983,
    id: 1,
  },
  {
    image: Percy,
    title: "Percy Jackson: The Battle Of The Labyrinth",
    description: "A fantasy novel by Rick Riordan",
    author: "Rick Riordan",
    id: 2,
    yearPublished: 2008,
  },
  {
    image: Theodore,
    title: "Theodore Boone: The Scandal",
    description: "A legal thriller novel by John Grisham",
    author: "John Grisham",
    yearPublished: 2016,
    id: 3,
  },
];

export default function BookDetails() {
  const { theme } = useTheme();
  const { id } = useParams();
  const [book, setBook] = useState<Book | undefined>(undefined);

  useEffect(() => {
    if (id) {
      const bookId = Number(id);
      const foundBook = bookList.find((book) => book.id === bookId);
      setBook(foundBook);
    }
  }, [id]);

  if (!book) {
    return (
      <div className={`${theme === "dark" ? "bg-black" : "bg-white"} min-h-screen flex flex-col`}>
        <Navbar />
        <div className="flex-grow flex items-center justify-center">
          <p>Book Not Found</p>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className={`${theme === "dark" ? "bg-black" : "bg-white"} min-h-screen flex flex-col`}>
      <Navbar />
      <div className="flex-grow flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '20px',
          }}
          className="dark:bg-black"
        >
          {/* Image Section */}
          <div style={{ flex: '0 0 auto', maxWidth: '500px', marginRight: '20px' }}>
            <img
              src={book.image.src}
              alt={book.title}
              style={{
                maxWidth: '100%',
                height: 'auto',
              }}
              className="rounded-md"
            />
          </div>

          {/* Book Details Section */}
          <div style={{ flex: '1', textAlign: 'left' }}>
            <h1 className={`font-bold text-3xl ${lobster.className} dark:text-white`}>{book.title}</h1>
            <p className="text-lg mt-4 dark:text-white">{book.description || "No description available"}</p>
            <p className="dark:text-white">Author: {book.author}</p>
            <p className="dark:text-white">Year Published: {book.yearPublished}</p>
            <div className="mt-6 flex gap-4">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className={`bg-red-600 text-white rounded-md px-5 py-3 ${lobster.className}`}
                style={{ display: 'flex', alignItems: 'center', gap: '8px' }}
              >
                Borrow
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
      <Footer />
    </div>
  );
}