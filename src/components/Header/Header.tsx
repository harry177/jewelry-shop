"use client";

import Link from "next/link";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { HeaderIcons } from "@/components/HeaderIcons/HeaderIcons";
import { HeaderNavMenu } from "@/components/HeaderNavMenu/HeaderNavMenu";
import { HeaderBurger } from "@/components/HeaderBurger/HeaderBurger";
import { menuItems } from "@/shared/constants";

export const Header = () => {
  const isMobile = useMediaQuery("(max-width: 767px)");
  
  return (
    <header className="flex justify-around items-center h-20 shadow-md">
      <div className="flex justify-between items-center gap-5">
        {isMobile && <HeaderBurger />}
        <Link href="/" className="text-3xl font-semibold">
          J-Shop
        </Link>
      </div>
      {!isMobile && (
        <nav className="flex justify-center">
          <ul className="flex justify-between gap-[7vw] lg:gap-[12vw]">
            {menuItems.map((item, index) => (
              <li key={index} className="group relative flex ">
                <HeaderNavMenu item={item} />
              </li>
            ))}
          </ul>
        </nav>
      )}
      <HeaderIcons />
    </header>
  );
};
