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
                Jeremy is a physician with more than 25 years of experience. He
                is a graduate of Southwestern Medical School and attended
                residency at Vanderbilt University Medical Center. Jeremy’s goal
                is to prevent the health crises he sees every day. After
                completing a fellowship in genomic medicine in 2022, his focus
                has shifted towards prevention, early detection of disease, and
                health optimization using genetics and integrative medicine.
                Jeremy is passionate about the maintenance of one's mental and
                physical capacities regardless of age.
              </p>
            </div>
            <div class="flex-shrink-0 text-left block ">
              <h5 class="pb-2 text-2xl tracking-tight text-black text-bold">
                Kristen White, APRN, FNP-C
              </h5>
              <p class="text-gray-700">
                An El Paso native, Kristen is a BSN graduate of Texas Woman’s
                University and MSN graduate of University of Texas at
                Arlington's Family Nurse Practictioner program. She has more
                than 20 years of experience working in the health care field.
                Kristen has worked with patients of all ages and disease states
                both in and out of the hospital setting. Over the last 10 years,
                Kristen’s passion and specialty have moved away from primarily
                sick management and towards lifestyle optimization and health
                maintenance throughout the life span.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
