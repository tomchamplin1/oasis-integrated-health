import React from "react";
import { Link } from "react-router-dom";

export default function Showcase() {
    return(
        <section class="hero md:pt-52 py-32">
        <div class="md:px-24 mx-auto px-4">
            <div class="flex flex-wrap -mx-4">
                <div class="w-full lg:w-2/5 text-center lg:text-left self-center">
                    <h1 class="pt-12 md:pt-0 mb-4 text-5xl md:text-6xl font-extrabold leading-none text-black">Unleash your healthiest self</h1>
                    <p class="mb-6 text-black text-xl">Genomic medicine, health optimization, and preventative care specialists in El Paso, TX</p>
                    <p class="mb-12">
                        <Link to="/contact"
                            class="rounded inline-block bg-blue-700 hover:bg-blue-800 text-white text-md tracking-wider py-3 px-6 shadow font-bold">
                            Start now
                        </Link>
                    </p>
                </div>
                <div class="hidden lg:block w-full lg:w-3/5 text-center lg:text-right lg:text-left self-end">
                    <img class="w-full xl:w-4/5 z-50 inline-block" src="https://res.cloudinary.com/dm8nr1vwr/image/upload/v1650578539/Oasis%20Integrated%20Health/workout_viuuh1.svg" alt="workout" />
                </div>
            </div>
        </div>
    </section>
    )
}