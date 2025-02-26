// That stuff is supriseingly surprisingly striky as hell !!!

"use client";

import React from "react";

import { motion } from "framer-motion";

function VennDiagram() {
  //left, right, none
  const [isHoverLeft, setIsHoverLeft] = React.useState(false);
  const [isHoverRight, setIsHoverRight] = React.useState(false);
  return (
    <>
      <svg height="800" width="1000" xmlns="http://www.w3.org/2000/svg">
        <motion.circle
          r="180"
          cx="320"
          cy="300"
          ư
          fill="#ced4da"
          fillOpacity="0.35"
          onMouseEnter={() => {
            setIsHoverLeft(true);
            console.log("Captured Left");
          }}
          onMouseLeave={() => setIsHoverLeft(false)}
          animate={
            isHoverLeft && !isHoverRight
              ? {
                  scale: 1.1,
                  x: -70,
                }
              : {
                  scale: 1,
                  x: 0,
                }
          }
        />
        <motion.circle
          r="180"
          cx="520"
          cy="300"
          fill="#ced4da"
          fillOpacity="0.35"
          onMouseEnter={() => {
            setIsHoverRight(true);
            console.log("Captured Right");
          }}
          onMouseLeave={() => {
            setIsHoverRight(false);
          }}
          animate={
            isHoverRight && !isHoverLeft
              ? {
                  scale: 1.1,
                  x: 70,
                }
              : {
                  scale: 1,
                  x: 0,
                }
          }
        />
      </svg>
    </>
  );
}

export default VennDiagram;
