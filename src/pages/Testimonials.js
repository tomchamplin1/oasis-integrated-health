import { React } from "react";
import "../index.css";
import Navbar1 from "../components/Navbar1";
import TestimonialsH from "../components/TestimonialsH";
import Testimonials from "../components/Testimonials";
import CTA from "../components/CTA";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div>
      <Navbar1 />
      <TestimonialsH />
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  );
}
