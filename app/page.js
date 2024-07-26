import Image from "next/image";
import Navbar from "@/components/Navbar";
import Home from "@/components/Home";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";


export default function main() {
  return (
   <main className="space-grotesk cursor-default">
    <Navbar/>
    <Home/>
    <About/>
    <Skills/>
    <Contact/>
    <Footer/>
    </main>
  );
}
