import React from "react";
import Image from "next/image";
import { Product } from "@/lib/data";

interface ProductCardProps {
  product: Product;
  buttonText: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, buttonText }) => {
  return (
    <div className="bg-beige rounded-2xl shadow-japandi p-6 flex flex-col items-center border border-beige-dark hover:shadow-2xl transition group">
      <div className="w-full h-64 mb-5 relative rounded-xl overflow-hidden">
        <Image
          src={product.image}
          alt={product.name}
          fill
          style={{ objectFit: "cover" }}
          className="rounded-xl group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="text-lg font-semibold mb-2 text-accent text-center">
        {product.name}
      </div>
      <div className="text-xl font-bold text-gray-dark mb-4">
        {product.price}
      </div>
      <button className="bg-accent text-beige-light px-7 py-3 rounded-full font-medium shadow hover:bg-beige hover:text-accent transition text-base">
        {buttonText}
      </button>
    </div>
  );
};

export default ProductCard;
