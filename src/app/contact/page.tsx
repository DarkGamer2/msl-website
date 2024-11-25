"use client";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import { Bebas_Neue } from "next/font/google";
import { useTheme } from "../context/Theme";
import Footer from "../components/Footer";

const bebasNeue = Bebas_Neue({
  display: "block",
  style: "normal",
  weight: "400",
});

export default function Page() {
  const { theme } = useTheme();

  return (
    <div className={`${theme === "dark" ? "dark" : "light"} min-h-screen flex flex-col`}>
      <Navbar />
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        className="flex-grow flex items-center justify-center dark:bg-black"
      >
        <div className="w-full max-w-lg mx-auto p-4">
          <h1 className={`${bebasNeue.className} text-center text-2xl font-bold dark:text-white`}>
            Contact Us
          </h1>
          <form className="w-full max-w-lg mx-auto mt-6">
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 dark:text-white"
                  htmlFor="name"
                >
                  Name
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white dark:bg-black"
                  id="name"
                  type="text"
                  name="name"
                  placeholder="Jane"
                />
                <p className="text-red-500 text-xs italic">Please fill out this field.</p>
              </div>
              <div className="w-full md:w-1/2 px-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 dark:text-white"
                  htmlFor="studentId"
                >
                  Student ID Number
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white dark:bg-black"
                  id="studentId"
                  type="text"
                  name="studentId"
                  placeholder="123456"
                />
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 dark:text-white"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white dark:bg-black"
                  id="email"
                  type="email"
                  name="email"
                  placeholder="john@example.com"
                />
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-2">
              <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 dark:text-white"
                  htmlFor="contactNumber"
                >
                  Contact Number
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white dark:bg-black"
                  id="contactNumber"
                  type="text"
                  name="contactNumber"
                  placeholder="1234567"
                />
              </div>
              <div className="w-full md:w-2/3 px-3 mb-6 md:mb-0">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 dark:text-white"
                  htmlFor="query"
                >
                  Query
                </label>
                <textarea
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white dark:bg-black"
                  id="query"
                  name="query"
                  placeholder="I would like an e-commerce website..."
                ></textarea>
              </div>
            </div>
            <div className="text-center">
              <button
                className="hover:bg-pink-600 hover:-translate-y-0.5 transform transition active:bg-pink-700 focus:outline-none focus:ring focus:ring-offset-2 focus:ring-indigo-500 focus:ring-opacity-50 bg-indigo-500 text-white px-5 py-4 inline-block rounded-lg shadow-lg uppercase tracking-wider font-semibold text-sm sm:text-base"
                type="submit"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </motion.div>
      <Footer />
    </div>
  );
}