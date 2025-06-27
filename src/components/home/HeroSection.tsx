import React from "react";
import Image from "next/image";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="relative flex flex-col items-center justify-center text-center py-24 md:py-36 bg-beige-light">
      <Image
        src="/hero-wabi.jpg"
        alt="Wabi of Living Hero"
        fill
        style={{ objectFit: "cover", zIndex: 0, opacity: 0.13 }}
        className="absolute inset-0 rounded-b-2xl"
      />
      <div className="max-w-2xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight text-accent italic drop-shadow">
          Wabi of Living
        </h1>
        <p className="text-xl md:text-2xl text-gray-dark mb-10">
          A refined lifestyle where Japanese aesthetics harmonise with modern
          living.
        </p>
        <Link
          href="#"
          className="inline-block bg-accent text-beige-light px-10 py-4 rounded-full font-semibold shadow-md hover:bg-beige transition"
        >
          View Collection
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;
