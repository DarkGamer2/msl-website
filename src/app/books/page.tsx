"use client";
import { Bebas_Neue } from "next/font/google";
import Book from "../components/Book";
import Christine from "../images/christine.jpg";
import Percy from "../images/Percy.jpg";
import Theodore from "../images/theodore.jpg";
import { StaticImageData } from 'next/image';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
const bebasNeue= Bebas_Neue({
    weight: "400",
    display: 'swap',
    style: 'normal'
});

interface Book {
  image: StaticImageData;
  title: string;
  description?: string;
  author?: string;
  yearPublished?: number;
  id?: number;
}
export default function Page(){
    const bookList: Book[] = [
        {
          image: Christine,
          title: "Christine",
          description: "A horror novel by Stephen King",
          author:"Stephen King",
          yearPublished: 1983,
          id: 1,
        },
        {
          image: Percy,
          title: "Percy Jackson: The Battle Of The Labyrinth",
          description: "A fantasy novel by Rick Riordan",
          author:"Rick Riordan",
          id: 2,
          yearPublished: 2008,
        },
        {
          image: Theodore,
          title: "Theodore Boone: The Scandal",
          description: "A legal thriller novel by John Grisham",
          author:"John Grisham",
          yearPublished: 2016,
          id: 3,
        },
      ];
    
    return(
        <div>
            <Navbar/>
            <div className="dark:bg-black min-h-screen flex flex-col justify-center items-center">
            <h1 className={`${bebasNeue.className} text-center text-2xl dark:text-white`}>All Books</h1>
            <div className="grid grid-cols-3">
                {bookList.map((book) => (
                    <Book 
                        key={book.id}
                        image={book.image}
                        title={book.title}
                        description={book.description}
                      
                      
                    />
                ))}
            </div>
            </div>
            <Footer/>
        </div>
    )
}