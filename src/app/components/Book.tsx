import Image from 'next/image';
import { Bebas_Neue, Lobster } from 'next/font/google';
import { StaticImageData } from 'next/image';

const lobster = Lobster({
  display: "block",
  style: "normal",
  weight: "400",
});

const bebasNeue = Bebas_Neue({
  display: "block",
  style: "normal",
  weight: "400",
});

interface BookProps {
  image: StaticImageData;
  title: string;
  description?: string;
}

export default function Book(props: BookProps) {
  return (
    <div className="p-2">
      <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md border border-gray-300 dark:border-gray-700 inline-block max-w-xs">
        <Image src={props.image} alt="Book" width={200} height={200} className="w-full h-auto object-cover" />
        <div className="p-4">
          <h3 className={`${bebasNeue.className} text-lg dark:text-white text-center`}>{props.title}</h3>
          <p className="text-gray-700 dark:text-gray-300 text-center">{props.description}</p>
          <div className="text-center mt-4">
            <button className={`${lobster.className} bg-red-500 text-white py-1 px-3 rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50`}>
              Borrow
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}