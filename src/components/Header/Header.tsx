"use client";

import { useState } from "react";
import Link from "next/link";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { GeneralDropdown } from "@/components/UI/GeneralDropdown";
import { HeaderIcons } from "../HeaderIcons/HeaderIcons";

const menuItems = [
  {
    title: "Catalog",
    subItems: ["All products", "Rings", "Necklaces"],
    baseUrl: ["/catalog", "/catalog/rings", "/catalog/necklaces"],
  },
  { title: "Collections", subItems: ["Winter", "Spring", "Summer"] },
  { title: "Certificates", subItems: ["500$", "1000$", "3000$"] },
];

const genericHamburgerLine = `h-1 w-6 my-1 rounded-full bg-black transition ease transform duration-300`;

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const isMobile = useMediaQuery("(max-width: 767px)");
  return (
    <header className="flex justify-around items-center h-20 shadow-md">
      <div className="flex justify-between items-center gap-5">
        {isMobile && (
          <>
            <button
              className="flex flex-col h-12 w-12 border-2 border-black rounded justify-center items-center group"
              onClick={() => setIsOpen(!isOpen)}
            >
              <div
                className={`${genericHamburgerLine} ${
                  isOpen
                    ? "rotate-45 translate-y-3 opacity-50 group-hover:opacity-100"
                    : "opacity-50 group-hover:opacity-100"
                }`}
              />
              <div
                className={`${genericHamburgerLine} ${isOpen ? "opacity-0" : "opacity-50 group-hover:opacity-100"}`}
              />
              <div
                className={`${genericHamburgerLine} ${
                  isOpen
                    ? "-rotate-45 -translate-y-3 opacity-50 group-hover:opacity-100"
                    : "opacity-50 group-hover:opacity-100"
                }`}
              />
            </button>
            <div
              className={`absolute flex w-80 min-h-80 top-20 ${isOpen ? "left-0" : "-left-80"} bg-[#ffffff] shadow-md rounded-br-lg transition-all duration-300 z-50`}
            >
              <div className="flex flex-col gap-5 ml-[94px]">
                <nav className="flex justify-center">
                  <ul className="flex flex-col gap-5 items-start justify-start">
                    {menuItems.map((item, index) => (
                      <li key={index} className={`${index === 1 && "top-[-2px]"} flex relative`}>
                        <GeneralDropdown
                          triggerVariant="burger"
                          contentVariant="burger"
                          itemVariant="burger"
                          triggerName={item.title}
                          daMenuPoints={item.subItems}
                          baseUrl={item.baseUrl}
                        />
                      </li>
                    ))}
                  </ul>
                </nav>
                <HeaderIcons />
              </div>
            </div>
          </>
        )}

        <Link href="/" className="text-3xl font-semibold">
          J-Shop
        </Link>
      </div>
      {!isMobile && (
        <nav className="flex justify-center">
          <ul className="flex justify-between gap-[7vw] lg:gap-[12vw]">
            {menuItems.map((item, index) => (
              <li key={index} className="group relative flex ">
                <GeneralDropdown
                  triggerName={item.title}
                  daMenuPoints={item.subItems}
                  baseUrl={item.baseUrl}
                />
              </li>
            ))}
          </ul>
        </nav>
      )}
      <HeaderIcons />
    </header>
  );
};
