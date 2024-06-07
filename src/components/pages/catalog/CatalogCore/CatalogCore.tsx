"use client";

import { ProductCard } from "@/components/shared/ProductCard/ProductCard";

export const CatalogCore = ({ data }: any) => {
  return (
    <div className="relative flex flex-wrap gap-y-5 pt-10 mb-48">
      {data.map((row: any) => (
        <ProductCard key={row.id} product={row} />
      ))}
    </div>
  );
};
