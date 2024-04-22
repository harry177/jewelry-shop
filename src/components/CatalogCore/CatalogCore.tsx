"use client";

import Image from "next/image";

export const CatalogCore = ({ data }: any) => {
  return (
    <div className="flex gap-10">
      {data.map((row: any) => (
        <div key={row.id}>
          <Image alt="image" src={row.image} width={300} height={300} />
          <span>{row.name}</span>
        </div>
      ))}
    </div>
  );
};
