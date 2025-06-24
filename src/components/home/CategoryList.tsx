import React from "react";
import Image from "next/image";
import { categories } from "@/lib/data";

const CategoryList = () => {
  return (
    <section className="py-14 px-4 max-w-6xl mx-auto">
      <h2 className="text-2xl font-bold mb-8 text-center text-accent">
        Shop by Category
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
        {categories.map((cat) => (
          <div
            key={cat.name}
            className="flex flex-col items-center group cursor-pointer"
          >
            <div className="w-28 h-28 md:w-32 md:h-32 rounded-full overflow-hidden shadow-lg mb-3 bg-beige border border-beige-dark group-hover:scale-105 transition">
              <Image
                src={cat.image}
                alt={cat.name}
                width={128}
                height={128}
                className="object-cover w-full h-full"
              />
            </div>
            <span className="text-base font-medium group-hover:underline text-gray-dark">
              {cat.name}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CategoryList;
