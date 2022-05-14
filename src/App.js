import React from "react";
import {BrowserRouter, Routes, Route, Link, forceRefresh} from 'react-router-dom';
import './index.css';
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import FAQ from "./pages/FAQ";
import Testimonials from "./pages/Testimonials"
import Contact from "./pages/Contact";
import ScrollToTop from "./components/ScrollToTop";


export default function App() {
  return (
    <div className="App">
     <BrowserRouter forceRefresh={true}>
     <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} exact />
        <Route path="/faq" element={<FAQ />} exact />
        <Route path="/testimonials" element={<Testimonials />} exact />
        <Route path="/contact" element={<Contact />} exact />
        {/* <Route element={<NotFound />} /> */}
      </Routes>
    </BrowserRouter>
    </div>
  );
}
