import ProductCardSkeleton from '@/components/skeleton/ProductSkeleton';
import React from 'react';

const Loding = () => {
      return (
            <div className='grid md:grid-cols-3 gap-5'>
                  {
                        [...Array(9)].map((_, index)=>(
                              <ProductCardSkeleton key={index}></ProductCardSkeleton>
                        ))
                  }
                  
            </div>
      );
};

export default Loding;