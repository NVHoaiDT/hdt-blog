"use client";

import React from "react";

import { motion } from "framer-motion";

function VennDiagram() {
  return (
    <>
      <svg height="800" width="1000" xmlns="http://www.w3.org/2000/svg">
        <motion.circle
          r="180"
          cx="300"
          cy="300"
          fill="red"
          fillOpacity="0.35"
          whileHover={{ scale: 1.1, x: -100 }}
        />
        <motion.circle
          r="180"
          cx="500"
          cy="300"
          fill="blue"
          fillOpacity="0.35"
          whileHover={{ scale: 1.1, x: 100 }}
        />
      </svg>
    </>
  );
}

export default VennDiagram;
