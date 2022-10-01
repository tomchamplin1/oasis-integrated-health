import React from "react";
import "../index.css";
import Navbar1 from "../components/Navbar1";
import FAQH from "../components/FAQH";
import CTA from "../components/CTA";
import Footer from "../components/Footer";
import PostList from "../components/PostList";

export default function FAQ() {
  return (
    <div>
      <Navbar1 />
      <FAQH />
      <PostList />
      <CTA />
      <Footer />
    </div>
  );
}
