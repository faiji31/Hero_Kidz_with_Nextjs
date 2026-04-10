"use client";
import React from "react";

const ProductCardSkeleton = () => {
  return (
    <div className="card bg-base-100 shadow-md rounded-2xl">
      
      {/* Image Skeleton */}
      <div className="h-52 w-full skeleton rounded-t-2xl"></div>

      {/* Body */}
      <div className="card-body p-4 space-y-3">
        
        {/* Title */}
        <div className="h-4 w-3/4 skeleton"></div>
        <div className="h-4 w-1/2 skeleton"></div>

        {/* Rating */}
        <div className="flex gap-2 items-center">
          <div className="h-4 w-10 skeleton"></div>
          <div className="h-4 w-16 skeleton"></div>
        </div>

        {/* Sold */}
        <div className="h-3 w-20 skeleton"></div>

        {/* Price */}
        <div className="flex gap-2">
          <div className="h-5 w-16 skeleton"></div>
          <div className="h-5 w-12 skeleton"></div>
        </div>

        {/* Button */}
        <div className="h-10 w-full skeleton rounded-xl"></div>
      </div>
    </div>
  );
};

export default ProductCardSkeleton;