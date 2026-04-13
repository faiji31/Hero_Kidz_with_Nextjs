import React from 'react';
import Products from '@/components/home/Products';

export const metadata ={
  title: "All Products",
  description:"Browse our collection of all products"
}

const ProductsPage = () => {
  
  return (
    <main className="container mx-auto px-4">
      <Products />
    </main>
  );
};

export default ProductsPage;