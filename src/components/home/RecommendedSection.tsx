import React from "react";
import { recommendedProducts } from "@/lib/data";
import ProductCard from "../ui/ProductCard";

const RecommendedSection = () => {
  return (
    <section className="py-16 px-4 max-w-7xl mx-auto w-full">
      <h2 className="text-3xl font-bold mb-10 text-center text-accent tracking-tight">
        Recommended For You
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {recommendedProducts.map((item) => (
          <ProductCard
            key={item.name}
            product={item}
            buttonText="View Details"
          />
        ))}
      </div>
    </section>
  );
};

export default RecommendedSection;
