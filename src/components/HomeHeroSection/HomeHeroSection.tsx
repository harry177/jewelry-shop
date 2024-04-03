"use client";

import Image from "next/image";
import { motion, Variants } from "framer-motion";

export const HomeHeroSection = () => {
  const titleVariants: Variants = {
    offscreen: {
      x: -1000,
    },
    onscreen: {
      x: 0,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 1,
      },
    },
  };
  const spanVariants: Variants = {
    offscreen: {
      x: 1000,
    },
    onscreen: {
      x: 0,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 1,
      },
    },
  };
  return (
    <motion.section
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true }}
      className="flex justify-center items-center w-full h-[635px] pb-24 bg-gradient-to-r from-pink-100 via-white to-pink-100 bg-radial-gradient bg-clip-content"
    >
      <motion.h1 variants={titleVariants} className="absolute text-5xl text-[#f5589c] font-bold mt-[-300px] z-1">
        SPRING SALE
      </motion.h1>
      <motion.span variants={spanVariants} className="absolute text-5xl text-[#f5589c] font-bold mt-[-100px] z-1">70%</motion.span>
      <Image src="/img/hero-banner.jpg" alt="spring" width={900} height={900} sizes="100vw" />
    </motion.section>
  );
};
