"use client";

import Link from "next/link";
import { useState } from "react";
import { AiOutlineDown, AiOutlineUp } from "react-icons/ai";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/UI/GeneralDropdown";
import "../UI/ui-styles.css"

export interface NavDataProps {
  title: string;
  subItems: string[];
  baseUrl?: string[];
}

export const BurgerNavMenu = ({ item }: { item: NavDataProps }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <span className="burger-dropdown">
      <DropdownMenu modal={false} open={isOpen} onOpenChange={setIsOpen}>
        <DropdownMenuTrigger
          triggerVariant="burger"
          style={{ pointerEvents: "auto" }}
          onPointerDown={() => setIsOpen((prev) => !prev)}
        >
          {item.title}
          {isOpen ? <AiOutlineUp /> : <AiOutlineDown />}
        </DropdownMenuTrigger>
        <DropdownMenuContent contentVariant="burger" sideOffset={-20}>
          {item.subItems.map((child, index) => (
            <DropdownMenuItem key={index} itemVariant="default">
              <Link href={item.baseUrl ? item.baseUrl[index] : "/"}>{child}</Link>
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </span>
  );
};
