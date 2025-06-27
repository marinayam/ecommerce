"use client";
import { productsAll, Product } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

interface Props {
  slug: string;
}

const COLORS = [
  { name: "Beige", value: "beige", display: "bg-[#e8e3d9]" },
  { name: "Charcoal", value: "charcoal", display: "bg-[#444444]" },
];

export default function ProductDetailClient({ slug }: Props) {
  const product = productsAll.find(
    (item: Product) => item.name.toLowerCase().replace(/\s+/g, "-") === slug
  );

  const [selectedColor, setSelectedColor] = useState(COLORS[0].value);
  const [quantity, setQuantity] = useState(1);
  const [showModal, setShowModal] = useState(false);

  if (!product)
    return (
      <div className="py-20 text-center text-gray-500">Product not found.</div>
    );

  const colorLabel =
    COLORS.find((c) => c.value === selectedColor)?.name || selectedColor;

  return (
    <div className="max-w-3xl mx-auto py-16 px-4">
      <div className="flex flex-col md:flex-row gap-10 items-center">
        <div className="w-full md:w-1/2 aspect-square relative rounded-2xl overflow-hidden bg-beige">
          <Image
            src={product.image}
            alt={product.name}
            fill
            style={{ objectFit: "cover" }}
            className="rounded-2xl"
          />
        </div>
        <div className="flex-1 w-full">
          <h1 className="text-3xl font-bold mb-4 text-accent">
            {product.name}
          </h1>
          <div className="text-2xl font-semibold text-gray-dark mb-6">
            {product.price}
          </div>
          <div className="text-base text-gray-dark mb-8">
            This is a beautiful item that embodies the essence of wabi-sabi and
            Japandi style. (description)
          </div>

          {/* color selection UI */}
          <div className="mb-6">
            <div className="mb-2 font-medium text-gray-dark">Colour:</div>
            <div className="flex gap-4">
              {COLORS.map((color) => (
                <button
                  key={color.value}
                  type="button"
                  className={`w-8 h-8 rounded-full border-2 flex items-center justify-center focus:outline-none ${
                    color.display
                  } ${
                    selectedColor === color.value
                      ? "border-accent ring-2 ring-accent"
                      : "border-gray-300"
                  }`}
                  aria-label={color.name}
                  onClick={() => setSelectedColor(color.value)}
                />
              ))}
            </div>
          </div>

          {/* quantity selection UI */}
          <div className="mb-6">
            <div className="mb-2 font-medium text-gray-dark">Quantity:</div>
            <div className="flex items-center gap-3">
              <button
                type="button"
                className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center text-xl font-bold bg-white hover:bg-beige-light disabled:opacity-40"
                onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                disabled={quantity === 1}
                aria-label="Decrease quantity"
              >
                −
              </button>
              <span className="w-8 text-center text-lg">{quantity}</span>
              <button
                type="button"
                className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center text-xl font-bold bg-white hover:bg-beige-light disabled:opacity-40"
                onClick={() => setQuantity((q) => Math.min(10, q + 1))}
                disabled={quantity === 10}
                aria-label="Increase quantity"
              >
                ＋
              </button>
            </div>
          </div>

          {/* Add to Cart */}
          <button
            className="w-full bg-accent text-beige-light py-3 rounded-full font-semibold text-lg shadow transition mb-2 hover:bg-[#b8b4b1] hover:text-accent active:scale-95 focus:outline-none cursor-pointer"
            onClick={() => setShowModal(true)}
            type="button"
          >
            Add to Cart
          </button>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
          <div className="bg-white rounded-2xl shadow-xl p-8 max-w-xs w-full relative animate-fade-in">
            <button
              className="absolute top-3 right-3 text-gray-400 hover:text-gray-700 text-2xl font-bold"
              onClick={() => setShowModal(false)}
              aria-label="Close"
              type="button"
            >
              ×
            </button>
            <div className="text-center mb-4 text-lg font-semibold text-accent">
              Item added to cart
            </div>
            <div className="flex flex-col items-center mb-4">
              <div className="w-24 h-24 relative mb-2">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  style={{ objectFit: "cover" }}
                  className="rounded-xl"
                />
              </div>
              <div className="font-medium text-gray-dark mb-1">
                {product.name}
              </div>
              <div className="text-sm text-gray-500">Color: {colorLabel}</div>
            </div>
            <div className="flex gap-3 mb-4">
              <Link
                href="/cart"
                className="flex-1 bg-beige-light text-accent py-2 rounded-full font-semibold text-center shadow hover:bg-beige transition"
              >
                View Cart
              </Link>
              <Link
                href="/checkout"
                className="flex-1 bg-accent text-beige-light py-2 rounded-full font-semibold text-center shadow hover:bg-[#b8b4b1] hover:text-accent transition"
              >
                Checkout
              </Link>
            </div>
            <button
              className="w-full text-accent underline text-sm font-medium hover:text-accent/70 transition"
              onClick={() => setShowModal(false)}
              type="button"
            >
              Continue Shopping
            </button>
          </div>
          <div
            className="absolute inset-0"
            onClick={() => setShowModal(false)}
          />
        </div>
      )}
    </div>
  );
}
