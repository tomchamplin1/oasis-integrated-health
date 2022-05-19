import React from "react";
import { Link } from "react-router-dom";

export default function Who() {
  return (
    <section id="about" className="bg-gray-100">
      <div class="mx-auto px-4 md:px-24 md:py-24 py-12">
        <h3 class="text-center text-lg text-blue-700 font-extrabold">
          WHO WE ARE
        </h3>
        <h3 class="pb-3 md:text-4xl text-5xl font-extrabold leading-tight text-center text-black">
          Our Team
        </h3>
        <p className="text-center md:w-3/5 w-5/5 mx-auto">
          Based in El Paso, we are healthcare experts with one goal in mind: to
          make healthy humans. Contact us today to learn how we can help you
          become your healthiest self.
        </p>
        <div className="md:py-24 py-12 grid sm:items-center sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 justify-items-center px-12 gap-5">
          <div class="flex-shrink-0 text-center block max-w-sm bg-white shadow-lg hover:scale-105 rounded-3xl">
            <picture>
              <source
                srcset="https://res.cloudinary.com/dm8nr1vwr/image/upload/c_scale,w_600/v1650578590/Oasis%20Integrated%20Health/jeremy-pic_vibi2h.webp"
                type="image/webp"
              />
              <img
                src="https://res.cloudinary.com/dm8nr1vwr/image/upload/c_scale,w_600/v1650578590/Oasis%20Integrated%20Health/jeremy-pic_vibi2h.jpg"
                className="mx-auto rounded-t-3xl"
                loading="lazy"
                decoding="async"
                alt="jeremy white"
              />
            </picture>
            <h5 class="p-3 text-lg tracking-tight text-black text-bold">
              Jeremy White, MD
            </h5>
            {/* <p class="text-gray-700 pb-2">
            Jeremy C White MD is a physician in the emergency room with more
            than 25 years of experience. He is a graduate of Southwestern
            Medical School and attended residency at Vanderbilt University
            Medical Center. Jeremy’s goal is to prevent the health crises he
            sees every day. After completing a residency in genomic medicine in
            2022, his focus has become one of prevention, early detection of
            disease, and health optimization using genetics and integrative
            medicine. Jeremy is passionate about the maintenance of one's mental
            and physical capacities regardless of age!
          </p> */}
          </div>
          <div class="flex-shrink-0 text-center block max-w-sm bg-white shadow-lg hover:scale-105 rounded-3xl">
            <picture>
              <source
                srcset="https://res.cloudinary.com/dm8nr1vwr/image/upload/c_scale,w_600/v1650578542/Oasis%20Integrated%20Health/kristen-headshot_zqkgyp.webp"
                type="image/webp"
              />
              <img
                src="https://res.cloudinary.com/dm8nr1vwr/image/upload/c_scale,w_600/v1650578542/Oasis%20Integrated%20Health/kristen-headshot_zqkgyp.jpg"
                className="mx-auto rounded-t-3xl"
                loading="lazy"
                decoding="async"
                alt="kristen white"
              />
            </picture>
            <h5 class="p-3 text-lg tracking-tight text-black text-bold">
              Kristen White, BSN
            </h5>
            {/* <p class="text-gray-700 pb-2">
            Kristen is a BSN graduate of Texas Woman’s University and has 20+
            years of experience working in the health care field. She has worked
            with patients of all ages and disease states both in and out of the
            hospital setting. Over the last 10 years, Kristen’s passion and
            specialty have moved away from only sick management to life
            optimization and health maintenance throughout the life span.
          </p> */}
          </div>
        </div>
        {/* <div class="pb-24 justify-center items-center text-center space-y-4 sm:flex sm:space-y-0 sm:space-x-4">
          <p>
            <a
              href="/users/sign_up"
              class="rounded inline-block bg-blue-700 hover:bg-blue-800 text-white text-sm tracking-wider py-3 px-5 shadow font-bold"
            >
              Learn More
            </a>
          </p>
        </div> */}
        <div className="text-center">
          <p class=" mx-auto">
            <Link
              to="/about"
              class="rounded inline-block bg-blue-700 hover:bg-blue-800 text-white text-lg tracking-wider py-4 px-8 shadow font-bold"
            >
              Learn more
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}
