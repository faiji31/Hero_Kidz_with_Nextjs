"use client";
import React from "react";
import { FaStar } from "react-icons/fa";
import { MdShoppingCart } from "react-icons/md";

const ProductCard = ({ product }) => {
  const {
    title,
    image,
    price,
    discount,
    ratings,
    reviews,
    sold,
  } = product;

  const discountedPrice = discount
    ? Math.round(price - (price * discount) / 100)
    : price;

  return (
    <div className="card bg-base-100 shadow-md hover:shadow-xl transition duration-300 rounded-2xl">
      
      {/* Image */}
      <figure className="relative">
        <img
          src={image}
          alt={title}
          className="h-52 w-full object-cover rounded-t-2xl"
        />

        {/* Discount Badge */}
        {discount && (
          <div className="absolute top-2 left-2 badge badge-error text-white">
            -{discount}%
          </div>
        )}
      </figure>

      {/* Body */}
      <div className="card-body p-4">
        
        {/* Title */}
        <h2 className="font-semibold text-lg line-clamp-2">{title}</h2>

        {/* Rating + Reviews */}
        <div className="flex items-center gap-2 text-sm">
          <div className="flex items-center text-yellow-500">
            <FaStar />
            <span className="ml-1">{ratings}</span>
          </div>
          <span className="text-gray-400">({reviews} reviews)</span>
        </div>

        {/* Sold */}
        <p className="text-xs text-gray-400">{sold} sold</p>

        {/* Price */}
        <div className="flex items-center gap-2 mt-2">
          <span className="text-lg font-bold text-primary">
            ৳{discountedPrice}
          </span>

          {discount && (
            <span className="line-through text-sm text-gray-400">
              ৳{price}
            </span>
          )}
        </div>

        {/* Button */}
        <button className="btn btn-primary mt-3 rounded-xl flex items-center gap-2">
          <MdShoppingCart size={18} />
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;