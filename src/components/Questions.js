import React from "react";

export default function Questions() {
  return (
    <section id="FAQ" class="md:py-24 py-12 shapes">
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
                    Why is knowing my nutrigenomic profile necessary?
                  </h5>
                  <p>
                    With nutrigenomic sequencing, we can create a program
                    tailored to your unique genetic makeup. As every individual
                    has a different genetic sequence and predisposition for
                    disease, this personalized approach allows us to identify
                    potential health risks and intervene before they develop
                    into more serious conditions. Don't wait for illness to
                    strike – let us use the latest technology to design a
                    program that addresses your specific needs and helps you
                    achieve optimal health and wellness.
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
                    Through comprehensive blood testing, we can gain valuable
                    insights into your cardiovascular health, lipid profiles,
                    renal function, hormone status, and vitamin and mineral
                    levels. Armed with this information, we can provide you with
                    the most accurate and personalized medical recommendations
                    possible. At Oasis Integrated Health, we believe that
                    prevention is key, and that by proactively identifying and
                    addressing potential health issues, we can help you achieve
                    optimal wellness and vitality. Contact us today to learn
                    more about our cutting-edge testing and personalized
                    approach to healthcare.
                  </p>
                </div>
              </div>
              <div class="w-full  text-left">
                <div class="mb-12">
                  <h5 class="font-bold mb-2 text-xl">
                    Why are lifestyle factors so important?
                  </h5>
                  <p>
                    The key to improving your health is by modifying lifestyle
                    factors. The more we understand about your unique lifestyle,
                    the better we can help you achieve your health goals.
                  </p>
                </div>
              </div>
            </div>
            <div class="w-full  text-left">
              <div>
                <h5 class="font-bold mb-2 text-xl">
                  What are the steps in the process?
                </h5>
                <p class="pb-3">
                  1. Register online and schedule the initial consultation.
                </p>
                <p class="pb-3">
                  2. Once we have made an evaluation, we will recommend the
                  testing needed.
                </p>
                <p class="pb-3">
                  3. We'll start by reviewing your intake questionnaire,
                  gathering more detailed information during a one-on-one
                  consultation, and incorporating your unique testing results
                  and genetic information. With this comprehensive
                  understanding, we'll develop a personalized plan that's
                  tailored to align with your individual health goals. Let us
                  help you achieve the results you desire with a fully
                  customized approach designed just for you.
                </p>
                <p class="pb-3">
                  4. Experience the transformation you've been striving for with
                  our unparalleled follow-up process. Unlike other providers who
                  only offer a once-a-year "check-up," we're committed to being
                  fully invested in your journey towards achieving your health
                  and wellness goals. Our team is dedicated to ensuring our
                  recommendations create lasting changes in your life, and we'll
                  work alongside you every step of the way. Let us help you turn
                  your dreams into reality – seeing your transformation is our
                  favorite part of the job!
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
