"use client";

import { useState } from "react";
import { AiOutlineDown, AiOutlineUp } from "react-icons/ai";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/shared/utils";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import "./ui-styles.css";

const triggerVariants = cva("flex items-center justify-between outline-none cursor-pointer", {
  variants: {
    variant: {
      default: "gap-5 font-semibold text-sm lg:text-base font-medium",
      burger: "",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

const contentVariants = cva("bg-[#ffffff] font-normal", {
  variants: {
    variant: {
      default: "w-20 shadow-md",
      burger: "relative w-[200px]",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

const itemVariants = cva("inline-flex items-center text-[13px] px-[5px] rounded-[3px]", {
  variants: {
    variant: {
      default: "pl-[10px] mb-[10px] mr-[20px] lg:text-[10px] lgb:text-[13px]",
      burger: "w-[120px] pl-[10px] mb-[10px] mr-[20px]",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

interface GeneralDropdownProps {
  triggerVariant?: VariantProps<typeof triggerVariants>["variant"];
  contentVariant?: VariantProps<typeof contentVariants>["variant"];
  itemVariant?: VariantProps<typeof itemVariants>["variant"];
  triggerName: string;
  daMenuPoints: string[];
}

export const GeneralDropdown = ({
  triggerName,
  daMenuPoints,
  triggerVariant = "default",
  contentVariant = "default",
  itemVariant = "default",
}: GeneralDropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <span className={`${triggerVariant === "burger" ? "SuperContent" : ""}`}>
      <DropdownMenu.Root open={isOpen} onOpenChange={setIsOpen}>
        <DropdownMenu.Trigger
          asChild
          style={{ pointerEvents: "auto" }}
          onMouseEnter={() => triggerVariant === "default" && setIsOpen(true)}
          onMouseLeave={() => triggerVariant === "default" && setIsOpen(false)}
          onPointerDown={() => triggerVariant !== "default" && setIsOpen((prev) => !prev)}
        >
          <div className={cn(triggerVariants({ variant: triggerVariant }))}>
            {triggerName}
            {isOpen ? <AiOutlineUp /> : <AiOutlineDown />}
          </div>
        </DropdownMenu.Trigger>
        <DropdownMenu.Content
          className={cn(contentVariants({ variant: contentVariant }))}
          onMouseEnter={() => triggerVariant === "default" && setIsOpen(true)}
          onMouseLeave={() => triggerVariant === "default" && setIsOpen(false)}
        >
          {daMenuPoints.map((menuPoint, index) => (
            <DropdownMenu.Item key={index} className={cn(itemVariants({ variant: itemVariant }))}>
              {menuPoint}
            </DropdownMenu.Item>
          ))}
        </DropdownMenu.Content>
      </DropdownMenu.Root>
    </span>
  );
};
