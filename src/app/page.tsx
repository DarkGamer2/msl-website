import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  display: "block",
  style: "normal",
  weight: "400",
});
export default function Home() {
  return (
    <div className="justify-center">
     <Navbar/>
     <div id="welcome-banner">
      <h1 className={`text-center ${poppins.className} text-2xl`}>Welcome To The Medical Sciences Library</h1>
     </div>
     <Footer/>
    </div>
  );
}
