import Image from "next/image";
import Hero from "../app/Components/Hero";
import About from "../app/Components/About";
import Testimonial from "../app/Components/Testimonial";
import Project from "../app/Components/Project";
import Contacts from "../app/Components/Contacts"

export default function Home() {
  return (
   <>
   <Hero />
   <About />
   <Testimonial />
   <Project />
   <Contacts />
   </>
  );
}
