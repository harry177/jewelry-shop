"use client";

import { QueryResultRow } from "@vercel/postgres";
import { HomeCarousel } from "@/components/HomeCarousel/HomeCarousel";

interface HomeCollectionProps {
  cols: QueryResultRow[];
}

export const HomeCollectionSection = ({ cols }: HomeCollectionProps) => {
  return (
    <section className="w-full h-[850px] pb-24 bg-gradient-to-r from-pink-100 via-white to-pink-100 bg-radial-gradient bg-clip-content">
      <div className="w-[93vw] border-box">
        <HomeCarousel cols={cols} />
      </div>
    </section>
  );
};
