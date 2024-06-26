"use client"
import { useState, useEffect } from 'react';
import ProductCard from "@/components/ui/product-card";
import { Product } from "@/types";
import NoResults from "@/components/ui/no-results";
import React from 'react';

interface ProductListProps {
  title: string;
  items: Product[]
}

const ProductList: React.FC<ProductListProps> = ({
  title,
  items
}) => {


  return (
    <div className="space-y-4">
      <h3 className="font-bold text-3xl">{title}</h3>
      {items.length === 0 && <NoResults />}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {items.map((item) => (
          <React.Fragment key={item.id}>
       
              <ProductCard key={item.id} data={item} />
          
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}

export default ProductList;