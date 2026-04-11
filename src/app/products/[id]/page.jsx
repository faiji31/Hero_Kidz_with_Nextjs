"use client";

import React from "react";
import { useParams } from "next/navigation";
import products from "@/data/toys.json";
import { FaStar } from "react-icons/fa";

const ProductDetailsPage = () => {
  const { id } = useParams();

  const product = products.find((p) => p.id === Number(id));

  if (!product) {
    return <div className="p-10 text-center">Product not found</div>;
  }

  const {
    title,
    bangla,
    image,
    price,
    discount,
    ratings,
    reviews,
    sold,
    description,
    info,
    qna,
  } = product;

  const discountedPrice = discount
    ? Math.round(price - (price * discount) / 100)
    : price;

  return (
    <div className="max-w-6xl mx-auto p-5 grid md:grid-cols-2 gap-8">
      
      {/* Image */}
      <div>
        <img
          src={image}
          alt={title}
          className="w-full rounded-2xl shadow-md"
        />
      </div>

      {/* Details */}
      <div className="space-y-4">
        
        {/* Title */}
        <h1 className="text-2xl font-bold">{title}</h1>
        <p className="text-gray-500">{bangla}</p>

        {/* Rating */}
        <div className="flex items-center gap-2">
          <FaStar className="text-yellow-500" />
          <span>{ratings}</span>
          <span className="text-gray-400">({reviews} reviews)</span>
          <span className="text-gray-400">• {sold} sold</span>
        </div>

        {/* Price */}
        <div className="flex items-center gap-3">
          <span className="text-2xl font-bold text-primary">
            ৳{discountedPrice}
          </span>
          {discount && (
            <span className="line-through text-gray-400">
              ৳{price}
            </span>
          )}
        </div>

        {/* Buttons */}
        <div className="flex gap-3">
          <button className="btn btn-primary">Add to Cart</button>
          <button className="btn btn-outline">Buy Now</button>
        </div>

        {/* Description */}
        <div>
          <h2 className="font-semibold text-lg">Description</h2>
          <p className="text-gray-600 whitespace-pre-line">
            {description}
          </p>
        </div>

        {/* Info */}
        <div>
          <h2 className="font-semibold text-lg">Key Features</h2>
          <ul className="list-disc ml-5 text-gray-600">
            {info?.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>

        {/* QNA */}
        <div>
          <h2 className="font-semibold text-lg">Q&A</h2>
          <div className="space-y-2">
            {qna?.map((q, i) => (
              <div key={i} className="border p-3 rounded-lg">
                <p className="font-medium">Q: {q.question}</p>
                <p className="text-gray-600">A: {q.answer}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default ProductDetailsPage;