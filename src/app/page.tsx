"use client";
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import LiveChat from "./chat/LiveChat";
import { Poppins } from "next/font/google";
import { Bebas_Neue } from "next/font/google";
import { useTheme } from "./context/Theme";
import Christine from "./images/christine.jpg";
import Percy from "./images/Percy.jpg";
import Theodore from "./images/theodore.jpg";
import Book from "./components/Book";
import { useParams } from "next/navigation";
import { StaticImageData } from 'next/image';

// Fonts setup
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

// Book interface
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
      title: "Percy Jackson: The Battle Of The Labyrinth",
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
  const params = useParams();
  const [selectedBook, setSelectedBook] = useState<Book | undefined>(undefined);
  const [isChatOpen, setIsChatOpen] = useState(false);

  useEffect(() => {
    if (params.book) {
      const bookId = Number(params.book);
      const book = bookList.find(book => book.id === bookId);
      setSelectedBook(book);
    }
  }, [params.book]);

  return (
    <div className={`min-h-screen ${theme === "dark" ? "dark" : ""}`}>
      <Navbar />
      <div className="bg-white dark:bg-black min-h-screen">
        {/* Welcome Banner */}
        <div id="welcome-banner" className="p-4">
          <h1 className={`text-center ${poppins.className} text-2xl dark:text-white`}>
            Welcome To The Medical Sciences Library
          </h1>
        </div>

        {/* New Books Section */}
        <section id="new-books" className="p-4">
          <h1 className={`text-center ${bebasNeue.className} text-2xl dark:text-white mb-4`}>
            New Books
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {selectedBook ? (
              <div className="h-full">
                <Book
                  title={selectedBook.title}
                  image={selectedBook.image}
                  description={selectedBook.description}
                />
              </div>
            ) : (
              bookList.map((book: Book, index: number) => (
                <div key={index} className="h-full">
                  <Book
                    title={book.title}
                    image={book.image}
                    description={book.description}
                  />
                </div>
              ))
            )}
          </div>
        </section>
      </div>
      <Footer />

      {/* Live Chat Toggle Button */}
      {!isChatOpen && (
  <motion.div
    className="fixed top-1/2 right-4 z-50 cursor-pointer bg-blue-500 text-white p-4 rounded-l-lg flex items-center transform -translate-y-1/2 shadow-lg hover:animate-bounce"
    onClick={() => setIsChatOpen(true)}
    initial={{ x: '100%' }}
    animate={{ x: '0%' }}
    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
  >
    <FaArrowLeft className="mr-2" />
    Live Chat
  </motion.div>
)}

{/* Live Chat Component */}
<motion.div
  className="fixed top-1/4 right-0 w-80 h-3/4 bg-white dark:bg-gray-800 shadow-2xl rounded-lg z-40 overflow-hidden"
  initial={{ x: '100%' }}
  animate={{ x: isChatOpen ? '0%' : '100%' }}
  transition={{ type: 'spring', stiffness: 300, damping: 30 }}
>
  <LiveChat closeChat={() => setIsChatOpen(false)} />
</motion.div>
    </div>
  );
}
