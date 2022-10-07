import React from "react";
import "../index.css";
import Navbar1 from "../components/Navbar1";
import BlogH from "../components/BlogH";
import CTA from "../components/CTA";
import Footer from "../components/Footer";
import PostList from "../components/PostList";

export default function FAQ() {
  return (
    <div>
      <Navbar1 />
      <BlogH />
      <PostList />
      <CTA />
      <Footer />
    </div>
  );
}
