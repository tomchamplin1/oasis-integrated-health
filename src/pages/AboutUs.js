import React from "react";
import '../index.css';
import Navbar1 from "../components/Navbar1"
import AboutH from "../components/AboutH";
import AboutM from "../components/AboutM";
import CTA from "../components/CTA";
import Footer from "../components/Footer";

export default function AboutUs() {
  return (
    <div>
    <Navbar1 />
    <AboutH />
    <AboutM />
    <CTA />
    <Footer />
    </div>
  );
}