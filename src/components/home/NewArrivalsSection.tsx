import React from "react";
import { newArrivals } from "@/lib/data";
import ProductCard from "../ui/ProductCard";

const NewArrivalsSection = () => {
  return (
    <section className="py-16 px-4 max-w-6xl mx-auto w-full">
      <h2 className="text-3xl font-bold mb-10 text-center text-accent tracking-tight">
        New Arrivals
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {newArrivals.map((item) => (
          <ProductCard
            key={item.name}
            product={item}
            buttonText="Add to Cart"
          />
        ))}
      </div>
    </section>
  );
};

export default NewArrivalsSection;
