import React from 'react'
import { Star } from "lucide-react";

export default function Products({ product }) {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition">

      {/* Product Image */}
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-48 object-contain bg-gray-100 rounded-lg p-4"
      />

      {/* Product Details */}
      <div className="mt-3">
        <h2 className="text-lg font-semibold">{product.name}</h2>

        <div className="flex items-center mt-2 text-yellow-400">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              size={18}
              fill={i < Math.round(product.rating) ? "currentColor" : "none"}
              stroke="currentColor"
            />

          ))} <span className="text-gray-500 text-sm ml-2">
            ({product.rating})
          </span>
        </div>

        <p className="text-indigo-600 font-bold text-lg mt-2">
          ${product.price}
        </p>

        <button className="mt-3 w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700">
          Add to Cart
        </button>
      </div>

    </div>
  );
}
