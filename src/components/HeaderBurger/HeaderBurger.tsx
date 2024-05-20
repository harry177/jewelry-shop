"use client";

import { useState } from "react";
import { HeaderIcons } from "@/components/HeaderIcons/HeaderIcons";
import { BurgerNavMenu } from "@/components/BurgerNavMenu/BurgerNavMenu";
import { menuItems } from "@/shared/constants";

const genericHamburgerLine = `h-1 w-6 my-1 rounded-full bg-black transition ease transform duration-300`;

export const HeaderBurger = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
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
                  <BurgerNavMenu item={item}/>
                </li>
              ))}
            </ul>
          </nav>
          <HeaderIcons />
        </div>
      </div>
    </>
  );
};
