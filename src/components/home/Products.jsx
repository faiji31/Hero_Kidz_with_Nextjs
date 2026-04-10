import React from 'react';
import products from "@/data/toys.json"

const Products = () => {
      return (
            <div>
                  <h2 className='text-center text-4xl font-bold mb-10'>Our <span className="text-primary">Products</span></h2>
                  <div className=''>
                             {
                              products.map(product=><li key={product.title}>{product.title}</li>)
                             }
                  </div>
            </div>
      );
};

export default Products;