"use client"

import React from "react";
import { HomeHeroSection } from "@/components/HomeHeroSection/HomeHeroSection";
import { HomeCollectionSection } from "@/components/HomeCollectionSection/HomeCollectionSection";
import { HomeCatalogSection } from "@/components/HomeCatalogSection/HomeCatalogSection";
import { HomeCertSection } from "@/components/HomeCertSection/HomeCertSection";


export default function Home() {

  return (
    <div>
      <HomeHeroSection />
      <HomeCollectionSection />
      <HomeCatalogSection />
      <HomeCertSection />
    </div>
  );
}