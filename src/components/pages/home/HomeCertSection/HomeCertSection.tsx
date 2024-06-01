"use client";

import { useEffect, useState } from "react";

export const HomeCertSection = () => {
  const [degree, setDegree] = useState<number>(0);
  const [autoRotateInterval, setAutoRotateInterval] = useState<any>(null);

  const autoRotate = () => {
    if (degree <= 360) {
      setDegree((prevDegree) => prevDegree + 1);
    } else {
      setDegree(0);
    }
  };

  useEffect(() => {
    const interval = setInterval(autoRotate, 50);
    setAutoRotateInterval(interval);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="flex justify-between w-full h-96 bg-[#1c03fc]">
      <div className="w-[50%] h-full"></div>
      <div className="wrapper flex justify-center items-center w-[50%] h-full">
        <div
          className={`w-[50%] h-[50%] bg-white rounded-md shadow-md p-4 transform-style-3d transition-transform duration-500`}
          style={{
            transform: `rotateY(${degree}deg)`,
          }}
        >
          <div className="absolute w-full h-full backface-hidden p-10">
            <p>Front Content</p>
          </div>
          <div className="absolute w-full h-full backface-hidden p-10 transform rotate-y-180">
            <p>Back Content</p>
          </div>
        </div>
      </div>
    </section>
  );
};