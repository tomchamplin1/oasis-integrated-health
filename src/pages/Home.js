import { React } from "react";
import '../index.css';
import Navbar1 from "../components/Navbar1"
import Showcase from "../components/Showcase";
import Quote from "../components/Quote";
import Cards from "../components/Cards";
// import About from "../components/About";
import Who from "../components/Who";
import CTA from "../components/CTA";
import Footer from "../components/Footer";
// import Cards from "./components/Cards";
// import About from "./components/About";
// import Offerings from "./components/Offerings";
// import Who from "./components/Who";
// import Contact from "./components/Contact";
// import Separator from "./components/Separator";

export default function Home() {
  return (
    <div>
    <Navbar1 />
    <Showcase />
    <Cards />
    <Quote />
    <Who />
    <CTA />
    <Footer />
    {/* <Cards />
    <About />
    <Offerings />
    <Who />
    <Contact /> */}
    </div>
  );
}