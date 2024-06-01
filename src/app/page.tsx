import React from "react";
import { sql } from "@vercel/postgres";
import { unstable_noStore as noStore } from "next/cache";
import { HomeHeroSection } from "@/components/pages/home/HomeHeroSection/HomeHeroSection";
import { HomeCollectionSection } from "@/components/pages/home/HomeCollectionSection/HomeCollectionSection";
import { HomeCatalogSection } from "@/components/pages/home/HomeCatalogSection/HomeCatalogSection";
import { HomeCertSection } from "@/components/pages/home/HomeCertSection/HomeCertSection";


export default async function Home() {
  noStore();
  const { rows: collections } = await sql`SELECT * FROM collections`;
  const { rows: catalog } = await sql`SELECT * FROM catalog_categories`;
  return (
    <div>
      <HomeHeroSection />
      <HomeCollectionSection cols={collections} />
      <HomeCatalogSection cats={catalog} />
      <HomeCertSection />
    </div>
  );
}