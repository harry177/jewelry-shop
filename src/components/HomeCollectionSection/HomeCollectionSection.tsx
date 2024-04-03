"use client";

import { HomeCarousel } from "@/components/HomeCarousel/HomeCarousel";

export const HomeCollectionSection = ({ cols }: any) => {
  return (
    <section className="w-full h-[850px] pb-24 bg-gradient-to-r from-pink-100 via-white to-pink-100 bg-radial-gradient bg-clip-content">
      <div className="w-[98vw] border-box">
        <HomeCarousel cols={cols} />
      </div>
    </section>
  );
};
