import React from "react";
import "../index.css";
import Navbar1 from "../components/Navbar1";
import BlogH from "../components/BlogH";
import CTA from "../components/CTA";
import Footer from "../components/Footer";
import PostPage from "../components/PostPage";

export default function Post() {
  return (
    <div>
      <Navbar1 />
      <BlogH />
      <PostPage />
      <CTA />
      <Footer />
    </div>
  );
}
