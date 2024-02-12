"use client";

import { useState } from "react";
import Link from "next/link";
import { AiOutlineUser, AiOutlineHeart, AiOutlineShoppingCart } from "react-icons/ai";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { GeneralDropdown } from "@/components/UI/GeneralDropdown";

const menuItems = [
  { title: "Catalog", subItems: ["raz", "dva", "tri"] },
  { title: "Collections", subItems: ["raz", "dva", "tri"] },
  { title: "Certificates", subItems: ["raz", "dva", "tri"] },
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
              className={`absolute flex w-80 min-h-60 top-20 ${isOpen ? "left-0" : "-left-80"} shadow-md rounded-br-lg transition-all duration-300`}
            >
              <nav className="flex justify-center pt-2 ml-[94px]">
                <ul className="flex flex-col gap-5 items-start justify-evenly w-full">
                  {menuItems.map((item, index) => (
                    <li key={index} className={`${index === 1 && "top-[-2px]"} flex relative`}>
                      <GeneralDropdown
                        triggerVariant="burger"
                        contentVariant="burger"
                        itemVariant="burger"
                        triggerName={item.title}
                        daMenuPoints={item.subItems}
                      />
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </>
        )}

        <span className="text-3xl font-semibold">J-Shop</span>
      </div>
      {!isMobile && (
        <nav className="flex justify-center">
          <ul className="flex justify-between gap-[7vw] lg:gap-[12vw]">
            {menuItems.map((item, index) => (
              <li key={index} className="group relative flex ">
                <GeneralDropdown triggerName={item.title} daMenuPoints={item.subItems} />
              </li>
            ))}
          </ul>
        </nav>
      )}
      <div className="w-32 h-10 flex justify-around items-center">
        <Link href="/">
          <AiOutlineUser className="w-5 h-5" />
        </Link>
        <Link href="/favorites">
          <AiOutlineHeart className="w-5 h-5" />
        </Link>
        <Link href="/cart">
          <AiOutlineShoppingCart className="w-5 h-5" />
        </Link>
      </div>
    </header>
  );
};
