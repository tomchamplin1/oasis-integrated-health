import React from "react";

export default function Form() {
  return (
    <div className="md:py-24 py-12">
      <div className="flex flex-wrap grid grid-cols-1 md:grid-cols-2 px-4 md:px-20">
        <div className="text-left">
          <h3 class="pt-5 md:pt-0 text-lg text-left text-blue-700 font-extrabold">
            GET IN TOUCH
          </h3>
          <h1 class="pb-5 md:text-5xl text-5xl font-extrabold leading-none text-black mx-auto">
            Contact us today for a free consultation
          </h1>
          <p className="text-gray-500 pb-5 text-xl">Oasis Integrated Health</p>
          <p className="pb-5 text-lg">El Paso, TX</p>
          <ul>
            <li className="pb-5">
              <a
                href="mailto:oihealthier@gmail.com"
                class="hover:underline text-lg"
              >
                <span className="font-bold">Email</span>: oihealthier@gmail.com
              </a>
            </li>
            <li>
              <a href="tel:+19152552060" class="hover:underline text-lg">
                <span className="font-bold">Phone</span>: +1 (915) 255-2060
              </a>
            </li>
          </ul>
        </div>
        <div className="md:pt-0 pt-24">
          <form
            name="contact-form"
            method="POST"
            data-netlify="true"
            className="bg-blue-700 p-5 md:w-4/5 w-5/5 mx-auto rounded-lg"
          >
            <input type="hidden" name="form-name" value="contact-form" />
            <div class="mb-6">
              <label class="block mb-2 text-sm font-medium text-white text-left">
                Name
              </label>
              <input
                type="text"
                placeholder="Name"
                name="name"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                required=""
              />
            </div>
            <div class="mb-6">
              <label class="block mb-2 text-sm font-medium text-white text-left">
                Email
              </label>
              <input
                type="text"
                placeholder="Email"
                name="email"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                required=""
              />
            </div>
            <div class="mb-6">
              <label class="block mb-2 text-sm font-medium text-white text-left">
                Message
              </label>
              <textarea
                placeholder="Message"
                name="message"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                required=""
              />
            </div>
            <div>
              <button
                type="submit"
                class="text-blue-700 bg-white hover:bg-gray-100 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm sm:w-auto px-5 py-2.5 text-center"
                required="yes"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
