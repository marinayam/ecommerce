"use client";
import React from "react";
import Image from "next/image";
import { Product } from "@/lib/data";
import Link from "next/link";

interface ProductCardProps {
  product: Product;
  buttonText?: string;
  onAddToCart?: (product: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const slug = product.name.toLowerCase().replace(/\s+/g, "-");

  return (
    <Link
      href={`/products/${slug}`}
      className="bg-beige rounded-2xl shadow-md p-6 flex flex-col items-center border border-beige-dark hover:shadow-2xl transition group cursor-pointer"
    >
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
    </Link>
  );
};

export default ProductCard;
