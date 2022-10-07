import React from "react";
import "../index.css";
import Navbar1 from "../components/Navbar1";
import FAQH from "../components/FAQH";
import CTA from "../components/CTA";
import Footer from "../components/Footer";
import PostPage from "../components/PostPage";

export default function Post() {
  return (
    <div>
      <Navbar1 />
      <FAQH />
      <PostPage />
      <CTA />
      <Footer />
    </div>
  );
}
