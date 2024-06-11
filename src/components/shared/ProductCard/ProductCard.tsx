"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/GeneralButton";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/GeneralCard";

interface ProductCardProps {
  product: any;
}

export const ProductCard = ({ product }: ProductCardProps) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className={`relative w-full sm:w-1/2 md:w-1/3 lg:w-[332px] min-h-[333.7px] ${
        hovered ? 'z-10 transform scale-105 ' : ''
      } duration-300`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Card
        variant="catalogAuto"
        size="catalogAuto"
        className={`${hovered ? 'absolute' : 'z-0'}`}
      >
        <CardContent className="flex flex-col">
          <Link href="/" className="flex justify-center">
            <Image src={product.images[0]} alt="" width={220} height={220}></Image>
          </Link>
          <CardTitle className="h-10 text-black">{product.name}</CardTitle>
          <CardHeader></CardHeader>
          <div className="flex flex-col">
            <div></div>
            <div className="flex">
              <div className="w-[20%]"></div>
              <Button>Details</Button>
            </div>
          </div>
          <div className={`${hovered ? "flex" : "hidden"} flex-col justify-start`}>
            <div>Product code: {product.code}</div>
            <div>Product type: {product.type}</div>
            <div>Gender: {product.gender}</div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
