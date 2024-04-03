import React from "react";
import { sql } from "@vercel/postgres";
import { unstable_noStore as noStore } from "next/cache";
import { HomeHeroSection } from "@/components/HomeHeroSection/HomeHeroSection";
import { HomeCollectionSection } from "@/components/HomeCollectionSection/HomeCollectionSection";
import { HomeCatalogSection } from "@/components/HomeCatalogSection/HomeCatalogSection";
import { HomeCertSection } from "@/components/HomeCertSection/HomeCertSection";


export default async function Home() {
  noStore();
  const { rows } = await sql`SELECT * FROM collections`;
  return (
    <div>
      <HomeHeroSection />
      <HomeCollectionSection cols={rows} />
      <HomeCatalogSection />
      <HomeCertSection />
    </div>
  );
}