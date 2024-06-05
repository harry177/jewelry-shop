import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { GeneralButton } from "@/components/ui/GeneralButton";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/GeneralCard";

interface ProductCardProps {
  image: any;
  name: any;
}

export const ProductCard = ({ image, name }: ProductCardProps) => {
  const [hovered, setHovered] = useState(false);

  return (
    <Card
      variant="catalogItems"
      size="catalogSmall"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <CardContent className="flex flex-col">
        <Link href="/">
          <Image src={image[0]} alt="" width={300} height={300}></Image>
        </Link>
        <CardTitle className="text-black">{name}</CardTitle>
        <CardHeader></CardHeader>
        <div className="flex flex-col">
          <div></div>
          <div className="flex">
            <div className="w-[20%]"></div>
            <GeneralButton></GeneralButton>
          </div>
        </div>
        <div className={`${hovered ? "flex" : "hidden"} flex-col`}>
          <div>Product code</div>
          <div>Product type</div>
          <div>Gender</div>
        </div>
      </CardContent>
    </Card>
  );
};
