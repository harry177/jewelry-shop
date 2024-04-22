"use client";

import Image from "next/image";
import Link from "next/link";
import { QueryResultRow } from "@vercel/postgres";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { Card, CardTitle } from "@/components/UI/GeneralCard";

interface HomeCatalogProps {
  cats: QueryResultRow[];
}

export const HomeCatalogSection = ({ cats }: HomeCatalogProps) => {
  const isMobile = useMediaQuery("(max-width: 767px)");
  return (
    <section className="w-full h-[850px] pb-24 bg-gradient-to-r from-pink-100 via-white to-pink-100 bg-radial-gradient bg-clip-content">
      <div className="grid grid-cols-2 md:grid-cols-4 w-full md:h-[39vw] gap-1">
        {!isMobile && (
          <Card
            variant="default"
            size="mainCatalogVertical"
            className="relative justify-center items-end col-span-1 p-0"
          >
            <Link href="/catalog/rings" className="relative w-[100%] h-[100%] p-10">
              <Image
                src={cats[0].image}
                alt=""
                fill
                sizes="100%"
                className="rounded-[30px] object-cover"
              />
              <CardTitle className="text-[32px] lgb:text-[58px] p-0 lowercase">rings</CardTitle>
            </Link>
          </Card>
        )}
        <div className="flex flex-col justify-between col-span-2 w-full">
          <Card
            variant="default"
            size="mainCatalogHorizontal"
            className="relative h-[40vw] md:h-[49.2%] p-0"
          >
            <Link href="/catalog/bracelets" className="relative w-[100%] h-[100%] p-10">
              <Image
                src={cats[1].image}
                alt=""
                fill
                sizes="100%"
                className="rounded-[30px] object-cover"
              />
              <CardTitle className="text-[32px] lgb:text-[58px] p-0 lowercase">bracelets</CardTitle>
            </Link>
          </Card>
          {isMobile && (
            <div className="flex w-full h-[80vw] gap-1 mt-1 mb-1">
              <Card
                variant="default"
                size="mainCatalogVertical"
                className="relative justify-center items-end w-1/2 p-0"
              >
                <Link href="/catalog/rings" className="relative w-[100%] h-[100%] p-10">
                  <Image
                    src={cats[0].image}
                    alt=""
                    fill
                    sizes="100%"
                    className="rounded-[30px] object-cover"
                  />
                  <CardTitle className="text-[32px] lgb:text-[58px] p-0 lowercase">rings</CardTitle>
                </Link>
              </Card>
              <Card variant="default" size="mainCatalogVertical" className="relative w-1/2 p-0">
                <Link href="/catalog/earrings" className="relative w-[100%] h-[100%] p-10">
                  <Image
                    src={cats[3].image}
                    alt=""
                    fill
                    sizes="100%"
                    className="rounded-[30px] object-cover"
                  />
                  <CardTitle className="text-[32px] lgb:text-[58px] p-0 justify-center leading-none lowercase">
                    earrings
                  </CardTitle>
                </Link>
              </Card>
            </div>
          )}
          <Card
            variant="default"
            size="mainCatalogHorizontal"
            className="relative justify-end items-end h-[40vw] md:h-1/2 p-0"
          >
            <Link href="/catalog/pendants" className="relative w-[100%] h-[100%] p-10">
              <Image
                src={cats[2].image}
                alt=""
                fill
                sizes="100%"
                className="rounded-[30px] object-cover"
              />
              <CardTitle className="text-[32px] lgb:text-[58px] p-0 lowercase">pendants</CardTitle>
            </Link>
          </Card>
        </div>
        {!isMobile && (
          <Card variant="default" size="mainCatalogVertical" className="relative col-span-1 p-0">
            <Link href="/catalog/earrings" className="relative w-[100%] h-[100%] p-10">
              <Image
                src={cats[3].image}
                alt=""
                fill
                sizes="100%"
                className="rounded-[30px] object-cover"
              />
              <CardTitle className="text-[32px] lgb:text-[58px] p-0 justify-center leading-none lowercase">
                earrings
              </CardTitle>
            </Link>
          </Card>
        )}
      </div>
    </section>
  );
};
