"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import "../UI/ui-styles.css";

import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Card, CardHeader, CardTitle } from "@/components/UI/GeneralCard";

const collectionItems = ["Winter", "Spring", "Summer", "Fall"];
const collectionImages = [
  "winter.jpeg",
  "winter.jpeg",
  "winter.jpeg",
  "winter.jpeg",
];
const collectionHovered = [
  "",
  "",
  "",
  "",
];

export const HomeCarousel = () => {
  const [hoverStates, setHoverStates] = useState<{ [key: number]: boolean }>({});

  const handleHover = (index: number, isHovered: boolean) => {
    setHoverStates((prevState) => ({
      ...prevState,
      [index]: isHovered,
    }));
  };

  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={5}
      slidesPerView={"auto"}
      navigation
      slidesOffsetBefore={50}
      slidesOffsetAfter={50}
      watchOverflow
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
      className="h-[580px] md:h-[47vw] lgb:h-[580px] overflow-clip flex gap-[20px]"
    >
      {collectionItems.map((item, index) => (
        <SwiperSlide key={index}>
          <Card
            variant="default"
            size="default"
            className={`${hoverStates[index] ? "opacity-60" : "opacity-100"} relative z-10`}
            onMouseEnter={() => handleHover(index, true)}
            onMouseLeave={() => handleHover(index, false)}
          >
            <Image
              src={
                hoverStates[index]
                  ? `/img/${collectionHovered[index]}`
                  : `/img/${collectionImages[index]}`
              }
              alt=""
              fill
              sizes="100%"
              className="rounded-[30px] object-cover"
            />
            <div
              className={`${
                hoverStates[index] ? "opacity-100" : "opacity-0"
              } w-[110.586px] h-[80.8px] bg-[url("/svg/collection-icon.svg")] bg-contain absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition ease-in-out duration-300`}
            ></div>
            <CardHeader className="bottom-[50px] md:bottom-auto">
              <span>new</span>
              <span className="text-xs mt-1.5 ml-2 font-light">16.12.23</span>
            </CardHeader>
            <CardTitle
              className="top-[90%] md:top-14 text-[18px] md:text-[25px] lg:text-[32px] w-20"
            >
              {item}
            </CardTitle>
          </Card>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
