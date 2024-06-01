"use client";

import Link from "next/link";
import { useState } from "react";
import { AiOutlineDown, AiOutlineUp } from "react-icons/ai";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/GeneralDropdown";

export interface NavDataProps {
  title: string;
  subItems: string[];
  baseUrl?: string[];
}

export const HeaderNavMenu = ({ item }: { item: NavDataProps }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <DropdownMenu modal={false} open={isOpen} onOpenChange={setIsOpen}>
      <DropdownMenuTrigger
        triggerVariant="default"
        style={{ pointerEvents: "auto" }}
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
      >
        {item.title}
        {isOpen ? <AiOutlineUp /> : <AiOutlineDown />}
      </DropdownMenuTrigger>
      <DropdownMenuContent
        contentVariant="default"
        sideOffset={0}
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
      >
        {item.subItems.map((child, index) => (
          <DropdownMenuItem key={index} itemVariant="default">
            <Link href={item.baseUrl ? item.baseUrl[index] : "/"}>{child}</Link>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
