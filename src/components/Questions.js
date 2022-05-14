import React from "react";

export default function Questions() {
  return (
    <section id="FAQ" class="pt-24 pb-24 shapes">
      <div class="md:px-20 px-5">
        <div class="flex flex-wrap grid grid-cols-1 md:grid-cols-2">
          <div class="my-auto">
            <h3 class="text-center text-lg md:text-left text-blue-700 font-extrabold">
              FAQ
            </h3>
            <h3 class="mb-12 md:text-4xl text-5xl font-extrabold leading-tight md:text-left text-center">
              Frequently Asked Questions
            </h3>
            <div class="flex flex-wrap grid grid-cols-1">
              <div class="mx-auto w-full  text-left">
                <div class="mb-12">
                  <h5 class="font-bold mb-2 text-xl">
                    Why is knowing my genetic profile necessary?
                  </h5>
                  <p>
                    Genetic sequencing allows us to design a program
                    specifically for you. Every single human has a different
                    genetic sequence and predisposition for disease. By knowing
                    what you are likely to suffer from in the future, we will be
                    able to intervene before the disease develops.
                  </p>
                </div>
              </div>
              <div class="w-full  text-left">
                <div class="mb-12">
                  <h5 class="font-bold mb-2 text-xl">
                    Why is frequent and comprehensive laboratory monitoring
                    necessary?
                  </h5>
                  <p>
                    By evaluating cardiovascular risks, lipid profiles, renal
                    function, hormone status and vitamin and mineral levels
                    through blood testing, we can make the most informed medical
                    recommendations.
                  </p>
                </div>
              </div>
              <div class="w-full  text-left">
                <div class="mb-12">
                  <h5 class="font-bold mb-2 text-xl">
                    Why are lifestyle factors so important?
                  </h5>
                  <p>
                    Altering lifestyle factors is the foundation of improving
                    one's health. The more we know about how your life, the
                    better we will be able to help.
                  </p>
                </div>
              </div>
            </div>
            <div class="w-full  text-left">
              <div>
                <h5 class="font-bold mb-2 text-xl">
                  What are the steps in the process?
                </h5>
                <p>
                  1. Initial consultation
                  <br />
                  2. Genetic and laboratory analysis
                  <br />
                  3. Plan development
                  <br />
                  4. Monthly health coaching with FNP
                  <br />
                  5. Text access to providers with 48 hr response time
                  <br />
                  6. Bi-monthly meetings with MD
                </p>
              </div>
            </div>
          </div>
          <div class="my-auto w-full mx-auto md:pt-0 pt-12">
            <picture>
              <source
                srcset="https://res.cloudinary.com/dm8nr1vwr/image/upload/c_scale,w_700/v1650641444/Oasis%20Integrated%20Health/beach-run_y7m1e7.webp"
                type="image/webp"
              />
              <img
                src="https://res.cloudinary.com/dm8nr1vwr/image/upload/c_scale,w_700/v1650641444/Oasis%20Integrated%20Health/beach-run_y7m1e7.jpg"
                class="z-50 w-4/5 shadow-xl rounded-3xl mx-auto my-auto"
                loading="lazy"
                decoding="async"
                alt="beach run"
              />
            </picture>
          </div>
        </div>
      </div>
    </section>
  );
}
