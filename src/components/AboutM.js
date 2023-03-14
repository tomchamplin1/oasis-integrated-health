import React from "react";

export default function AboutM() {
  return (
    <section id="about" className="bg-white">
      <div class="md:px-24 mx-auto px-4 py-12">
        <div className="grid sm:items-center sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 justify-items-center gap-5">
          <div class="my-auto lg:block w-full lg:w-5/5 px-auto text-center self-center mx-auto">
            <picture>
              <source
                srcset="https://res.cloudinary.com/dm8nr1vwr/image/upload/c_crop,h_1282,w_927/v1651704912/Oasis%20Integrated%20Health/K_J_owp1zz.webp"
                type="image/webp"
              />
              <img
                src="https://res.cloudinary.com/dm8nr1vwr/image/upload/c_crop,h_840,w_1516/v1651704912/Oasis%20Integrated%20Health/K_J_owp1zz.jpg"
                class="z-50 inline-block w-4/5 shadow-xl rounded-3xl"
                loading="lazy"
                decoding="async"
                alt="beach run"
              />
            </picture>
          </div>
          <div>
            <h3 class="pt-5 md:pt-0 text-lg md:text-left text-center text-blue-700 font-extrabold">
              ABOUT US
            </h3>
            <h3 class="pb-12 md:pt-0 md:text-4xl text-5xl font-extrabold leading-tight text-center md:text-left text-black">
              Who We Are
            </h3>
            <div class="flex-shrink-0 text-left block pb-12">
              <h5 class="pb-2 text-2xl tracking-tight text-black text-bold">
                Jeremy White, MD
              </h5>
              <p class="text-gray-700">
                With over 25 years of experience in medicine, Dr. Jeremy is
                dedicated to preventing the health crises he sees every day. A
                graduate of Southwestern Medical School and former resident of
                Vanderbilt University Medical Center, Dr. Jeremy's focus has
                shifted towards prevention, early detection of disease, and
                health optimization using genetics and integrative medicine
                after completing a fellowship in nutrigenomic medicine in 2022.
                He is passionate about helping individuals maintain their mental
                and physical capacities, regardless of age.
              </p>
            </div>
            <div class="flex-shrink-0 text-left block ">
              <h5 class="pb-2 text-2xl tracking-tight text-black text-bold">
                Kristen White, APRN, FNP-C
              </h5>
              <p class="text-gray-700">
                Kristen White, APRN, FNP-C, is a healthcare expert and an El
                Paso native with over 20 years of experience in the healthcare
                field. As a BSN graduate of Texas Woman's University and MSN
                graduate of the University of Texas at Arlington's Family Nurse
                Practitioner program, Kristen has worked with patients of all
                ages and disease states in both hospital and outpatient
                settings. In the past decade, Kristen's passion and specialty
                have shifted towards lifestyle optimization and health
                maintenance throughout the lifespan, moving away from primarily
                sick management.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
