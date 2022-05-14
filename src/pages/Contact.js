import React from "react";
import '../index.css';
import Navbar1 from "../components/Navbar1"
import FormH from "../components/FormH";
import Form from "../components/Form";
import Footer from "../components/Footer";

export default function Contact() {
  return (
    <div>
    <Navbar1 />
    <FormH />
    <Form />
    <Footer />
    </div>
  );
}