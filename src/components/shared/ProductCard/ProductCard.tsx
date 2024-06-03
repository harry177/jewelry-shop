import Image from "next/image";
import Link from "next/link";
import { GeneralButton } from "@/components/ui/GeneralButton";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/GeneralCard";

interface ProductCardProps {
  image: any;
  name: any;
}

export const ProductCard = ({ image, name }: ProductCardProps) => {
  return (
    <Card>
      <CardContent className="flex flex-col">
        <Link href="/">
          <Image src={image} alt="" width={300} height={300}></Image>
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
        <CardDescription></CardDescription>
      </CardContent>
    </Card>
  );
};
