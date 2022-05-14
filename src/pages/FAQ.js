import React from "react";
import '../index.css';
import Navbar1 from "../components/Navbar1"
import FAQH from "../components/FAQH";
import Questions from "../components/Questions";
import CTA from "../components/CTA";
import Footer from "../components/Footer";

export default function FAQ() {
  return (
    <div>
    <Navbar1 />
    <FAQH />
    <Questions />
    <CTA />
    <Footer />
    </div>
  );
}