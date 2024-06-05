"use client";

import { ProductCard } from "@/components/shared/ProductCard/ProductCard";

export const CatalogCore = ({ data }: any) => {
  return (
    <div className="flex gap-10">
      {data.map((row: any) => (
        <ProductCard key={row.id} image={row.images} name={row.name}/>
      ))}
    </div>
  );
};
