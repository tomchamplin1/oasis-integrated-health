import React from "react";

export default function Quote() {
  return (
    <div>
      <img
        className="w-full"
        src="https://res.cloudinary.com/dm8nr1vwr/image/upload/v1650024548/Oasis%20Integrated%20Health/cta-buffer_d4rvwp.svg"
        loading="lazy"
        decoding="async"
        alt="wave buffer image"
      />
      <div class="grid grid-cols-1 md:grid-cols-2 w-full bg-blue-700 py-5 px-5 md:py-36 md:px-20 md:gap-12">
        <div className="my-auto">

          <h1 class="mb-2 text-2xl md:text-4xl font-bold text-white text-center md:text-left">
            We are healthcare professionals with over 45 years of experience.
            Together we use genetics, lifestyle optimization, and disease
            prevention to help you live a fuller and happier life.
          </h1>
        </div>
        <div className="">
          <img
            src="https://res.cloudinary.com/dm8nr1vwr/image/upload/v1652309483/Oasis%20Integrated%20Health/doctor1_aeqrjg.svg"
            loading="lazy"
            decoding="async"
            alt="doctors vector image"
            className="py-5 md:pb-0 md:pt-0 md:w-5/5 w-5/5 md:mx-auto md:mx-0 mx-auto"
          />
        </div>
      </div>
    </div>
  );
}
