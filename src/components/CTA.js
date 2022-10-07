import React from "react";
import { Link } from "react-router-dom";
import "animate.css";
import "animate.css/animate.min.css";
import { AnimationOnScroll } from "react-animation-on-scroll";

export default function CTA() {
  return (
    <div class="py-12 px-4 w-full text-center bg-blue-700">
    <AnimationOnScroll animateIn="animate__fadeInUp" animateOnce="true">
      <h5 class="mb-2 pt-5 text-5xl font-bold text-white">
        Contact us today
      </h5>
      <p class="mb-5 text-base text-white sm:text-2xl">
        We'd love to connect!
      </p>
      <div class="justify-center items-center space-y-4 sm:flex sm:space-y-0 sm:space-x-4">
        <p className="pb-5 mb-2">
          <Link
            to="/contact"
            class="rounded inline-block bg-white hover:bg-blue-700 text-blue-700 hover:text-white border border-white text-sm tracking-wider py-3 px-5 shadow font-bold"
          >
            Contact Us
          </Link>
        </p>
      </div>
      </AnimationOnScroll>
    </div>
  );
}
