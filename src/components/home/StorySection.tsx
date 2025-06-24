import React from "react";

const StorySection = () => {
  return (
    <section className="py-20 px-4 bg-beige">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8 text-accent tracking-tight">
          Our Story
        </h2>
        <div className="space-y-6 text-lg text-gray-dark leading-relaxed">
          <p>
            Wabi of Living is a quiet celebration of simple beauty, grounded in
            the belief that everyday life holds space for reflection and grace.
            Our collection features objects that embody the essence of wabi —
            imperfect charm, natural aging, and quiet harmony.
          </p>
          <p>
            We curate hand-crafted goods for the home and garden, focusing on
            timeless forms and honest materials. Each item tells a quiet story —
            whether a clay tea bowl, a glowing washi lamp, or a bonsai pot
            shaped by tradition.
          </p>
          <p>
            With a commitment to intentional simplicity, we work with artisans
            who honor nature and place. In doing so, we offer an alternative to
            fast consumption — a slower, more mindful way to live.
          </p>
        </div>
      </div>
    </section>
  );
};

export default StorySection;
