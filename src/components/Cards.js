import React from "react";
import { Link } from "react-router-dom";

export default function Cards() {
  return (
    <section id="services" class="md:py-24 py-12">
      <div class="md:px-24 mx-auto px-5">
        <div class="flex flex-wrap grid grid-cols-1 md:grid-cols-2">
          <div class="hidden lg:block my-auto md:w-5/5 mx-auto text-center align-center justify-center pb-12 md:pb-0">
            <picture>
              <source
                srcset="https://res.cloudinary.com/dm8nr1vwr/image/upload/c_scale,w_700/v1650578814/Oasis%20Integrated%20Health/palms_bq9cag.webp"
                type="image/webp"
              />
              <img
                src="https://res.cloudinary.com/dm8nr1vwr/image/upload/c_scale,w_700/v1650578814/Oasis%20Integrated%20Health/palms_bq9cag.jpg"
                class="inline-block w-4/5 shadow-xl rounded-3xl"
                loading="lazy"
                decoding="asnyc"
                alt="palm trees"
              />
            </picture>
          </div>
          <div class="text-center lg:text-left pb-12">
            <h3 class="md:text-lg text-center text-blue-700 font-extrabold">
              OUR SERVICES
            </h3>
            <h3 class="mb-3 md:text-4xl text-5xl font-extrabold leading-tight text-center">
              The <i>Oasis</i> Way
            </h3>
            <p className="text-center">
              We provide forward thinking medical care services in El Paso, TX.
              We believe everyone should have the opportunity to improve their
              health and extend their lifespan.
            </p>
            <div class="px-10 pt-12 md:pt-12 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-5">
              {/* ------ */}
              <div class="text-center rounded border border-gray-200 overflow-hidden hover:shadow-lg duration-700">
                <div className="h1 pt-5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="10%"
                    height="10%"
                    fill="currentColor"
                    class="mx-auto bi bi-graph-up-arrow"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M0 0h1v15h15v1H0V0Zm10 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V4.9l-3.613 4.417a.5.5 0 0 1-.74.037L7.06 6.767l-3.656 5.027a.5.5 0 0 1-.808-.588l4-5.5a.5.5 0 0 1 .758-.06l2.609 2.61L13.445 4H10.5a.5.5 0 0 1-.5-.5Z"
                    />
                  </svg>
                </div>
                <div class="px-6 py-4">
                  <h5 class="mb-2 text-lg md:text-xl font-bold text-black text-center">
                    Hormone Optimization
                  </h5>
                  <p class="text-sm md:text-md text-gray-800">
                    We conduct a detailed evaluation and optimization of your
                    hormone function.
                  </p>
                </div>
              </div>
              {/* ------ */}
              <div class="text-center rounded border border-gray-200 overflow-hidden hover:shadow-lg duration-700">
                <div className="h1 pt-5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="10%"
                    height="10%"
                    fill="black"
                    class="mx-auto bi bi-hospital"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8.5 5.034v1.1l.953-.55.5.867L9 7l.953.55-.5.866-.953-.55v1.1h-1v-1.1l-.953.55-.5-.866L7 7l-.953-.55.5-.866.953.55v-1.1h1ZM13.25 9a.25.25 0 0 0-.25.25v.5c0 .138.112.25.25.25h.5a.25.25 0 0 0 .25-.25v-.5a.25.25 0 0 0-.25-.25h-.5ZM13 11.25a.25.25 0 0 1 .25-.25h.5a.25.25 0 0 1 .25.25v.5a.25.25 0 0 1-.25.25h-.5a.25.25 0 0 1-.25-.25v-.5Zm.25 1.75a.25.25 0 0 0-.25.25v.5c0 .138.112.25.25.25h.5a.25.25 0 0 0 .25-.25v-.5a.25.25 0 0 0-.25-.25h-.5Zm-11-4a.25.25 0 0 0-.25.25v.5c0 .138.112.25.25.25h.5A.25.25 0 0 0 3 9.75v-.5A.25.25 0 0 0 2.75 9h-.5Zm0 2a.25.25 0 0 0-.25.25v.5c0 .138.112.25.25.25h.5a.25.25 0 0 0 .25-.25v-.5a.25.25 0 0 0-.25-.25h-.5ZM2 13.25a.25.25 0 0 1 .25-.25h.5a.25.25 0 0 1 .25.25v.5a.25.25 0 0 1-.25.25h-.5a.25.25 0 0 1-.25-.25v-.5Z" />
                    <path d="M5 1a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1a1 1 0 0 1 1 1v4h3a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1h3V3a1 1 0 0 1 1-1V1Zm2 14h2v-3H7v3Zm3 0h1V3H5v12h1v-3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3Zm0-14H6v1h4V1Zm2 7v7h3V8h-3Zm-8 7V8H1v7h3Z" />
                  </svg>
                </div>
                <div class="px-6 py-4">
                  <h5 class="mb-2 text-lg md:text-xl font-bold text-black text-center">
                    Nutrigenomic Medicine
                  </h5>
                  <p class="text-sm md:text-md text-gray-800">
                    After analyzing your genetic profile, a lifestyle
                    recommendation, supplement regimen and medication protocol
                    will be provided.
                  </p>
                </div>
              </div>
              {/* ------ */}
              <div class="text-center rounded border border-gray-200 overflow-hidden hover:shadow-lg duration-700">
                <div className="h1 pt-5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="10%"
                    height="10%"
                    fill="currentColor"
                    class="mx-auto bi bi-check2-square"
                    viewBox="0 0 16 16"
                  >
                    <path d="M3 14.5A1.5 1.5 0 0 1 1.5 13V3A1.5 1.5 0 0 1 3 1.5h8a.5.5 0 0 1 0 1H3a.5.5 0 0 0-.5.5v10a.5.5 0 0 0 .5.5h10a.5.5 0 0 0 .5-.5V8a.5.5 0 0 1 1 0v5a1.5 1.5 0 0 1-1.5 1.5H3z" />
                    <path d="m8.354 10.354 7-7a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0z" />
                  </svg>
                </div>

                <div class="px-6 py-4">
                  <h5 class="mb-2 text-lg md:text-xl font-bold text-black text-center">
                    Medically Supervised Weight Loss
                  </h5>
                  <p class="text-sm md:text-md text-gray-800">
                    We will help you construct a safe and effective weight loss
                    strategy.
                  </p>
                </div>
              </div>
              {/* ------ */}
              <div class="text-center rounded border border-gray-200 overflow-hidden hover:shadow-lg duration-700">
                <div className="h1 pt-5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="10%"
                    height="10%"
                    fill="black"
                    class="mx-auto bi bi-clipboard2-heart"
                    viewBox="0 0 16 16"
                  >
                    <path d="M10.058.501a.501.501 0 0 0-.5-.501h-2.98c-.276 0-.5.225-.5.501A.499.499 0 0 1 5.582 1a.497.497 0 0 0-.497.497V2a.5.5 0 0 0 .5.5h4.968a.5.5 0 0 0 .5-.5v-.503A.497.497 0 0 0 10.555 1a.499.499 0 0 1-.497-.499Z" />
                    <path d="M3.605 2a.5.5 0 0 0-.5.5v12a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5v-12a.5.5 0 0 0-.5-.5h-.5a.5.5 0 0 1 0-1h.5a1.5 1.5 0 0 1 1.5 1.5v12a1.5 1.5 0 0 1-1.5 1.5h-9a1.5 1.5 0 0 1-1.5-1.5v-12a1.5 1.5 0 0 1 1.5-1.5h.5a.5.5 0 0 1 0 1h-.5Z" />
                    <path d="M8.068 6.482c1.656-1.673 5.795 1.254 0 5.018-5.795-3.764-1.656-6.69 0-5.018Z" />
                  </svg>
                </div>

                <div class="px-6 py-4">
                  <h5 class="mb-2 text-lg md:text-xl font-bold text-black text-center">
                    Individualized Primary and Preventative Care
                  </h5>
                  <p class="text-sm md:text-md text-gray-800">
                    We provide not only wellness medicine, but also disease
                    management with a focus of limiting the need for
                    prescription medication.
                  </p>
                </div>
              </div>
            </div>
            {/* <div class="pb-24 justify-center items-center text-center space-y-4 sm:flex sm:space-y-0 sm:space-x-4">
        <p className="mb-2">
          <a
            href="/users/sign_up"
            class="rounded inline-block bg-blue-700 hover:bg-blue-800 text-white text-sm tracking-wider py-3 px-5 shadow font-bold"
          >
            Learn More
          </a>
        </p>
      </div> */}
          </div>
        </div>
      </div>
      <div className="text-center">
        <p class="md:pt-12 mx-auto">
          <a
            href="https://oihealth.evahealth.com/login"
            class="rounded inline-block bg-blue-700 hover:bg-blue-800 text-white text-lg tracking-wider py-4 px-8 shadow font-bold"
          >
            Get started
          </a>
        </p>
      </div>
    </section>
  );
}
