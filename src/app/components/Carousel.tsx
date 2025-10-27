"use client";

import Image from "next/image";
import Link from "next/link";
import Christine from "../images/christine.jpg";
import { useEffect, useState, useMemo } from "react";
import { get } from "../../../server/users";
const books: string[] = []; // Explicitly type as string[] or your book type
type CarouselProps = {
  link: string;
};
const Carousel = async (props: CarouselProps) => {
  const data=await get();
  useEffect(() => {});
  return (
    <div id="carousel-container" className="overflow-x-hidden">
      {data.map((book, index) => (
        <div key={index}>
          <Link href={props.link}>
            <Image
              className="rounded-md object-contain"
              width={100}
              height={100}
              src={Christine}
              alt="med book"
            />
          </Link>
        </div>
      ))}

      
    </div>
  );
};

export default Carousel;


//book interface
// interface Book {
//   image: string;
//   title: string;
//   description?: string;
//   author?: string;
//   yearPublished?: number;
//   id?: number;
// }