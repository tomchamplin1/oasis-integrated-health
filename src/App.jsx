import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import './index.css';
import Navbar from "./components/Navbar";
import Showcase from "./components/Showcase";
import Cards from "./components/Cards";
import About from "./components/About";
import Offerings from "./components/Offerings";
import FAQ from "./components/FAQ";
import Who from "./components/Who";
import Contact from "./components/Contact";

function App() {
  return (
    <div>
    <Navbar />
    <Showcase />
    <Cards />
    <About />
    <Offerings />
    <FAQ />
    <Who />
    <Contact />
    </div>
  );
}

export default App;
