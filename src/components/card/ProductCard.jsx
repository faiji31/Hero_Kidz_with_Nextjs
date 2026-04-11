"use client";
import React from "react";
import Link from "next/link";
import { FaStar, FaEye } from "react-icons/fa";
import { MdShoppingCart } from "react-icons/md";

const ProductCard = ({ product }) => {
  const { title, image, price, discount, ratings, reviews, sold, id } = product;
  const discountedPrice = discount ? Math.round(price - (price * discount) / 100) : price;

  return (
    <div className="card bg-base-100 shadow-md hover:shadow-xl transition duration-300 rounded-2xl border border-base-200">
      <figure className="relative">
        <img src={image} alt={title} className="h-52 w-full object-cover rounded-t-2xl" />
        {discount > 0 && (
          <div className="absolute top-2 left-2 badge badge-error text-white">-{discount}%</div>
        )}
      </figure>
      <div className="card-body p-4">
        <h2 className="font-semibold text-lg line-clamp-2 h-14">{title}</h2>
        <div className="flex items-center gap-2 text-sm text-yellow-500">
          <FaStar /> <span>{ratings}</span>
          <span className="text-gray-400">({reviews} reviews)</span>
        </div>
        <p className="text-xs text-gray-400">{sold} sold</p>
        <div className="flex items-center gap-2 mt-2">
          <span className="text-lg font-bold text-primary">৳{discountedPrice}</span>
          {discount > 0 && <span className="line-through text-sm text-gray-400">৳{price}</span>}
        </div>
        <div className="flex gap-2 mt-4">
          <button className="btn btn-primary btn-sm flex-1 rounded-xl gap-2">
            <MdShoppingCart size={18} /> Add
          </button>
          <Link href={`/products/${id}`} className="flex-1">
            <button className="btn btn-outline btn-sm w-full rounded-xl gap-2">
              <FaEye size={16} /> View
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;