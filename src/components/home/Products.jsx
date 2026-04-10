import React from 'react';
import products from "@/data/toys.json"
import ProductCard from '../card/ProductCard';

const Products = () => {
      return (
            <div>
                  <h2 className='text-center text-4xl font-bold mb-10'>Our <span className="text-primary">Products</span></h2>
                  <div className='grid md:grid-cols-3 gap-5'>
                             {
                              products.map(product=><li key={product.title}><ProductCard product={product}></ProductCard></li>)
                             }
                  </div>
            </div>
      );
};

export default Products;