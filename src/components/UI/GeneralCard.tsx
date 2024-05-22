"use client";

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/shared/utils";

const cardVariants = cva("flex cursor-pointer", {
  variants: {
    variant: {
      default: "text-[#ffffff] border-0 rounded-[30px] transition ease-in-out duration-300",
      catalogMain: "text-[#ffffff] border-0 rounded-[30px]",
      mainNewItems: "text-[#000000] border border-[#000000] rounded-[30px]",
      catalogItems: "text-[#000000] rounded-[30px]",
    },
    size: {
      default: "w-[30vw] md:w-[40vw] lgb:w-[500px] h-[550px] md:h-[44vw] lgb:h-[550px] rounded-lg",
      mainCatalogVertical: "rounded-sm hover:relative hover:z-10 hover:scale-110 transform p-10",
      mainCatalogHorizontal:
        "h-[299.999px] rounded-sm hover:relative hover:z-10 hover:scale-110 transform p-10",
      mainNewItems:
        "w-[44vw] md:w-[245px] lg:w-[22.5vw] lgx:w-[327px] h-[47vw] md:h-[350px] lg:h-[34vw] lgbplus:h-[490px]",
      catalogBig: "lg:w-[49.7%] lgxx:w-[668px] lg:h-[355px] lgbplus:h-[490px]",
      catalogSmall:
        "w-[49.5%] md:w-[32.9%] lg:w-[24.6%] lgxx:w-[332px] h-[290px] md:h-[375.71px] lg:h-[355px] lgbplus:h-[490px]",
      mainAbout: "w-[600px] h-full rounded-lg",
      authForm: "flex-col w-[40%] h-[40%]"
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
  },
});

export type CardProps = VariantProps<typeof cardVariants> & React.HTMLAttributes<HTMLDivElement>;

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ variant, size, className, ...props }, ref) => (
    <div ref={ref} className={cn(cardVariants({ variant, size, className }))} {...props} />
  ),
);
Card.displayName = "Card";

const CardHeader = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("flex p-6 absolute", className)} {...props} />
  ),
);
CardHeader.displayName = "CardHeader";

const CardTitle = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLHeadingElement>>(
  ({ className, ...props }, ref) => (
    <h3
      ref={ref}
      className={cn(
        "font-unbounded uppercase pl-6 leading-none tracking-tight relative",
        className,
      )}
      {...props}
    />
  ),
);
CardTitle.displayName = "CardTitle";

const CardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p ref={ref} className={cn("text-sm text-muted-foreground", className)} {...props} />
));
CardDescription.displayName = "CardDescription";

const CardContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
  ),
);
CardContent.displayName = "CardContent";

const CardFooter = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("flex items-center p-6 pt-0", className)} {...props} />
  ),
);
CardFooter.displayName = "CardFooter";

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent };
