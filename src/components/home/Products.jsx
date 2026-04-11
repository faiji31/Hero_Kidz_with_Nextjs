import React from 'react';
import products from "@/data/toys.json"; // Ensure path matches
import ProductCard from '../card/ProductCard';

const Products = () => {
  return (
    <section className="py-10">
      <h2 className='text-center text-4xl font-bold mb-10'>
        Our <span className="text-primary">Products</span>
      </h2>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default Products;