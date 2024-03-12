import { motion, Variants } from "framer-motion";

export const HomeCatalogSection = () => {
  const cardVariants: Variants = {
    offscreen: {
      x: -500,
    },
    onscreen: {
      x: 0,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 1.2,
      },
    },
  };
  return (
    <motion.section
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true }}
      className="flex justify-start items-start w-full h-96 bg-[#03fc5e]"
    >
      <motion.h1 variants={cardVariants} className="ml-24">
        Helllloooo
      </motion.h1>
    </motion.section>
  );
};
