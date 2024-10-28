"use client";

import React from "react";
import clsx from "clsx";
import { motion } from "framer-motion";

import styles from "./ToggleSlider.module.css";

function ToggleSlider({ handleToggle }) {
  const [isActived, setisActived] = React.useState(false);

  const activeClassName = isActived ? styles.active : null;
  return (
    <button
      className={styles.switch}
      onClick={() => {
        setisActived(!isActived);
        handleToggle();
      }}
    >
      <motion.div
        className={clsx(styles.slider, activeClassName)}
        initial={false}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 40,
        }}
        animate={{
          x: isActived ? "100%" : "0%",
        }}
      />
    </button>
  );
}

export default ToggleSlider;
